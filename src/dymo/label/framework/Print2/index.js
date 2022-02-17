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
 @return {dymo.label.framework.PrintJob} print job
 @export
 */
dymo.label.framework.printLabel2 = function (
  printerName, printParamsXml, labelXml, labelSetXml) {
  printParamsXml = printParamsXml || ''
  labelSetXml = labelSetXml || ''
  if (typeof (labelSetXml) != 'string')
    labelSetXml = labelSetXml.toString()

  if (typeof (labelXml) == 'undefined')
    throw new Error('printLabel2(): labelXml parameter should be specified')

  if (typeof (labelXml) != 'string')
    labelXml = labelXml.toString()

  var printers = dymo.label.framework.getPrinters()
  var printerInfo = printers[printerName]

  if (goog.isDefAndNotNull(printerInfo)) {
    if (ASSUME_MOBILE || printerInfo.isNetworkPrinter())
      return printLabelToNetworkPrinter(printerInfo, printParamsXml, labelXml,
        labelSetXml)
    else
      return new dymo.label.framework.PrintJob(
        printerInfo,
        _createFramework().
          printLabel2(printerName, printParamsXml, labelXml, labelSetXml))
  } else
    throw new Error('printLabel(): unknown printer \'' + printerName + '\'')
}

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
 @return {goog.Promise} dymo.label.framework.PrintJob print job
 @export
 */
dymo.label.framework.printLabel2Async = function (
  printerName, printParamsXml, labelXml, labelSetXml) {

  printParamsXml = printParamsXml || ''
  labelSetXml = labelSetXml || ''
  if (typeof (labelSetXml) != 'string')
    labelSetXml = labelSetXml.toString()

  if (typeof (labelXml) == 'undefined')
    throw new Error(
      'printLabel2Async(): labelXml parameter should be specified')

  if (typeof (labelXml) != 'string')
    labelXml = labelXml.toString()

  return dymo.label.framework.getPrintersAsync().then(function (printers) {

    var printerInfo = printers[printerName]

    if (goog.isDefAndNotNull(printerInfo)) {
      if (ASSUME_MOBILE || printerInfo.isNetworkPrinter()) {
        return printLabelToNetworkPrinter(printerInfo, printParamsXml, labelXml,
          labelSetXml)
      } else {
        return _createFramework().
          printLabel2Async(printerName, printParamsXml, labelXml, labelSetXml).
          then(function (result) {
            return new dymo.label.framework.PrintJob(printerInfo, result)
          })
      }
    } else
      throw new Error(
        'printLabel2Async(): unknown printer \'' + printerName + '\'')
  })
}
