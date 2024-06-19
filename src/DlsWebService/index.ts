import { GET, invokeWsCommandAsync, POST } from '../helpers/ajax';
import { getSetting } from '../dymo-js-sdk';

/**
 * @constructor
 */
export const DlsWebService = function () {
  this.getPrinters = async function () {
    const response = await invokeWsCommandAsync(GET, getSetting('WS_CMD_GET_PRINTERS'));
    const { Printers = [] } = response || {};
    const printers = [];

    Object.keys(Printers).forEach((printerType) => {
      const modelPrinters = Printers[printerType] || [];

      printers.push({
        ...modelPrinters,
        printerType,
      });
    });

    return printers;
  };

  this.getJobStatus = function () {
    return invokeWsCommandAsync(GET, getSetting('WS_CMD_GET_JOB_STATUS'));
  };

  this.openLabelFile = function (fileName: string) {
    return invokeWsCommandAsync(GET, getSetting('WS_CMD_OPEN_LABEL'), { fileName });
  };

  this.printLabel = function (
    printerName: string,
    printParamsXml: any,
    labelXml: string,
    labelSetXml: string,
  ) {
    return invokeWsCommandAsync(POST, getSetting('WS_CMD_PRINT_LABEL'), {
      printerName,
      printParamsXml,
      labelXml,
      labelSetXml: `${labelSetXml}`,
    });
  };

  this.printLabel2 = function (
    printerName: string,
    printParamsXml: any,
    labelXml: string,
    labelSetXml: string,
  ) {
    return invokeWsCommandAsync(POST, getSetting('WS_CMD_PRINT_LABEL2'), {
      printerName,
      printParamsXml,
      labelXml,
      labelSetXml,
    });
  };

  this.renderLabel = function (labelXml: string, renderParamsXml: any, printerName: string) {
    return invokeWsCommandAsync(POST, getSetting('WS_CMD_RENDER_LABEL'), {
      labelXml,
      renderParamsXml,
      printerName,
    });
  };

  this.loadImageAsPngBase64 = function (imageUri: string) {
    return invokeWsCommandAsync(GET, getSetting('WS_CMD_LOAD_IMAGE'), { imageUri });
  };

  this.is550Printer = function (printerName: string) {
    return invokeWsCommandAsync(GET, getSetting('WS_CMD_IS_550_PRINTER'), { printerName });
  };

  this.getConsumableInfoIn550Printer = function (printerName: string) {
    return invokeWsCommandAsync(GET, getSetting('WS_CMD_GET_CONSUMABLE_INFO_IN_550_PRINTER'), {
      printerName,
    });
  };

  // Async
  this.getPrintersAsync = function () {
    return invokeWsCommandAsync(GET, getSetting('WS_CMD_GET_PRINTERS'));
  };

  this.openLabelFileAsync = function (fileName: string) {
    return invokeWsCommandAsync(GET, getSetting('WS_CMD_OPEN_LABEL'), { fileName });
  };

  this.printLabelAsync = function (
    printerName: string,
    printParamsXml: any,
    labelXml: string,
    labelSetXml: string,
  ) {
    return invokeWsCommandAsync(POST, getSetting('WS_CMD_PRINT_LABEL'), {
      printerName,
      printParamsXml,
      labelXml,
      labelSetXml,
    });
  };

  this.printLabel2Async = (
    printerName: string,
    printParamsXml: any,
    labelXml: string,
    labelSetXml: string,
  ) =>
    invokeWsCommandAsync(POST, getSetting('WS_CMD_PRINT_LABEL2'), {
      printerName,
      printParamsXml,
      labelXml,
      labelSetXml,
    });

  this.renderLabelAsync = (labelXml: string, renderParamsXml: any, printerName: string) =>
    invokeWsCommandAsync(POST, getSetting('WS_CMD_RENDER_LABEL'), {
      labelXml,
      renderParamsXml,
      printerName,
    });

  this.loadImageAsPngBase64Async = function (imageUri: string) {
    return invokeWsCommandAsync(GET, getSetting('WS_CMD_LOAD_IMAGE'), { imageUri });
  };

  this.is550PrinterAsync = function (printerName: string) {
    return invokeWsCommandAsync(GET, getSetting('WS_CMD_IS_550_PRINTER'), { printerName });
  };

  this.getConsumableInfoIn550PrinterAsync = function (printerName: string) {
    return invokeWsCommandAsync(GET, getSetting('WS_CMD_GET_CONSUMABLE_INFO_IN_550_PRINTER'), {
      printerName,
    });
  };
};
