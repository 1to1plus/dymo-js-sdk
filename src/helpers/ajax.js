// noinspection ExceptionCaughtLocallyJS

import axios from 'axios'
import { getSetting, buildApiUrl, setSetting } from '../settings'
import { isNumber } from 'lodash'

export const GET = 'get'
export const POST = 'post'
export const PUT = 'put'
export const DELETE = 'delete'

const apiService = ({
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
  }

  try {
    const config = {
      method,
      url,
      [method === GET ? 'data' : 'params']: params,
      headers,
      rejectUnauthorized: false,
      timeout,
    }

    return axios(config)
  } catch (e) {
    writer(e)

    throw e
  }
}

export const setCachedService = (port, host) => {
  setSetting('Host', host)
  setSetting('Port', port)
}

export const fireAjaxAsync = async (
  method,
  command,
  params,
  defaultData = {},
) => {
  const url = `${WS_PROTOCOL + WS_SVC_HOST}:${getSetting(
    'WS_START_PORT')}/${WS_SVC_PATH}/${command}`

  const { data = defaultData } = await apiService({
    url,
    params,
    method,
  })

  return data
}

export const ajaxSync = (url, data, method, defaultData = undefined) => {
  const { data = defaultData } = apiService({
    url,
    params: data,
    method,
  })

  return data
}

const checkServiceStatus = async (port, host) => {
  try {
    const url = await buildApiUrl(getSetting('WS_CMD_STATUS'), { host, port })
    const { data = 'false' } = apiService({
      url,
    })

    return data === 'true'
  } catch (e) {
    return false
  }
}

export const _findWebService = async (
  host, successFindWebService, errorFindWebService) => {
  let ajaxPromises = []

  for (let i = getSetting('WS_START_PORT'); i <=
  getSetting('WS_END_PORT'); ++i) {
    ajaxPromises.push(getAjaxPromise(i, host))
  }

  // using reverse logic: first successful response will result in rejected promise, so it will break .all() loop
  // and ignore all pending results from other promises.
  // So 'thenCatch' is called in case of success, and 'then' handler is called in case of failure (no ports found).
  try {
    const ports = await Promise.all(ajaxPromises).catch(() => false)
    errorFindWebService()

    let found = false

    ports.forEach(port => {
      if (!found && isNumber(port)) {
        found = true
        setCachedService(port, host)
        successFindWebService()
      }
    })

    if (!found) {
      throw 'Could not find dymo port'
    }
  } catch (e) {
    errorFindWebService(e)
  }
}

// Aliases that used to do basically the same thing.
export const asyncFindWebService = _findWebService
export const syncCheckWebService = _findWebService

export const getAjaxPromise = (currentPort, host) => {
  const url = buildApiUrl(getSetting('WS_CMD_STATUS'), {
    currentPort,
    host,
  })

  return apiService({
    url,
    timeout: getSetting('WS_CHECK_TIMEOUT'),
  })
}

export const invokeWsCommandAsync = (method, command, params) => {
  const url = buildApiUrl(command)

  return apiService({
    url,
    method,
    params,
  })
}

export const printLabelAndPollStatus = (
  printerName, printParamsXml, labelXml, labelSetXml, statusCallback,
  pollInterval) => {
  var printJob = dymo.label.framework.printLabel2(printerName, printParamsXml,
    labelXml, labelSetXml)

  var statusChecker = function (pjs) {
    var callbackResult = statusCallback(printJob, pjs)
    if (!callbackResult)
      return

    // schedule more status checking
    var delay = new goog.async.Delay(function () {
      printJob.getStatus(statusChecker)
      delay.dispose()
    }, pollInterval)
    delay.start()
  }

  printJob.getStatus(statusChecker)

  return printJob
}

export default apiService
