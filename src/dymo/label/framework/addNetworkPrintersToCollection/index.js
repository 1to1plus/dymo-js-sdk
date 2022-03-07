import { addPrinterToCollection, printers as _networkPrinters } from '../../../../settings';

/**
 add network printers to printer collection
 @private
 @return {undefined}
 */

const addNetworkPrintersToCollection = (result) => {
  // get network printers as well
  // eslint-disable-next-line guard-for-in,no-restricted-syntax
  for (const printerUri in _networkPrinters) {
    const npi = _networkPrinters[printerUri].getPrinters();
    // eslint-disable-next-line no-plusplus
    for (let j = 0; j < npi.length; ++j) {
      const networkPrinter = npi[j];

      addPrinterToCollection(networkPrinter, result);
    }
  }
};

export default addNetworkPrintersToCollection;
