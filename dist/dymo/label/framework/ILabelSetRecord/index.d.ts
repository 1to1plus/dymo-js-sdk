type GeneralObject = Record<string, any>;
/**
 * @interface
 * @public
 */
export interface ILabelSetRecord extends GeneralObject {
    /**
     * Adds data to the record specified as text markup.
     * @param {string} _objectName - object name which the markup is set for
     * @param {string} _textMarkup - markup string
     * @return {ILabelSetRecord}
     */
    setTextMarkup(_objectName: string, _textMarkup: string): ILabelSetRecord;
    /**
     * Adds data to the record specified as plain text.
     */
    setText(_objectName: string, _text: string): ILabelSetRecord;
    /**
     * Adds image data to the record.
     * @public
     */
    setBase64Image(_objectName: string, _base64Image: string): ILabelSetRecord;
}
/**
 * @class
 * @implements {ILabelSetRecord}
 * @public
 */
declare class LabelSetRecord implements ILabelSetRecord {
    setTextMarkup(_objectName: string, _textMarkup: string): ILabelSetRecord;
    setText(_objectName: string, _text: string): ILabelSetRecord;
    setBase64Image(_objectName: string, _base64Image: string): ILabelSetRecord;
}
export default LabelSetRecord;
