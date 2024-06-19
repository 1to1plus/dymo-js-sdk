// import checkEnvironment from '../checkEnvironment'
import chooseEnvironment from '../chooseEnvironment';
import { setSetting } from '../../../../settings';
import checkEnvironment from '../checkEnvironment';
import { traceMsg } from '../../../../helpers/debug';

export const createFaultyFramework = function (e: typeof Error) {
  const error = e || new Error('DYMO Label Framework Plugin or WebService are not installed');
  const throwError = () => {
    throw error;
  };
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
  };
};

// let _framework
// let currentFramework
// let _waitWebService = false
// let _checkResult = null

/**
 * @constructor
 */
function _createFramework(
  callBack = undefined,
  checkWebService = undefined,
  framework = undefined,
) {
  this.v1 = true;
  this.init = false;
  let _framework = framework;
  let currentFramework: number;
  let _waitWebService = false;
  let _checkResult = null;

  if (_waitWebService) {
    traceMsg('_createFramework > Error service discovery is in progress. ');
    throw new Error('DYMO Label Framework service discovery is in progress.');
  }

  if (_framework) {
    traceMsg(
      `_createFramework > returning existing instance of _framework, has callBack: ${!!callBack}`,
    );
    callBack && callBack(_checkResult);
    return _framework;
  }

  if (this && this.constructor == _createFramework) {
    _waitWebService = true;

    const onEnvironmentChecked = function (checkResult: any) {
      _checkResult = checkResult;

      try {
        _framework = chooseEnvironment(checkResult);
        currentFramework = checkResult.isWebServicePresent ? 2 : 1;
        setSetting('dymo.label.framework.currentFramework', currentFramework);
      } catch (e) {
        traceMsg(`onEnvironmentChecked > exception e : ${e.description || e.message || e}`);
        if (!checkWebService) throw e;
        _framework = createFaultyFramework(e);
        traceMsg('onEnvironmentChecked > fall back to createFaultyFramework');
      } finally {
        _waitWebService = false;
      }
      callBack && callBack(_checkResult);
    };

    return (async () => {
      await checkEnvironment(onEnvironmentChecked, checkWebService);
      return _framework;
    })();
  }
  this.init = true;
  // @ts-expect-error
  return new _createFramework(callBack, checkWebService);
}

export const createFramework = (callBack = undefined, checkWebService = undefined) =>
  // @ts-expect-error
  new _createFramework(callBack, checkWebService);
// export default new _createFramework
