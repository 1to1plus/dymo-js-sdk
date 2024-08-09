import { isNil } from 'lodash';
import getPrinters from '../getPrinters';
import PrintJob from '../PrintJob';
import getPrintersAsync from '../getPrintersAsync';
import { createFramework } from '../createFramework';

/** Prints a label and return a job id
 // printerName - the printer to print on. A list of printers can be obtained by getPrinters()
 // printParamsXml - printing parameters, like number of copies, print quality, etc. See PrintParams.xsd
 // labelXml - label to print
 // labelSetXml - LabelSet to print. LabelSet is used to print multiple labels with same layout but different data, e.g. multiple addresses.
 //               Use LabelSetBuilder to create a LabelSet or construct xml manualy according to LabelSet.xsd

 @param {string} printerName the printer to print on. A list of printers can be obtained by getPrinters()
 @param {string} printParamsXml printing parameters, like number of copies, print quality, etc. See PrintParams.xsd
 @param {string} labelXml label to print
 @param {string} labelSetXml
 LabelSet to print. LabelSet is used to print multiple labels with same layout but different data, e.g. multiple addresses.
 Use LabelSetBuilder to create a LabelSet or construct xml manualy according to LabelSet.xsd
 @return {PrintJob} print job
 @export
 */
const printLabel2 = function (
  printerName: string,
  printParamsXml: any,
  labelXml: string,
  labelSetXml: string,
) {
  printParamsXml = printParamsXml || '';
  labelSetXml = labelSetXml || '';

  // @ts-expect-error
  if (typeof labelSetXml !== 'string') labelSetXml = labelSetXml.toString();

  if (typeof labelXml === 'undefined')
    throw new Error('printLabel2(): labelXml parameter should be specified');

  // @ts-expect-error
  if (typeof labelXml !== 'string') labelXml = labelXml.toString();

  const printers = getPrinters();
  const printerInfo = printers[printerName];

  if (!isNil(printerInfo)) {
    return new PrintJob(
      printerInfo,
      createFramework().printLabel2(printerName, printParamsXml, labelXml, labelSetXml),
    );
  }
  throw new Error(`printLabel(): unknown printer '${printerName}'`);
};

export const printLabel2Async = function (
  printerName: string,
  printParamsXml: any,
  labelXml: string,
  labelSetXml: string,
) {
  printParamsXml = printParamsXml || '';
  labelSetXml = labelSetXml || '';
  // @ts-expect-error
  if (typeof labelSetXml !== 'string') labelSetXml = labelSetXml.toString();

  if (typeof labelXml === 'undefined')
    throw new Error('printLabel2Async(): labelXml parameter should be specified');

  // @ts-expect-error
  if (typeof labelXml !== 'string') labelXml = labelXml.toString();

  return getPrintersAsync().then(function (printers) {
    const printerInfo = printers[printerName];

    if (!isNil(printerInfo)) {
      return createFramework()
        .printLabel2Async(printerName, printParamsXml, labelXml, labelSetXml)
        .then(function (result) {
          return new PrintJob(printerInfo, result);
        });
    }
    throw new Error(`printLabel2Async(): unknown printer '${printerName}'`);
  });
};

export default printLabel2;
