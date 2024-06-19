// noinspection ExceptionCaughtLocallyJS

import axios, { Method } from 'axios';
import { isNumber } from 'lodash';
import qs from 'qs';
import { getSetting, setSetting } from '../dymo-js-sdk';
import { xmlToJson } from '../dymo/xml';
import { buildApiUrl } from '../settings';

export const GET = 'get';
export const POST = 'post';

const apiService = async ({
  url,
  method = GET,
  params = undefined,
  headers = {},
  debug = false,
  timeout = getSetting('API_TIMEOUT'),
  ...otherParams
}) => {
  const writer = (output: any, force = debug) => {
    if (force) {
      console.log('apiService.writer', output);
    }
  };

  try {
    const { data = undefined } = await axios(url, {
      method: method as Method,
      [method === GET ? 'params' : 'data']: params,
      headers,
      timeout,
      ...otherParams,
    });

    // if data is a string and starts with < it's probably xml
    if (data && typeof data === 'string' && data.charAt(0) == '<') {
      return xmlToJson(data);
    }

    return data;
  } catch (e) {
    writer(e);

    throw e;
  }
};

export const setCachedService = (port: number, host: string) => {
  if (host) {
    setSetting('Host', host);
  }
  if (port) {
    setSetting('Port', port);
  }
};

export const getAjaxPromise = (port: number, host: string) => {
  const url = buildApiUrl(getSetting('WS_CMD_STATUS'), {
    port,
    host,
  });

  return apiService({
    url,
    timeout: getSetting('WS_CHECK_TIMEOUT'),
  });
};

export const _findWebService = async (
  host: string,
  successFindWebService: any,
  errorFindWebService: any,
) => {
  const startPort = getSetting('WS_START_PORT');
  const endPort = getSetting('WS_END_PORT');
  const ajaxPromises = [];

  for (let i = startPort; i <= endPort; ++i) {
    ajaxPromises.push(
      getAjaxPromise(i, host)
        .then((res) => (res ? i : false))
        .catch(() => false),
    );
  }

  try {
    const ports = await Promise.all(ajaxPromises);
    errorFindWebService && errorFindWebService();

    let found = false;

    ports.forEach((port) => {
      if (!found && isNumber(port)) {
        found = true;
        setCachedService(port, host);
        successFindWebService();
      }
    });

    if (!found) {
      throw 'Could not find dymo port';
    }
  } catch (e) {
    errorFindWebService && errorFindWebService(e);
  }
};

// Aliases that used to do basically the same thing.
export const asyncFindWebService = (onSuccess: any, onError: any) =>
  _findWebService(undefined, onSuccess, onError);
export const syncCheckWebService = (onSuccess: any, onError: any) =>
  _findWebService(undefined, onSuccess, onError);

export const invokeWsCommandAsync = (method: string, command: string, params = {}) => {
  const url = buildApiUrl(command);

  return apiService({
    url,
    method,
    params: params ? qs.stringify(params) : undefined,
    withCredentials: false,
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
  });
};
