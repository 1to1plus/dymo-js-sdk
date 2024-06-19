/**
 type {INativeFramework}
 */
import { DlsWebService } from '../../../../DlsWebService';
import { traceMsg } from '../../../../helpers/debug';
import PrintJobStatusInfo from '../PrintJobStatusInfo';
import PrintJobStatus from '../PrintJobStatus';
import GeneralRecord from '../../../types/generalRecord';

const chooseEnvironment = function (envCheckResult: any) {
  let _framework: any;

  if (envCheckResult.errorDetails != '') {
    throw new Error(envCheckResult.errorDetails);
  }

  // first, trying new cross-platform implementation, then fallback to os-specific implementations
  traceMsg('chooseEnvironment > WebServicePresent');
  const svc = new DlsWebService();
  if (svc) {
    _framework = {};

    _framework.getPrinters = function () {
      return svc.getPrinters();
    };

    _framework.openLabelFile = function (fileName: string) {
      return svc.openLabelFile(fileName);
    };

    _framework.printLabel = function (
      printerName: string,
      printParamsXml: any,
      labelXml: string,
      labelSetXml: string,
    ) {
      return svc.printLabel(printerName, printParamsXml, labelXml, labelSetXml);
    };

    _framework.printLabel2 = function (
      printerName: string,
      printParamsXml: any,
      labelXml: string,
      labelSetXml: string,
    ) {
      return svc.printLabel2(printerName, printParamsXml, labelXml, labelSetXml);
    };

    _framework.renderLabel = function (
      labelXml: string,
      renderParamsXml: any,
      printerName: string,
    ) {
      return svc.renderLabel(labelXml, renderParamsXml, printerName);
    };

    _framework.loadImageAsPngBase64 = function (imageUri: string) {
      return svc.loadImageAsPngBase64(imageUri);
    };

    _framework.is550Printer = function (printerName: string) {
      return svc.is550Printer(printerName);
    };

    _framework.getConsumableInfoIn550Printer = function (printerName: string) {
      return svc.getConsumableInfoIn550Printer(printerName);
    };

    _framework.getJobStatus = function (printerName: string, jobId: any) {
      const status: GeneralRecord =
        typeof svc.getJobStatus === 'function'
          ? PrintJobStatusInfo.parse(svc.getJobStatus(printerName, parseInt(jobId, 10)))
          : {
              status: PrintJobStatus.Unknown,
              statusMessage: 'not implemented',
            };

      return new PrintJobStatusInfo(printerName, jobId, status.status, status.statusMessage);
    };

    _framework.getPrintersAsync = function () {
      return svc.getPrintersAsync();
    };

    _framework.openLabelFileAsync = function (fileName: string) {
      return svc.openLabelFileAsync(fileName);
    };

    _framework.printLabelAsync = function (
      printerName: string,
      printParamsXml: any,
      labelXml: string,
      labelSetXml: string,
    ) {
      return svc.printLabelAsync(printerName, printParamsXml, labelXml, labelSetXml);
    };

    _framework.printLabel2Async = function (
      printerName: string,
      printParamsXml: any,
      labelXml: string,
      labelSetXml: string,
    ) {
      return svc.printLabel2Async(printerName, printParamsXml, labelXml, labelSetXml);
    };

    _framework.renderLabelAsync = function (
      labelXml: string,
      renderParamsXml: any,
      printerName: string,
    ) {
      return svc.renderLabelAsync(labelXml, renderParamsXml, printerName);
    };

    _framework.loadImageAsPngBase64Async = function (imageUri: string) {
      return svc.loadImageAsPngBase64Async(imageUri);
    };

    _framework.is550PrinterAsync = function (printerName: string) {
      return svc.is550PrinterAsync(printerName);
    };

    _framework.getConsumableInfoIn550PrinterAsync = function (printerName: string) {
      return svc.getConsumableInfoIn550PrinterAsync(printerName);
    };

    return _framework;
  }

  throw new Error(
    'Cannot establish connection to the web service. Is DYMO Label Framework installed?',
  );
};

export default chooseEnvironment;
