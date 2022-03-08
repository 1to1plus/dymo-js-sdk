// noinspection ExceptionCaughtLocallyJS

import axios from 'axios'
import { isNumber } from 'lodash'
import qs from 'qs'
import { getSetting, buildApiUrl, setSetting } from '../settings'
import printLabel2 from '../dymo/label/framework/PrintLabel2'
import { xmlToJson } from '../dymo/xml'

export const GET = 'get'
export const POST = 'post'
export const PATCH = 'patch'
export const PUT = 'put'
export const DELETE = 'delete'
export const OPTIONS = 'options'

const apiService = async ({
  url,
  method = GET,
  params = undefined,
  headers = {},
  debug = false,
  timeout = 1000,
}) => {
  const writer = (output, force = debug) => {
    if (force) {
      console.log('apiService.writer', output)
    }
  };

  try {
    const config = {
      method,
      url,
      [method === GET ? 'params' : 'data']: params,
      headers,
      rejectUnauthorized: false,
      timeout,
    }

    const { data = undefined, ...others } = await axios(config)

    // if data is a string and starts with < it's probably xml
    if (data && typeof data === 'string' && data.charAt(0) == '<') {
      const xmlResponse = xmlToJson(data, {})
      return JSON.parse(xmlResponse)
    }

    return data
  } catch (e) {
    writer(e);

    throw e;
  }
};

export const setCachedService = (port, host) => {
  setSetting('Host', host);
  setSetting('Port', port);
};

export const fireAjaxAsync = async (method, command, params, defaultData = {}) => {
  const WS_PROTOCOL = getSetting('WS_PROTOCOL');
  const WS_SVC_HOST = getSetting('WS_SVC_HOST');
  const WS_SVC_PATH = getSetting('WS_SVC_PATH');

  const url = `${WS_PROTOCOL + WS_SVC_HOST}:${getSetting(
    'WS_START_PORT',
  )}/${WS_SVC_PATH}/${command}`;

  const { data = defaultData } = await apiService({
    url,
    params,
    method,
  });

  return data;
};

export const ajaxSync = (url, data, method, defaultData = undefined) => {
  const { data: responseData = defaultData } = apiService({
    url,
    params: data,
    method,
  });

  return responseData;
};

export const getAjaxPromise = (port, host) => {
  const url = buildApiUrl(getSetting('WS_CMD_STATUS'), {
    port,
    host,
  });

  return apiService({
    url,
    timeout: getSetting('WS_CHECK_TIMEOUT'),
  });
};

export const _findWebService = async (host, successFindWebService, errorFindWebService) => {
  const startPort = getSetting('WS_START_PORT');
  const endPort = getSetting('WS_END_PORT');
  const ajaxPromises = [];

  for (let i = startPort; i <= endPort; ++i) {
    ajaxPromises.push(getAjaxPromise(i, host));
  }

  // using reverse logic: first successful response will result in rejected promise, so it will break .all() loop
  // and ignore all pending results from other promises.
  // So 'thenCatch' is called in case of success, and 'then' handler is called in case of failure (no ports found).
  try {
    const ports = await Promise.all(ajaxPromises).catch(() => false);
    errorFindWebService && errorFindWebService()

    let found = false;

    ports.forEach((port) => {
      if (!found && isNumber(port)) {
        found = true;
        setCachedService(port, host);
        successFindWebService();
      }
    });

    if (!found) {
      throw 'Could not find dymo port'
    }
  } catch (e) {
    errorFindWebService && errorFindWebService(e)
  }
};

// Aliases that used to do basically the same thing.
export const asyncFindWebService = (onSuccess, onError) =>
  _findWebService(undefined, onSuccess, onError)
export const syncCheckWebService = (onSuccess, onError) =>
  _findWebService(undefined, onSuccess, onError)

export const invokeWsCommandAsync = (method, command, params) => {
  const url = buildApiUrl(command)

  return apiService({
    url,
    method,
    params: params ? qs.stringify(params) : undefined,
    withCredentials: false,
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
  })
}

export const printLabelAndPollStatus = (
  printerName,
  printParamsXml,
  labelXml,
  labelSetXml,
  statusCallback,
  pollInterval,
) => {
  const printJob = printLabel2(printerName, printParamsXml, labelXml,
    labelSetXml)

  const statusChecker = async function (pjs) {
    const callbackResult = statusCallback(printJob, pjs)
    if (!callbackResult) return

    // schedule more status checking
    await new Promise((resolve) => {
      setTimeout(resolve, pollInterval)
    })

    printJob.getStatus(statusChecker)
  }

  printJob.getStatus(statusChecker);

  return printJob;
};

export default apiService;
