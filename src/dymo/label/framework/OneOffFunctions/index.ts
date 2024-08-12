// noinspection DuplicatedCode,UnnecessaryLocalVariableJS,JSUnusedLocalSymbols,JSValidateJSDoc

import { isNil } from 'lodash';
import xml from '../../../xml';
import { addPrinterToCollection } from '../../../../settings';
import LabelWriterPrinterInfo from '../LabelWriterPrinterInfo';
import Label from '../Label';
import DymoFrameworkGetPrinters from '../getPrinters';
import createPrintersCollection from '../createPrintersCollection';
import TapePrinterInfo from '../TapePrinterInfo';
import DZPrinterInfo from '../DZPrinterInfo';
import { createFramework } from '../createFramework';
import PrinterInfo from '../PrinterInfo';

/**
 parses printers xml and returns appropriate PrinterInfo
 @private
 */
export const getPrinters = async (printersXml: string): Promise<(typeof PrinterInfo)[]> => {
  // TODO: update to use functions from Xml namespace
  // let getXmlText = function(elem) { return elem.firstChild.data; };
  // let getChildText = function(elem, child) { return getXmlText(elem.getElementsByTagName(child)[0]); };
  const getChildText = function (elem: any, child: any) {
    return xml.getElementText(xml.getElement(elem, child));
  };

  const xmldoc = xml.parse(printersXml);
  const result = createPrintersCollection();
  let i: number;
  let name: string;
  let modelName: string;
  let isConnected: boolean;
  let isLocal: boolean;
  let isTwinTurbo: boolean;
  let isAutoCutSupported: boolean;

  // TODO: update to use XPath
  // let printers = xmldoc.getElementsByTagName("Printers")[0];
  const printers = xml.getElement(xmldoc, 'Printers');
  // let labelWriterPrinters = printers.getElementsByTagName("LabelWriterPrinter");
  const labelWriterPrinters = xml.getElements(printers, 'LabelWriterPrinter');
  for (i = 0; i < labelWriterPrinters.length; i++) {
    // let labelWriterPrinter = {};
    // labelWriterPrinter.printerType = "LabelWriterPrinter";
    name = getChildText(labelWriterPrinters[i], 'Name');
    modelName = getChildText(labelWriterPrinters[i], 'ModelName');
    isConnected = getChildText(labelWriterPrinters[i], 'IsConnected') == 'True';
    isLocal = getChildText(labelWriterPrinters[i], 'IsLocal') == 'True';
    isTwinTurbo = getChildText(labelWriterPrinters[i], 'IsTwinTurbo') == 'True';

    const labelWriterPrinterInfo = new LabelWriterPrinterInfo(
      name,
      modelName,
      isConnected,
      isLocal,
      isTwinTurbo,
    );
    addPrinterToCollection(labelWriterPrinterInfo, result);
  }

  const tapePrinters = xml.getElements(printers, 'TapePrinter');
  for (i = 0; i < tapePrinters.length; i++) {
    name = getChildText(tapePrinters[i], 'Name');
    modelName = getChildText(tapePrinters[i], 'ModelName');
    isConnected = getChildText(tapePrinters[i], 'IsConnected') == 'True';
    isLocal = getChildText(tapePrinters[i], 'IsLocal') == 'True';
    isAutoCutSupported = getChildText(tapePrinters[i], 'IsAutoCutSupported') == 'True';

    const tapePrinterInfo = new TapePrinterInfo(
      name,
      modelName,
      isConnected,
      isLocal,
      isAutoCutSupported,
    );
    addPrinterToCollection(tapePrinterInfo, result);
  }

  // let dzPrinters = printers.getElementsByTagName("DZPrinter");
  const dzPrinters = xml.getElements(printers, 'DZPrinter');
  for (i = 0; i < dzPrinters.length; i++) {
    name = getChildText(dzPrinters[i], 'Name');
    modelName = getChildText(dzPrinters[i], 'ModelName');
    isConnected = getChildText(dzPrinters[i], 'IsConnected') == 'True';
    isLocal = getChildText(dzPrinters[i], 'IsLocal') == 'True';
    isAutoCutSupported = getChildText(dzPrinters[i], 'IsAutoCutSupported') == 'True';

    const dzPrinterInfo = new DZPrinterInfo(
      name,
      modelName,
      isConnected,
      isLocal,
      isAutoCutSupported,
    );
    addPrinterToCollection(dzPrinterInfo, result);
  }
  return result;
};

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
export const openLabelFile = (fileName: string) => {
  return new Label(createFramework().openLabelFile(fileName));
};

/**
 @param {string} fileName
 return {ILabel}
 @export
 */
export const openLabelFileAsync = (fileName: string) => {
  return createFramework()
    .openLabelFileAsync(fileName)
    .then(function (labelXml: string) {
      return new Label(labelXml);
    });
};

/** Prints a label
 // printerName - the printer to print on. A list of printers can be obtained by getPrinters()
 // printParamsXml - printing parameters, like number of copies, print quality, etc. See PrintParams.xsd
 // labelXml - label to print
 // labelSetXml - LabelSet to print.
 // LabelSet is used to print multiple labels with the same layout but different data, e.g., multiple addresses.
 // Use LabelSetBuilder to create a LabelSet or construct xml manually, according to LabelSet.xsd
 */
export const printLabel = (
  printerName: string,
  printParamsXml: any,
  labelXml: string,
  labelSetXml: string,
): undefined => {
  printParamsXml = printParamsXml || '';
  labelSetXml = labelSetXml || '';

  // @ts-expect-error
  if (typeof labelSetXml !== 'string') labelSetXml = labelSetXml.toString();

  if (typeof labelXml === 'undefined')
    throw new Error('printLabel(): labelXml parameter should be specified');

  // @ts-expect-error
  if (typeof labelXml !== 'string') labelXml = labelXml.toString();

  const printers = DymoFrameworkGetPrinters();
  const printerInfo = printers[printerName];

  if (!isNil(printerInfo)) {
    createFramework().printLabel(printerInfo.name, printParamsXml, labelXml, labelSetXml);
  }

  throw new Error(`printLabel(): unknown printer '${printerName}'`);
};

/** Prints a label and runs status checking in a loop


 /** Creates a label bitmap image can be used for label previewing
 Params:
 - labelXml - label to preview
 - renderParamsXml - rendering parameters, like shadow depth, label color, etc. See LabelRenderParams.xsd
 - printerName - printer name the preview is generated for. The preview/output cna be different on different printers,
 especially on tape printers with different print head sizes.
 An empty string can be passed if it does not matter or important on which printer the label will be printed.
 In this case, a default printer metrics will be used that is LW400 for LabelWriter printers and LW400 DUO Tape for tape printers
 @export
 */
export const renderLabel = (labelXml: string, renderParamsXml: any, printerName: string) => {
  if (typeof labelXml === 'undefined')
    throw new Error('renderLabel(): labelXml parameter should be specified');

  // @ts-expect-error
  if (typeof labelXml !== 'string') labelXml = labelXml.toString();

  renderParamsXml = renderParamsXml || '';
  printerName = printerName || '';

  return createFramework().renderLabel(labelXml, renderParamsXml, printerName);
};

/** Creates a label bitmap image can be used for label previewing
 Params:
 - labelXml - label to preview
 - renderParamsXml - rendering parameters, like shadow depth, label color, etc. See LabelRenderParams.xsd
 - printerName - printer name the preview is generated for. The preview/output cna be different on different printers,
 especially on tape printers with different print head sizes.
 An empty string can be passed if it does not matter or important on which printer the label will be printed.
 In this case, a default printer metrics will be used that is LW400 for LabelWriter printers and LW400 DUO Tape for tape printers
 */
export const renderLabelAsync = (labelXml: string, renderParamsXml: any, printerName: string) => {
  if (typeof labelXml === 'undefined') {
    throw new Error('renderLabelAsync(): labelXml parameter should be specified');
  }

  if (typeof labelXml !== 'string') {
    // @ts-expect-error
    labelXml = labelXml.toString();
  }

  renderParamsXml = renderParamsXml || '';
  printerName = printerName || '';

  return createFramework().renderLabelAsync(labelXml, renderParamsXml, printerName);
};
