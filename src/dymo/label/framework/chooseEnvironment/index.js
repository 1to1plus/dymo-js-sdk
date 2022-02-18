/**
 type {INativeFramework}
 */
import { DlsWebService } from '../../../../DlsWebService';
import { traceMsg } from '../../../../helpers/debug';
import PrintJobStatusInfo from '../PrintJobStatusInfo';
import PrintJobStatus from '../PrintJobStatus';

const chooseEnvironment = function (envCheckResult) {
  let _framework;

  if (envCheckResult.errorDetails != '') {
    throw new Error(envCheckResult.errorDetails);
  }

  // first, trying new cross-platform implementation, then fallback to os-specific implementations
  traceMsg('chooseEnvironment > WebServicePresent');
  const svc = new DlsWebService();
  if (svc) {
    _framework = {};
    // map functions
    _framework.getPrinters = function () {
      return svc.getPrinters();
    };
    _framework.openLabelFile = function (fileName) {
      return svc.openLabelFile(fileName);
    };
    _framework.printLabel = function (printerName, printParamsXml, labelXml, labelSetXml) {
      svc.printLabel(printerName, printParamsXml, labelXml, labelSetXml);
    };
    _framework.printLabel2 = function (printerName, printParamsXml, labelXml, labelSetXml) {
      svc.printLabel2(printerName, printParamsXml, labelXml, labelSetXml);
    };
    _framework.renderLabel = function (labelXml, renderParamsXml, printerName) {
      return svc.renderLabel(labelXml, renderParamsXml, printerName);
    };
    _framework.loadImageAsPngBase64 = function (imageUri) {
      return svc.loadImageAsPngBase64(imageUri);
    };
    _framework.is550Printer = function (printerName) {
      return svc.is550Printer(printerName);
    };
    _framework.getConsumableInfoIn550Printer = function (printerName) {
      return svc.getConsumableInfoIn550Printer(printerName);
    };

    _framework.getJobStatus = function (printerName, jobId) {
      let status;

      if (goog.isFunction(svc.getJobStatus))
        status = PrintJobStatusInfo.parse(svc.getJobStatus(printerName, parseInt(jobId, 10)));
      else
        status = {
          status: PrintJobStatus.Unknown,
          statusMessage: 'not implemented',
        };

      return new PrintJobStatusInfo(printerName, jobId, status.status, status.statusMessage);
    };

    _framework.getPrintersAsync = function () {
      return svc.getPrintersAsync();
    };
    _framework.openLabelFileAsync = function (fileName) {
      return svc.openLabelFileAsync(fileName);
    };
    _framework.printLabelAsync = function (printerName, printParamsXml, labelXml, labelSetXml) {
      return svc.printLabelAsync(printerName, printParamsXml, labelXml, labelSetXml);
    };
    _framework.printLabel2Async = function (printerName, printParamsXml, labelXml, labelSetXml) {
      return svc.printLabel2Async(printerName, printParamsXml, labelXml, labelSetXml);
    };
    _framework.renderLabelAsync = function (labelXml, renderParamsXml, printerName) {
      return svc.renderLabelAsync(labelXml, renderParamsXml, printerName);
    };
    _framework.loadImageAsPngBase64Async = function (imageUri) {
      return svc.loadImageAsPngBase64Async(imageUri);
    };
    _framework.is550PrinterAsync = function (printerName) {
      return svc.is550PrinterAsync(printerName);
    };
    _framework.getConsumableInfoIn550PrinterAsync = function (printerName) {
      return svc.getConsumableInfoIn550PrinterAsync(printerName);
    };

    return _framework;
  }

  throw new Error(
    'Cannot establish connection to the web service. Is DYMO Label Framework installed?',
  );
};

export default chooseEnvironment;
