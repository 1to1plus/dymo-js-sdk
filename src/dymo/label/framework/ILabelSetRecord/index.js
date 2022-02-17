/**
 @interface
 @public
 */
const ILabelSetRecord = function () {}

/**
 // Adds data to the record specified as text markup
 // Parameters:
 //      objectName - object name which the markup is set for
 //      textMarkup - markup string

 @public
 @param {string} objectName
 @param {string} textMarkup
 @return {ILabelSetRecord}
 */
ILabelSetRecord.prototype.setTextMarkup = function (objectName, textMarkup) {}

/**
 // Adds data to the record specified as plain text
 // Parameters:
 //      objectName - object name which the markup is set for
 //      text - text string

 @public
 @param {string} objectName
 @param {string} text
 @return {ILabelSetRecord}
 */
ILabelSetRecord.prototype.setText = function (objectName, text) {}

/**
 // Adds image data to the record.
 // Parameters:
 //      objectName - object name which the markup is set for
 //      base64Image - string contains base64-encoded png image stream

 @public
 @param {string} objectName
 @param {string} base64Image
 @return {ILabelSetRecord}
 */
ILabelSetRecord.prototype.setBase64Image = function (objectName, base64Image) {}

export default ILabelSetRecord
