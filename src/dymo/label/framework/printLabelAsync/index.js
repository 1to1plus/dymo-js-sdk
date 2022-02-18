import { isNil } from 'lodash';
import { getSetting } from '../../../../settings';
import printLabelToNetworkPrinter from '../printLabelToNetworkPrinter';

/** Prints a label
 // printerName - the printer to print on. A list of printers can be obtained by getPrinters()
 // printParamsXml - printing parameters, like number of copies, print quality, etc. See PrintParams.xsd
 // labelXml - label to print
 // labelSetXml - LabelSet to print. LabelSet is used to print multiple labels with same layout but different data, e.g. multiple addresses.
 //               Use LabelSetBuilder to create a LabelSet or construct xml manualy according to LabelSet.xsd

 @param {string} printerName
 @param {string} printParamsXml
 @param {string} labelXml
 @param {string} labelSetXml
 @return {undefined}
 @export
 */

export const printLabelAsync = function (printerName, printParamsXml, labelXml, labelSetXml) {
  printParamsXml = printParamsXml || '';
  labelSetXml = labelSetXml || '';
  if (typeof labelSetXml !== 'string') labelSetXml = labelSetXml.toString();

  if (typeof labelXml === 'undefined')
    throw new Error('printLabelAsync(): labelXml parameter should be specified');

  if (typeof labelXml !== 'string') labelXml = labelXml.toString();

  return getPrintersAsync().then(function (printers) {
    const printerInfo = printers[printerName];

    if (!isNil(printerInfo)) {
      if (getSetting('ASSUME_MOBILE') || printerInfo.isNetworkPrinter()) {
        return printLabelToNetworkPrinter(printerInfo, printParamsXml, labelXml, labelSetXml);
      }
      return _createFramework().printLabelAsync(
        printerInfo.name,
        printParamsXml,
        labelXml,
        labelSetXml,
      );
    }
    throw new Error(`printLabelAsync(): unknown printer '${printerName}'`);
  });
};

export default printLabelAsync;
