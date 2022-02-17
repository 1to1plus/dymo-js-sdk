// noinspection DuplicatedCode,UnnecessaryLocalVariableJS,JSUnusedLocalSymbols,JSValidateJSDoc

import xml from '../../../xml';
import _createFramework from '../createFramework'
import { addPrinterToCollection, getSetting } from '../../../../settings'
import LabelWriterPrinterInfo from '../LabelWriterPrinterInfo'
import Label from '../Label'
import printLabel2, { printLabel2Async } from '../PrintLabel2'
import { isNil } from 'lodash'
import printLabelToNetworkPrinter from '../printLabelToNetworkPrinter'
import {default as DymoFrameworkGetPrinters} from '../getPrinters';
import createPrintersCollection from '../createPrintersCollection'
import TapePrinterInfo from '../TapePrinterInfo'
import DZPrinterInfo from '../DZPrinterInfo'
import getPrintersAsync from '../getPrintersAsync'

/** filters printers list by specified printer type
 @private
 @param {string} printerType
 @return {Array.<PrinterInfo>}
 */
function getPrintersByType(printerType)
{
  let result = [];
  /** optionalProperty always contains an array or null
   * @type {?Array}
   */
  let printers = DymoFrameworkGetPrinters();
  printers = printers['byIndex']; // access array safely
  for (let i = 0; i < printers.length; i++)
  {
    let printer = printers[i];
    if (!!printer.printerType && printer.printerType == printerType)
      result.push(printer);
  }

  return result;
}



/**
 Adds a network printer/proxy to the library.
 Upon adding a request is made to the printer to get it configuration information

 @export

 @param {string} printerUri printer uri

 @param {string=} opt_location printer location

 @param {function(string)=} opt_successCallback A function expecting one
 argument, called when the printer configuration information arrives, with the printer uri.

 @param {function(string)=} opt_errorCallback A function expecting one
 argument, called on timeout or other error

 @return {undefined}
 */
export const addPrinterUri = function(printerUri, opt_location, opt_successCallback, opt_errorCallback)
{
  // check location
  let location = opt_location || '';
  if (!goog.isString(location))
    location = location.toString();

  let successCallback = function(printersXml)
  {
    let printerInfo = new NetworkPrinterInfo(printerUri, location, printersXml);
    _networkPrinters[printerUri] = printerInfo;

    if (opt_successCallback)
      opt_successCallback(printerUri);
  }

  let errorCallback = null;
  if (opt_errorCallback)
    errorCallback = function() {opt_errorCallback(printerUri);};

  let getPrintersUri = goog.uri.utils.appendPath(printerUri, 'getPrinters');

  // noinspection JSCheckFunctionSignatures
  let jsonp = new goog.net.Jsonp(getPrintersUri, 'callback');
  jsonp.send(null, successCallback, errorCallback);
}

/**
 @export
 @param {string} printerUri
 @return {undefined}
 */
export const removePrinterUri = function(printerUri)
{
  delete _networkPrinters[printerUri];
  //for (let i = _networkPrinters.length - 1; i >= 0; --i)
  //    if (_networkPrinters[i].printerUri == printerUri)
  //        _networkPrinters.remove(i);
}

/**
 @export
 @return {undefined}
 */
export const removeAllPrinterUri = function()
{
  const _networkPrinters = {};
  //for (let i = _networkPrinters.length - 1; i >= 0; --i)
  //    if (_networkPrinters[i].printerUri == printerUri)
  //        _networkPrinters.remove(i);
}


/**
 parses printers xml and returns appropriate PrinterInfo
 @private
 @return {Array.<PrinterInfo>}
 */
export const getPrinters = (printersXml) => {
  //TODO: update to use functions from Xml namespace
  //let getXmlText = function(elem) { return elem.firstChild.data; };
  //let getChildText = function(elem, child) { return getXmlText(elem.getElementsByTagName(child)[0]); };
  let getChildText = function(elem, child) { return xml.getElementText(xml.getElement(elem, child)); };

  let xmldoc = xml.parse(printersXml);
  let result = createPrintersCollection();
  let i, name, modelName, isConnected, isLocal, isTwinTurbo, isAutoCutSupported;

  //TODO: update to use XPath
  //let printers = xmldoc.getElementsByTagName("Printers")[0];
  let printers = xml.getElement(xmldoc, "Printers");
  //let labelWriterPrinters = printers.getElementsByTagName("LabelWriterPrinter");
  let labelWriterPrinters = xml.getElements(printers, "LabelWriterPrinter");
  for (i = 0; i < labelWriterPrinters.length; i++)
  {
    //let labelWriterPrinter = {};
    //labelWriterPrinter.printerType = "LabelWriterPrinter";
    name = getChildText(labelWriterPrinters[i], "Name");
    modelName = getChildText(labelWriterPrinters[i], "ModelName");
    isConnected = getChildText(labelWriterPrinters[i], "IsConnected") == "True";
    isLocal = getChildText(labelWriterPrinters[i], "IsLocal") == "True";
    isTwinTurbo = getChildText(labelWriterPrinters[i], "IsTwinTurbo") == "True";

    let labelWriterPrinterInfo = new LabelWriterPrinterInfo(name, modelName, isConnected, isLocal, isTwinTurbo);
    addPrinterToCollection(labelWriterPrinterInfo, result);
  }

  //let tapePrinters = printers.getElementsByTagName("TapePrinter");
  let tapePrinters = xml.getElements(printers, "TapePrinter");
  for (i = 0; i < tapePrinters.length; i++)
  {
    //let tapePrinter = {};
    //tapePrinter.printerType = "TapePrinter";
    name = getChildText(tapePrinters[i], "Name");
    modelName = getChildText(tapePrinters[i], "ModelName");
    isConnected = getChildText(tapePrinters[i], "IsConnected") == "True";
    isLocal = getChildText(tapePrinters[i], "IsLocal") == "True";
    isAutoCutSupported = getChildText(tapePrinters[i], "IsAutoCutSupported") == "True";

    let tapePrinterInfo = new TapePrinterInfo(name, modelName, isConnected, isLocal, isAutoCutSupported);
    addPrinterToCollection(tapePrinterInfo, result);
  }

  //let dzPrinters = printers.getElementsByTagName("DZPrinter");
  let dzPrinters = xml.getElements(printers, "DZPrinter");
  for (i = 0; i < dzPrinters.length; i++)
  {
    name = getChildText(dzPrinters[i], "Name");
    modelName = getChildText(dzPrinters[i], "ModelName");
    isConnected = getChildText(dzPrinters[i], "IsConnected") == "True";
    isLocal = getChildText(dzPrinters[i], "IsLocal") == "True";
    isAutoCutSupported = getChildText(dzPrinters[i], "IsAutoCutSupported") == "True";

    let dzPrinterInfo = new DZPrinterInfo(name, modelName, isConnected, isLocal, isAutoCutSupported);
    addPrinterToCollection(dzPrinterInfo, result);
  }
  return result;
}



/** filters printers list by specified printer type
 @private
 @param {string} printerType
 @return {Array.<PrinterInfo>}
 */
function getPrintersByTypeAsync(printerType)
{
  return getPrintersAsync().then(function(printers)
  {
    let result = [];
    printers = printers['byIndex']; // access array safely
    for (let i = 0; i < printers.length; i++)
    {
      let printer = printers[i];
      if (!!printer.printerType && printer.printerType == printerType)
        result.push(printer);
    }
    return result;
  });
}


/** filters printers list, gets LabelWriter printers only
 @return {Array.<LabelWriterPrinterInfo>}
 @export
 */
export const getLabelWriterPrinters = () =>
{
  // noinspection JSValidateTypes
  return getPrintersByType("LabelWriterPrinter");
}

/** filters printers list, gets tape printers only
 @return {Array.<TapePrinterInfo>}
 @export
 */
export const getTapePrinters = () =>
{
  // noinspection JSValidateTypes
  return getPrintersByType("TapePrinter");
}

/** filters printers list, gets DZ printers only
 @return {Array.<DZPrinterInfo>}
 @export
 */
export const getDZPrinters =  () => {
  // noinspection JSValidateTypes
  return getPrintersByType("DZPrinter");
}

/** filters printers list, gets LabelWriter printers only
 @return {Array.<LabelWriterPrinterInfo>}
 @export
 */
export const getLabelWriterPrintersAsync = () =>
{
  // noinspection JSValidateTypes
  return getPrintersByTypeAsync("LabelWriterPrinter");
}

/** filters printers list, gets tape printers only
 @return {Array.<TapePrinterInfo>}
 @export
 */
export const getTapePrintersAsync = () =>
{
  // noinspection JSValidateTypes
  return getPrintersByTypeAsync("TapePrinter");
}

/** filters printers list, gets DZ printers only
 @return {Array.<DZPrinterInfo>}
 @export
 */
export const getDZPrintersAsync =  () =>
{
  // noinspection JSValidateTypes
  return getPrintersByTypeAsync("DZPrinter");
}


/** loads label content from a file or URL
 There are some considerations should be taken into account before using this function.
 Use it only then there are no other way to load label data, that in most cases should be done using openLabelXml()
 - full file name/url should be specified. The function will not honor relative path's based on document.location.href
 - the fileName can be http:// or file:// urls. On Windows it can be a regular file name, like 'c:\users\desktop\address.label'
 - the content of the label will be loaded synchronously. So if the remote server is down there will be a timeout.
 - any local file can be accessed/tried to be accessed. The function is not limited by any browser restrictions.
 Though only a valid label file (according to label.xsd schema) can be loaded this still can be potential security concern.
 - the URL is not limited to same-site-origin browser policy - any url can be opened
 - the proxy settings are system default settings, not necessary browser settings. TODO: fix it by providing proxy settings params into the library (same as DLS7) or read browser proxy settings (if possible)
 returns Label object provides label manipulation methods

 @param {string} fileName
 return {ILabel}
 @export
 */
export const openLabelFile = (fileName) =>
{
  return new Label(_createFramework().openLabelFile(fileName));
}

/**
 @param {string} fileName
 return {ILabel}
 @export
 */
export const openLabelFileAsync = (fileName) =>
{
  return _createFramework().openLabelFileAsync(fileName).then(function(labelXml)
  {
    return new Label(labelXml);
  });
}

/** loads label content from xml stream/string
 labelXml - label definition as xml string
 Note: it is a preferable way to load/open label files. Use XMLHttpRequest() or other standard browser methods to get xml string.
 returns Label object

 @param {string} labelXml
 return {ILabel}
 @export
 */
export const openLabelXml = (labelXml) =>
{
  //alert('openLabelXml: ' + labelXml);
  //goog.debug.Logger.getLogger('dymo.label.framework').info('openLabelXml(): length ' + labelXml.length);

  let logger = new goog.debug.Logger('dymo.label.framework');
  logger.setLevel(goog.debug.Logger.Level.INFO);
  logger.info(labelXml);

  return new Label(labelXml);
}



/** Prints a label
 // printerName - the printer to print on. A list of printers can be obtained by getPrinters()
 // printParamsXml - printing parameters, like number of copies, print quality, etc. See PrintParams.xsd
 // labelXml - label to print
 // labelSetXml - LabelSet to print. LabelSet is used to print multiple labels with same layout but different data, e.g. multiple addresses.
 //               Use LabelSetBuilder to create a LabelSet or construct xml manually according to LabelSet.xsd

 @param {string} printerName
 @param {string} printParamsXml
 @param {string} labelXml
 @param {string} labelSetXml
 @return {undefined}
 @export
 */
export const printLabel = (printerName, printParamsXml, labelXml, labelSetXml) => {
  printParamsXml = printParamsXml || "";
  labelSetXml = labelSetXml || "";
  if (typeof(labelSetXml) != "string")
    labelSetXml = labelSetXml.toString();

  if (typeof(labelXml) == "undefined")
    throw new Error("printLabel(): labelXml parameter should be specified");

  if (typeof(labelXml) != "string")
    labelXml = labelXml.toString();

  let printers = DymoFrameworkGetPrinters();
  let printerInfo = printers[printerName];

  if (!isNil(printerInfo))
  {
    // noinspection JSUnresolvedFunction
    if (getSetting('ASSUME_MOBILE') || printerInfo.isNetworkPrinter())
      printLabelToNetworkPrinter(printerInfo, printParamsXml, labelXml, labelSetXml);
    else
      _createFramework().printLabel(printerInfo["name"], printParamsXml, labelXml, labelSetXml);
  }

  throw new Error("printLabel(): unknown printer '" + printerName + "'");
}




/** Prints a label and runs status checking in a loop

 @param {string} printerName the printer to print on. A list of printers can be obtained by getPrinters()
 @param {string} printParamsXml printing parameters, like number of copies, print quality, etc. See PrintParams.xsd
 @param {string} labelXml label to print
 @param {string} labelSetXml
 LabelSet to print. LabelSet is used to print multiple labels with same layout but different data, e.g. multiple addresses.
 Use LabelSetBuilder to create a LabelSet or construct xml manually according to LabelSet.xsd
 @param {function(PrintJob, PrintJobStatusInfo): boolean} statusCallback
 Function to be called when a print job status is available.
 The function is called with one argument of type PrintJobStatusInfo
 To continue polling the status the function should return true, false otherwise
 @param {number} pollInterval poll interval in milliseconds
 @return {PrintJob}
 @export
 */
export const printLabelAndPollStatus = (printerName, printParamsXml, labelXml, labelSetXml, statusCallback, pollInterval) =>
{
  let printJob = printLabel2(printerName, printParamsXml, labelXml, labelSetXml);

  let statusChecker  = function(pjs) {
    // noinspection JSCheckFunctionSignatures
    let callbackResult = statusCallback(printJob, pjs);
    if (!callbackResult)
      return;

    // schedule more status checking
    let delay = new goog.async.Delay(function()
    {
      printJob.getStatus(statusChecker);
      delay.dispose();
    }, pollInterval);
    delay.start();
  };

  printJob.getStatus(statusChecker);

  // noinspection JSValidateTypes
  return printJob;
};
/** Prints a label and runs status checking in a loop

 @param {string} printerName the printer to print on. A list of printers can be obtained by getPrinters()
 @param {string} printParamsXml printing parameters, like number of copies, print quality, etc. See PrintParams.xsd
 @param {string} labelXml label to print
 @param {string} labelSetXml
 LabelSet to print. LabelSet is used to print multiple labels with same layout but different data, e.g. multiple addresses.
 Use LabelSetBuilder to create a LabelSet or construct xml manually according to LabelSet.xsd
 @param {function(PrintJob, PrintJobStatusInfo): boolean} statusCallback
 Function to be called when a print job status is available.
 The function is called with one argument of type PrintJobStatusInfo
 To continue polling the status the function should return true, false otherwise
 @param {number} pollInterval poll interval in milliseconds
 @return {goog.Promise} PrintJob print job
 @export
 */
export const printLabelAndPollStatusAsync = (printerName, printParamsXml, labelXml, labelSetXml, statusCallback, pollInterval) =>
{
  return printLabel2Async(printerName, printParamsXml, labelXml, labelSetXml).then(function(printJob){

    const statusChecker  = function(pjs) {
      let callbackResult = statusCallback(printJob, pjs);
      if (!callbackResult)
        return;

      // schedule more status checking
      let delay = new goog.async.Delay(function()
      {
        printJob.getStatus(statusChecker);
        delay.dispose();
      }, pollInterval);
      delay.start();
    };

    printJob.getStatus(statusChecker);

    return printJob;
  });
};



/** Creates a label bitmap image can be used for label previewing
 Params:
 - labelXml - label to preview
 - renderParamsXml - rendering parameters, like shadow depth, label color, etc. See LabelRenderParams.xsd
 - printerName - printer name the preview is generated for. The preview/output cna be different on different printers,
 especially on tape printers with different print head size.
 An empty string can be passed if it does not matter or important on which printer the label will be printed.
 In this case a default printer metrics will be used that is LW400 for LabelWriter printers and LW400 DUO Tape for tape printers

 @param {string} labelXml
 @param {string} renderParamsXml
 @param {string} printerName
 @return {string}
 @export
 */
export const renderLabel = (labelXml, renderParamsXml, printerName) =>
{
  if (typeof(labelXml) == "undefined")
    throw new Error("renderLabel(): labelXml parameter should be specified");

  if (typeof(labelXml) != "string")
    labelXml = labelXml.toString();

  renderParamsXml = renderParamsXml || "";
  printerName = printerName || "";

  return _createFramework().renderLabel(labelXml, renderParamsXml, printerName);
};

/** Creates a label bitmap image can be used for label previewing
 Params:
 - labelXml - label to preview
 - renderParamsXml - rendering parameters, like shadow depth, label color, etc. See LabelRenderParams.xsd
 - printerName - printer name the preview is generated for. The preview/output cna be different on different printers,
 especially on tape printers with different print head size.
 An empty string can be passed if it does not matter or important on which printer the label will be printed.
 In this case a default printer metrics will be used that is LW400 for LabelWriter printers and LW400 DUO Tape for tape printers

 @param {string} labelXml
 @param {string} renderParamsXml
 @param {string} printerName
 @return {string}
 @export
 */
export const renderLabelAsync = (labelXml, renderParamsXml, printerName) =>
{

  if (typeof(labelXml) == "undefined"){
    throw new Error("renderLabelAsync(): labelXml parameter should be specified");
  }

  if (typeof(labelXml) != "string")
    labelXml = labelXml.toString();

  renderParamsXml = renderParamsXml || "";
  printerName = printerName || "";

  return _createFramework().renderLabelAsync(labelXml, renderParamsXml, printerName);
};


/** Utility function to create a render label request object
 @param {string} requestId
 @param {string} statusId
 @param {string} statusMessage
 @param {string} imageData

 @return {Object}
 */
export const createRenderLabelRequest = (requestId, statusId, statusMessage, imageData) => {
  let result = {};
  result['requestId'] = requestId;
  result['imageData'] = imageData;
  result['statusId'] = statusId;
  result['statusMessage'] = statusMessage;

  return result;
}

/** Creates a xml stream suitable to pass to printLabel() function as printParamsXml parameter
 // Created printing parameters are for printing on Tape printers
 // Parameters:
 // - params - an JavaScript object with following properties (not all properties have to be defined, if a property is not defined a default value will be used)
 //      params.copies - number of copies to print
 //      params.jobTitle - print job title/description
 //      params.flowDirection - prints label content as left-to-right or right-to-left use FlowDirection enum to specify values
 //      params.alignment - label alignment. One of 'Left', 'Center', or 'Right'
 //      params.cutMode - cut mode if auto-cut is supported by the printer. One of 'AutoCut' or 'ChainMarks'

 @param {TapePrintParams} params
 @return {string}
 @export

 */
export const createTapePrintParamsXml = (params) =>
{
  if (!params)
    return "";

  let doc = xml.parse("<TapePrintParams/>");
  let root = doc.documentElement;

  const {
    copies = false,
    jobTitle = false,
    flowDirection = false,
    alignment = false,
    cutMode = false,
  } = params || {};

  if (copies){
    xml.appendElement(root, "Copies", copies.toString());
  }

  if (jobTitle){
    xml.appendElement(root, "JobTitle", jobTitle);
  }

  if (flowDirection){
    xml.appendElement(root, "FlowDirection", flowDirection);
  }

  if (alignment){
    xml.appendElement(root, "Alignment", alignment);
  }

  if (cutMode){
    xml.appendElement(root, "CutMode", cutMode);
  }

  return xml.serialize(doc);
}
