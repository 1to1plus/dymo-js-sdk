import { createFramework } from '../createFramework';

export const is550Printer = function (printerName: string) {
  return createFramework().is550Printer(printerName);
};

export const is550PrinterAsync = function (printerName: string) {
  return createFramework().is550PrinterAsync(printerName);
};

/** returns a json format that a consumable information in 550 printer such as consumable name, labels remaining and roll status.
 Params:
 - printerName - printer's name (print queue name on Mac)

 @param {string} printerName
 @return {string}
 @export
 */
export const getConsumableInfoIn550Printer = function (printerName: string) {
  return createFramework().getConsumableInfoIn550Printer(printerName);
};

export const getConsumableInfoIn550PrinterAsync = function (printerName: string) {
  return createFramework().getConsumableInfoIn550PrinterAsync(printerName);
};
