import { invokeWsCommandAsync, GET, POST } from '../helpers/ajax'
import { getSetting } from '../settings'
import { lowercaseFirstLetter } from '../helpers/string'

/**
 * @constructor
 */
export const DlsWebService = function () {
  this.getPrinters = async function () {
    const response  = await  invokeWsCommandAsync(GET, getSetting('WS_CMD_GET_PRINTERS'))
    const {Printers: _responsePrinters = []} = response || {};
    const printers = [];

    Object.keys(_responsePrinters).forEach(printerType => {
      const modelPrinters = _responsePrinters[printerType] || [];

      modelPrinters.forEach(modelPrinter => {
        const printer = {
          printerType,
        };

        Object.keys(modelPrinter).forEach(key => {
          const newValue = modelPrinter[key][0];

          printer[key] = newValue; // regular mapped keys
          printer[lowercaseFirstLetter(key)] = newValue; // lowercase mapped keys
        })

        printers.push(printer);
      });
    })

    return printers;
  }

  this.getJobStatus = function () {
    return invokeWsCommandAsync(GET, getSetting('WS_CMD_GET_JOB_STATUS'))
  }

  this.openLabelFile = function (fileName) {
    return invokeWsCommandAsync(GET, getSetting('WS_CMD_OPEN_LABEL'),
      { fileName })
  }

  this.printLabel = function (
    printerName, printParamsXml, labelXml, labelSetXml) {
    const stop = 'here'
    return invokeWsCommandAsync(POST, getSetting('WS_CMD_PRINT_LABEL'), {
      printerName,
      printParamsXml,
      labelXml,
      labelSetXml,
    })
  }

  this.printLabel2 = function (
    printerName, printParamsXml, labelXml, labelSetXml) {
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
