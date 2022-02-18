/** returns true/false that the 550 Printer is running and connected or not
 Params:
 - printerName - printer's name (print queue name on Mac)

 @param {string} printerName
 @return {boolean}
 @export
 */
import _createFramework from '../createFramework';

export const is550Printer = function (printerName) {
  let result = false;
  try {
    result = _createFramework().is550Printer(printerName);
  } catch (e) {}
  return result;
};

export const is550PrinterAsync = function (printerName) {
  return _createFramework()
    .is550PrinterAsync(printerName)
    .then(function (resultData) {
      return resultData;
    });
};

/** returns a json format that a consumable information in 550 printer such as consumable name, labels remaining and roll status.
 Params:
 - printerName - printer's name (print queue name on Mac)

 @param {string} printerName
 @return {string}
 @export
 */
export const getConsumableInfoIn550Printer = function (printerName) {
  let result = '';
  try {
    result = _createFramework().getConsumableInfoIn550Printer(printerName);
  } catch (e) {}
  return result;
};

export const getConsumableInfoIn550PrinterAsync = function (printerName) {
  return _createFramework()
    .getConsumableInfoIn550PrinterAsync(printerName)
    .then(function (resultData) {
      return resultData;
    });
};
