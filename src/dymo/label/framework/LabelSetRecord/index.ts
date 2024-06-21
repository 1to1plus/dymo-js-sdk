import { TextMarkupClosedTag, TextMarkupTag } from '../../../../settings';
import { ILabelSetRecord } from '../ILabelSetRecord';

// Define the LabelSetRecord class
class LabelSetRecord implements ILabelSetRecord {

  setTextMarkup(objectName: string, textMarkup: string): this {
    textMarkup = textMarkup.toString();

    if (textMarkup.indexOf(TextMarkupTag) !== 0) {
      textMarkup = TextMarkupTag + textMarkup + TextMarkupClosedTag;
    }

    this[objectName] = textMarkup;
    return this;
  }

  setText(objectName: string, text: string): this {
    this[objectName] = text;
    return this;
  }

  setBase64Image(objectName: string, base64Image: string): this {
    this[objectName] = base64Image;
    return this;
  }

  [key: string]: string & any;
}

export default LabelSetRecord;
