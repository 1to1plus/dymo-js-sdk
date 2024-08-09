/** Creates an xml stream suatable to pass to printLabel() function as printParamsXml parameter
 // Created printing parameters are for printing on DZ printers
 // Parameters:
 // - params - an JavaScript object with following properties (not all properties have to be defined, if a property is not defined a default value will be used)
 //      params.copies - number of copies to print
 //      params.jobTitle - print job title/description
 //      params.flowDirection - prints label content as left-to-right or right-to-left use FlowDirection enum to specify values
 //      params.alignment - lable alignment. One of 'Left', 'Center', or 'Right'
 //      params.cutMode - cut mode if auto-cut is supported by the printer. One of 'AutoCut" or 'ChainMarks'

 @param {DZPrintParams} params
 @return {string}
 @export
 */
declare const createDZPrintParamsXml: (params: any) => any;
export default createDZPrintParamsXml;
