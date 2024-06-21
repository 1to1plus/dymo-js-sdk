import GeneralRecord from '../../../../types/generalRecord';

/** Specifies when to draw Intelligent-Mail barcode for address object
 // AboveAddress - print barcode above the address
 // BelowAddress - print barcode below the address
 // Suppress - don't print barcode as all
 @enum {string}
 @export
 */
const AddressBarcodePosition: GeneralRecord = {
  AboveAddress: 'AboveAddress',
  BelowAddress: 'BelowAddress',
  Suppress: 'Suppress',
};

export default AddressBarcodePosition;
