/**
 @public
 @interface
 */
const ILabel = function () {}

/**
 Returns current label xml as a string
 the returned xmlcan be passed to functions accepts label xml as a parameter
 or can be used to direct content manipulations not currently supported by the Framework
 @public
 @return {string}
 */
ILabel.prototype.getLabelXml = function () {}

/** Creates the label bitmap image can be used for label previewing. Similar to renderLabel()
 // Parameters:
 //      labelXml - label to preview
 //      renderParamsXml - rendering parameters, like shadow depth, label color, etc. See LabelRenderParams.xsd
 //      printerName - printer name the preview is generated for. Thhe preview/output cna be different on different printers,
 //                    especially on tape printers with different print head size.
 //                    An empty string can be passed if it does not matter or important on whitch printer the label will be printed.
 //                    In this case a default printer metrics will be used that is LW400 for LabelWriter printers and LW400 DUO Tape for tape printers
 // Returns base64-encoded string of rendered png label image

 @public
 @param {string} renderParamsXml
 @param {string} printerName
 @return {string}
 */
ILabel.prototype.render = function (renderParamsXml, printerName) {}

/** Creates the label bitmap image can be used for label previewing. Similar to renderLabel()
 // Parameters:
 //      labelXml - label to preview
 //      renderParamsXml - rendering parameters, like shadow depth, label color, etc. See LabelRenderParams.xsd
 //      printerName - printer name the preview is generated for. Thhe preview/output cna be different on different printers,
 //                    especially on tape printers with different print head size.
 //                    An empty string can be passed if it does not matter or important on whitch printer the label will be printed.
 //                    In this case a default printer metrics will be used that is LW400 for LabelWriter printers and LW400 DUO Tape for tape printers
 // Returns base64-encoded string of rendered png label image

 @public
 @param {string} renderParamsXml
 @param {string} printerName
 @return {string}
 */
ILabel.prototype.renderAsync = function (renderParamsXml, printerName) {}

/**
 // Prints the label. Similar to printLabel()
 // Parameters:
 //      printerName - the printer to print on. A list of printers can be obtained by getPrinters()
 //      printParamsXml - printing parameters, like number of copies, print quality, etc. See PrintParams.xsd
 //      labelSetXml - LabelSet to print. LabelSet is used to print multiple labels with same layout but different data, e.g. multiple addresses.
 //                    Use LabelSetBuilder to create a LabelSet or construct xml manualy according to LabelSet.xsd

 @public
 @param {string} printerName
 @param {string} printParamsXml
 @param {string} labelSetXml
 @return {void}

 */
ILabel.prototype.print = function (printerName, printParamsXml, labelSetXml) {}

/**
 // Prints the label. Similar to printLabel()
 // Parameters:
 //      printerName - the printer to print on. A list of printers can be obtained by getPrinters()
 //      printParamsXml - printing parameters, like number of copies, print quality, etc. See PrintParams.xsd
 //      labelSetXml - LabelSet to print. LabelSet is used to print multiple labels with same layout but different data, e.g. multiple addresses.
 //                    Use LabelSetBuilder to create a LabelSet or construct xml manualy according to LabelSet.xsd

 @public
 @param {string} printerName
 @param {string} printParamsXml
 @param {string} labelSetXml
 @return {void}

 */
ILabel.prototype.printAsync = function (
  printerName, printParamsXml, labelSetXml) {}

/**
 // Prints the label. Similar to printLabel()
 // Parameters:
 //      printerName - the printer to print on. A list of printers can be obtained by getPrinters()
 //      printParamsXml - printing parameters, like number of copies, print quality, etc. See PrintParams.xsd
 //      labelSetXml - LabelSet to print. LabelSet is used to print multiple labels with same layout but different data, e.g. multiple addresses.
 //                    Use LabelSetBuilder to create a LabelSet or construct xml manualy according to LabelSet.xsd

 @public
 @param {string} printerName
 @param {string} printParamsXml
 @param {string} labelSetXml
 @return {PrintJob} print job

 */
ILabel.prototype.print2 = function (
  printerName, printParamsXml, labelSetXml) {}

/**
 // Prints the label. Similar to printLabel()
 // Parameters:
 //      printerName - the printer to print on. A list of printers can be obtained by getPrinters()
 //      printParamsXml - printing parameters, like number of copies, print quality, etc. See PrintParams.xsd
 //      labelSetXml - LabelSet to print. LabelSet is used to print multiple labels with same layout but different data, e.g. multiple addresses.
 //                    Use LabelSetBuilder to create a LabelSet or construct xml manualy according to LabelSet.xsd

 @public
 @param {string} printerName
 @param {string} printParamsXml
 @param {string} labelSetXml
 @return {goog.Promise} print job

 */
ILabel.prototype.print2Async = function (
  printerName, printParamsXml, labelSetXml) {}

/** Prints a label and runs status checking in a loop

 @public
 @param {string} printerName the printer to print on. A list of printers can be obtained by getPrinters()
 @param {string} printParamsXml printing parameters, like number of copies, print quality, etc. See PrintParams.xsd
 @param {string} labelSetXml
 LabelSet to print. LabelSet is used to print multiple labels with same layout but different data, e.g. multiple addresses.
 Use LabelSetBuilder to create a LabelSet or construct xml manualy according to LabelSet.xsd
 @param {function(PrintJob, PrintJobStatusInfo): boolean} statusCallback
 Function to be called when a print job status is available.
 The function is called with one argument of type PrintJobStatusInfo
 To continue polling the status the function should return true, false otherwise
 @param {number} pollInterval poll interval in milliseconds
 @return {PrintJob} print job
 */
ILabel.prototype.printAndPollStatus = function (
  printerName, printParamsXml, labelSetXml, statusCallback, pollInterval) {}

/** Prints a label and runs status checking in a loop

 @public
 @param {string} printerName the printer to print on. A list of printers can be obtained by getPrinters()
 @param {string} printParamsXml printing parameters, like number of copies, print quality, etc. See PrintParams.xsd
 @param {string} labelSetXml
 LabelSet to print. LabelSet is used to print multiple labels with same layout but different data, e.g. multiple addresses.
 Use LabelSetBuilder to create a LabelSet or construct xml manualy according to LabelSet.xsd
 @param {function(PrintJob, PrintJobStatusInfo): boolean} statusCallback
 Function to be called when a print job status is available.
 The function is called with one argument of type PrintJobStatusInfo
 To continue polling the status the function should return true, false otherwise
 @param {number} pollInterval poll interval in milliseconds
 @return {goog.Promise}
 */
ILabel.prototype.printAndPollStatusAsync = function (
  printerName, printParamsXml, labelSetXml, statusCallback, pollInterval) {}

/**
 returns an array of object names on the label
 @public
 @return {Array.<string>}
 */
ILabel.prototype.getObjectNames = function () {}

/**
 returns the number of address objects on the label
 @public
 @return {number}
 */
ILabel.prototype.getAddressObjectCount = function () {}

/** Returns IntellegentMail barcode position for an Address object
 // Parameters:
 //      addressIndex - zero-based index of the address object in 'virtual' array of all address objects on the label
 // Returns Element object of the corresponed address object

 @public
 @param {number} addressIndex
 @return {AddressBarcodePosition}
 */
ILabel.prototype.getAddressBarcodePosition = function (addressIndex) {}

/** Set IntelegentMail barcode position for an Address object
 // Parameters:
 //      addressIndex - zero-based index of the address object in 'virtual' array of all address objects on the label
 //      bacodePosition - one of barcode position defined in AddressBarcodePosition
 // Returns Element object of the corresponed address object

 @public
 @param {number} addressIndex
 @param {AddressBarcodePosition|string} barcodePosition
 @return {ILabel}
 */
ILabel.prototype.setAddressBarcodePosition = function (
  addressIndex, barcodePosition) {}

/** Returns text content of an Address object
 // Parameters:
 //      addressIndex - zero-based index of the address object in 'virtual' array of all address objects on the label
 // Returns string contained plain text from the Address object

 @public
 @param {number} addressIndex
 @return {string}
 */
ILabel.prototype.getAddressText = function (addressIndex) {}

/** Set text content of an Address object
 // Parameters:
 //      addressIndex - zero-based index of the address object in 'virtual' array of all address objects on the label
 //      text - plain text string contain the content. Note: current text formatting is remained on line-by-line basis

 @public
 @param {number} addressIndex
 @param {string} text
 @return {ILabel}
 */
ILabel.prototype.setAddressText = function (addressIndex, text) {}

/** Get label type
 // Parameters:
 //
 //

 @public
 @return {boolean}
 */
ILabel.prototype.isDCDLabel = function () {}

ILabel.prototype.isDLSLabel = function () {}

ILabel.prototype.isValidLabel = function () {}

/** Returns 'text' content of an object
 // The content depends on object type:
 //  - for Address and Text objects it is object's text without formatting
 //  - for Barcode object it is barcode string
 //  - for Image it is base64-encoded string on image's png stream (only if image data is embedded with the label, not linked to url/file)
 //  - for CircularText it is object's text
 //  - for other objects an empty string is returned

 @public
 @param {string} objectName
 @return {string}
 */
ILabel.prototype.getObjectText = function (objectName) {}

/** sets text content for an object. Depends on object's type the content and/or text formatitng are set differently:
 //  - for Address the formatting is applied on line-by-line basis using <LineFonts> list
 //  - for text the formatting of current first character is used for the whole text
 //  - for Barcode object it is barcode string
 //  - for Image it is base64-encoded string of image's png stream
 //  - for CircularText it is object's text
 //  - for DateTime and Counter object it is object's PreText
 //  - for other objects an empty string is returned
 // Parameters:
 //      objectName - object name
 //      text - plain text string for new object content

 @public
 @param {string} objectName
 @param {string} text
 @return {ILabel}
 */
ILabel.prototype.setObjectText = function (objectName, text) {}

/** sets length of the continuous label in units of the label (that is, if label units are twips, the length will be assumed as twips value as well)
 // Parameters:
 //      newLength - object name

 @public
 @param {number} newLength
 @return {ILabel}
 */
ILabel.prototype.setLabelLength = function (newLength) {}

export default ILabel
