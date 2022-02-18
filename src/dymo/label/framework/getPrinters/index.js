// returns all printers supported by the DYMO Label Framework
// printers are returned in array-like object that is an associative-array with printer name as a key as well
// each printer object has the following properties:
// printerType - either "LabelWriterPrinter" or "TapePrinter"
// name - printer's name (print queue name on Mac)
// modelName - printer model/driver name
// isConnected - is printer connected to computer or not. Note: currently properly returned only for local USB-connected printers on Windows
// isLocal - is printer local USB-connected or shared network printer. Note: currently works on Windows only.
// isTwinTurbo - is printer "LabelWriter Twin Turbo" (has two rolls). Note: the property only defined if printerType is "LabelWriterPrinter"
// isAutoCutSupported - is Auto-Cut feature supported by the printer. Note: the property only defined if printerType is "TapePrinter"

import { getSetting } from '../../../../settings';
import createPrintersCollection from '../createPrintersCollection';
import _createFramework from '../createFramework';
import { getPrinters as onOffGetPrinters } from '../OneOffFunctions';
import addNetworkPrintersToCollection from '../addNetworkPrintersToCollection';

/**
 @export
 @return {Array.<dymo.label.framework.PrinterInfo>}
 */
const getPrinters = function () {
  let result = createPrintersCollection();

  if (!getSetting('ASSUME_MOBILE')) {
    // get 'local' printers, if we can
    try {
      const printersXml = _createFramework().getPrinters();
      result = onOffGetPrinters(printersXml);
    } catch (e) {}
  }

  addNetworkPrintersToCollection(result);
  return result;
};

export default getPrinters;
