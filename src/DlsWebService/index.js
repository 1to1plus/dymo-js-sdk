import { invokeWsCommandAsync, GET, POST } from '../helpers/ajax';
import { getSetting } from '../settings';

/**
 * @constructor
 */
export const DlsWebService = function () {
  this.getPrinters = function () {
    return invokeWsCommandAsync(GET, getSetting('WS_CMD_GET_PRINTERS'));
  };

  this.openLabelFile = function (fileName) {
    return invokeWsCommandAsync(GET, getSetting('WS_CMD_OPEN_LABEL'), { fileName });
  };

  this.printLabel = function (printerName, printParamsXml, labelXml, labelSetXml) {
    return invokeWsCommandAsync(POST, getSetting('WS_CMD_PRINT_LABEL'), {
      printerName,
      printParamsXml,
      labelXml,
      labelSetXml,
    });
  };

  this.printLabel2 = function (printerName, printParamsXml, labelXml, labelSetXml) {
    return invokeWsCommandAsync(POST, getSetting('WS_CMD_PRINT_LABEL2'), {
      printerName,
      printParamsXml,
      labelXml,
      labelSetXml,
    });
  };

  this.renderLabel = function (labelXml, renderParamsXml, printerName) {
    return invokeWsCommandAsync(POST, getSetting('WS_CMD_RENDER_LABEL'), {
      labelXml,
      renderParamsXml,
      printerName,
    });
  };

  this.loadImageAsPngBase64 = function (imageUri) {
    return invokeWsCommandAsync(GET, getSetting('WS_CMD_LOAD_IMAGE'), { imageUri });
  };

  this.is550Printer = function (printerName) {
    return invokeWsCommandAsync(GET, getSetting('WS_CMD_IS_550_PRINTER'), { printerName });
  };

  this.getConsumableInfoIn550Printer = function (printerName) {
    return invokeWsCommandAsync(GET, getSetting('WS_CMD_GET_CONSUMABLE_INFO_IN_550_PRINTER'), {
      printerName,
    });
  };

  // Async
  this.getPrintersAsync = function () {
    return invokeWsCommandAsync(GET, getSetting('WS_CMD_GET_PRINTERS'));
  };

  this.openLabelFileAsync = function (fileName) {
    return invokeWsCommandAsync(GET, getSetting('WS_CMD_OPEN_LABEL'), { fileName });
  };

  this.printLabelAsync = function (printerName, printParamsXml, labelXml, labelSetXml) {
    return invokeWsCommandAsync(POST, getSetting('WS_CMD_PRINT_LABEL'), {
      printerName,
      printParamsXml,
      labelXml,
      labelSetXml,
    });
  };

  this.printLabel2Async = function (printerName, printParamsXml, labelXml, labelSetXml) {
    return invokeWsCommandAsync(POST, getSetting('WS_CMD_PRINT_LABEL2'), {
      printerName,
      printParamsXml,
      labelXml,
      labelSetXml,
    });
  };

  this.renderLabelAsync = function (labelXml, renderParamsXml, printerName) {
    return invokeWsCommandAsync(POST, getSetting('WS_CMD_RENDER_LABEL'), {
      labelXml,
      renderParamsXml,
      printerName,
    });
  };

  this.loadImageAsPngBase64Async = function (imageUri) {
    return invokeWsCommandAsync(GET, getSetting('WS_CMD_LOAD_IMAGE'), { imageUri });
  };

  this.is550PrinterAsync = function (printerName) {
    return invokeWsCommandAsync(GET, getSetting('WS_CMD_IS_550_PRINTER'), { printerName });
  };

  this.getConsumableInfoIn550PrinterAsync = function (printerName) {
    return invokeWsCommandAsync(GET, getSetting('WS_CMD_GET_CONSUMABLE_INFO_IN_550_PRINTER'), {
      printerName,
    });
  };
};
