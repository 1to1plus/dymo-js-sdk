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
export declare const printLabelAsync: (printerName: string, printParamsXml: any, labelXml: string, labelSetXml: string) => any;
export default printLabelAsync;
