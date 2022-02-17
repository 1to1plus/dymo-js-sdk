import { addPrinterToCollection, printers as _networkPrinters } from '../../../../settings'

/**
 add network printers to printer collection
 @private
 @return {undefined}
 */

const addNetworkPrintersToCollection = (result) => {
  // get network printers as well
  for (let printerUri in _networkPrinters)
  {
    let npi = _networkPrinters[printerUri].getPrinters();
    for (let j = 0; j < npi.length; ++j)
    {
      let networkPrinter = npi[j];

      addPrinterToCollection(networkPrinter, result);
    }
  }
}

export default addNetworkPrintersToCollection;
