import { isNil } from 'lodash';
import getPrintersAsync from '../getPrintersAsync';
import { createFramework } from '../createFramework';

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

export const printLabelAsync = function (
  printerName: string,
  printParamsXml,
  labelXml: string,
  labelSetXml: string,
) {
  printParamsXml = printParamsXml || '';
  labelSetXml = labelSetXml || '';
  if (typeof labelSetXml !== 'string') {
    // @ts-expect-error
    labelSetXml = labelSetXml.toString();
  }

  if (typeof labelXml === 'undefined')
    throw new Error('printLabelAsync(): labelXml parameter should be specified');

  // @ts-expect-error
  if (typeof labelXml !== 'string') labelXml = labelXml.toString();

  return getPrintersAsync().then((printers) => {
    const printerInfo = printers[printerName];

    if (!isNil(printerInfo)) {
      return createFramework().printLabelAsync(
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
