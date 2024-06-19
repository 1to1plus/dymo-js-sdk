import { TextMarkupTag, TextMarkupClosedTag } from '../../../../settings';

/** LabelSetRecord class
 Holds data of one label-set records and provides methods to add data to the record

 @constructor
 @private
 @implements {ILabelSetRecord}
 */
const LabelSetRecord = function () {};

/** inheritDoc */
LabelSetRecord.prototype.setTextMarkup = function (objectName, textMarkup) {
  textMarkup = textMarkup.toString();

  if (textMarkup.indexOf(TextMarkupTag) != 0)
    textMarkup = TextMarkupTag + textMarkup + TextMarkupClosedTag;

  this[objectName] = textMarkup;
  return this;
};

/** inheritDoc */
LabelSetRecord.prototype.setText = function (objectName, text) {
  this[objectName] = text;
  return this;
};

/** inheritDoc */
LabelSetRecord.prototype.setBase64Image = function (objectName, base64Image) {
  this[objectName] = base64Image;
  return this;
};

export default LabelSetRecord;
