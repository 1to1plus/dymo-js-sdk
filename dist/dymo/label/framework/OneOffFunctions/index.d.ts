import { default as PrinterInfo } from '../PrinterInfo';

/**
 parses printers xml and returns appropriate PrinterInfo
 @private
 */
export declare const getPrinters: (printersXml: string) => Promise<(typeof PrinterInfo)[]>;
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
export declare const openLabelFile: (fileName: string) => any;
/**
 @param {string} fileName
 return {ILabel}
 @export
 */
export declare const openLabelFileAsync: (fileName: string) => any;
/** Prints a label
 // printerName - the printer to print on. A list of printers can be obtained by getPrinters()
 // printParamsXml - printing parameters, like number of copies, print quality, etc. See PrintParams.xsd
 // labelXml - label to print
 // labelSetXml - LabelSet to print.
 // LabelSet is used to print multiple labels with the same layout but different data, e.g., multiple addresses.
 // Use LabelSetBuilder to create a LabelSet or construct xml manually, according to LabelSet.xsd
 */
export declare const printLabel: (printerName: string, printParamsXml: any, labelXml: string, labelSetXml: string) => undefined;
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
export declare const renderLabel: (labelXml: string, renderParamsXml: any, printerName: string) => any;
/** Creates a label bitmap image can be used for label previewing
 Params:
 - labelXml - label to preview
 - renderParamsXml - rendering parameters, like shadow depth, label color, etc. See LabelRenderParams.xsd
 - printerName - printer name the preview is generated for. The preview/output cna be different on different printers,
 especially on tape printers with different print head sizes.
 An empty string can be passed if it does not matter or important on which printer the label will be printed.
 In this case, a default printer metrics will be used that is LW400 for LabelWriter printers and LW400 DUO Tape for tape printers
 */
export declare const renderLabelAsync: (labelXml: string, renderParamsXml: any, printerName: string) => any;
