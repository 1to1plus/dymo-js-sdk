import xml from '../../../xml';

/** Creates an xml stream suatable to pass to printLabel() function as printParamsXml parameter
 // Created printing parameters are for printing on LabelWriter printers
 // Parameters:
 // - params - an JavaScript object with following properties (not all properties have to be defined, if a property is not defined a default value will be used)
 //      params.copies - number of copies to print
 //      params.jobTitle - print job title/description
 //      params.flowDirection - prints label content as left-to-right or right-to-left use FlowDirection enum to specify values
 //      params.printQuality - printing quality, one of 'Text', 'BarcodeAndGraphics', or 'Auto'
 //      params.twinTurboRoll - the roll to print on if the printer is TwinTurbo. One of 'Left", 'Right', or 'Auto'

 @param {LabelWriterPrintParams} params
 @return {string}
 @export
 */
const createLabelWriterPrintParamsXml = function(params)
{
  if (!params)
    return "";

  let doc = xml.parse("<LabelWriterPrintParams/>");
  let root = doc.documentElement;

  if (params.copies)
    xml.appendElement(root, "Copies", params.copies.toString());

  if (params.jobTitle)
    xml.appendElement(root, "JobTitle", params.jobTitle);

  if (params.flowDirection)
    xml.appendElement(root, "FlowDirection", params.flowDirection);

  if (params.printQuality)
    xml.appendElement(root, "PrintQuality", params.printQuality);

  if (params.twinTurboRoll)
    xml.appendElement(root, "TwinTurboRoll", params.twinTurboRoll);

  //let result = Xml.serialize(doc);
  //alert(result);
  //return result;

  return xml.serialize(doc);
}

export default createLabelWriterPrintParamsXml;
