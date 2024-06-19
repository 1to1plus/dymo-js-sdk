import GeneralRecord from '../../../types/generalRecord';

/** Specifies printing quality when printed on LabelWriter printers
 // 'Text' - text print quality (fast)
 // 'BarcodeAndGraphics' - barcode and images print quality (slow)
 // 'Auto' - automatically determines the print quality based on objects on the label
 @enum {string}
 @export
 */
const LabelWriterPrintQuality: GeneralRecord = {};
/** @export */
LabelWriterPrintQuality.Auto = 'Auto';
/** @export */
LabelWriterPrintQuality.Text = 'Text';
/** @export */
LabelWriterPrintQuality.BarcodeAndGraphics = 'BarcodeAndGraphics';

export default LabelWriterPrintQuality;
