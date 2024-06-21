import { ILabelSetRecord } from '../ILabelSetRecord';

declare class LabelSetRecord implements ILabelSetRecord {
    setTextMarkup(objectName: string, textMarkup: string): this;
    setText(objectName: string, text: string): this;
    setBase64Image(objectName: string, base64Image: string): this;
    [key: string]: string & any;
}
export default LabelSetRecord;
