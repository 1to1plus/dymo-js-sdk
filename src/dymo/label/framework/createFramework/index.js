import { traceMsg } from '../../../../helpers/debug'
import checkEnvironment from '../checkEnvironment'
import chooseEnvironment from '../chooseEnvironment'

/**
 @return {Object} _framework
 */
export const createFaultyFramework = function (e) {
  let error = e ||
    new Error('DYMO Label Framework Plugin or WebService are not installed')
  let throwError = function () { throw error }
  return {
    getPrinters: throwError,
    openLabelFile: throwError,
    printLabel: throwError,
    printLabel2: throwError,
    renderLabel: throwError,
    loadImageAsPngBase64: throwError,
    getJobStatus: throwError,
    is550Printer: throwError,
    getConsumableInfoIn550Printer: throwError,

    getPrintersAsync: throwError,
    openLabelFileAsync: throwError,
    printLabelAsync: throwError,
    printLabel2Async: throwError,
    renderLabelAsync: throwError,
    loadImageAsPngBase64Async: throwError,
    is550PrinterAsync: throwError,
    getConsumableInfoIn550PrinterAsync: throwError,
  }
}

/**
 @param {...*} callBack checkWebService
 @return {Object} _framework
 */
let _createFramework = function () {

  let _framework
  let _waitWebService = false
  let _checkResult = null

  /**
   * @constructor
   */
  function Construct_createFramework (callBack, checkWebService) {
    if (_waitWebService) {
      traceMsg('_createFramework > Error service discovery is in progress. ')
      throw new Error('DYMO Label Framework service discovery is in progress.')
    }

    if (_framework) {
      traceMsg(
        '_createFramework > returning existing instance of _framework, has callBack: ' +
        (!!callBack))
      callBack && callBack(_checkResult)
      return _framework
    }

    if (this && this.constructor == Construct_createFramework) {

      _waitWebService = true

      _createFramework.resetFramework = function () {
        this['_framework'] = null
        this['_checkResult'] = null
        this['currentFramework'] = 0
      }

      const onEnvironmentChecked = function (checkResult) {
        _checkResult = checkResult
        traceMsg('onEnvironmentChecked > checkResult isBrowserSupported : ' +
          checkResult['isBrowserSupported'] + ', isFrameworkInstalled: ' +
          checkResult['isFrameworkInstalled'] + ', isWebServicePresent: ' +
          checkResult['isWebServicePresent'] + ', errorDetails: ' +
          checkResult['errorDetails'])
        let currentFramework = ''
        try {
          _framework = chooseEnvironment(checkResult)
          currentFramework = checkResult['isWebServicePresent'] ? 2 : 1
        } catch (e) {
          traceMsg('onEnvironmentChecked > exception e : ' +
            (e.description || e.message || e))
          if (!checkWebService)
            throw e
          _framework = createFaultyFramework(e)
          traceMsg('onEnvironmentChecked > fall back to createFaultyFramework')
        } finally {
          _waitWebService = false
        }
        callBack && callBack(_checkResult)
      }
      checkEnvironment(onEnvironmentChecked, checkWebService)
      traceMsg('_createFramework > return _framework : ' + _framework +
        (checkWebService ? ' (async)' : ' (sync)'))
      return _framework
    } else {
      return new Construct_createFramework(callBack, checkWebService)
    }
  }

  return Construct_createFramework
}

export default _createFramework
