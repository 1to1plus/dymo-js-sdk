import { getSetting } from '../../../../settings'
import { createFramework } from '../createFramework'
import createPrintersCollection from '../createPrintersCollection'
import addNetworkPrintersToCollection from '../addNetworkPrintersToCollection'
import { getPrinters } from '../OneOffFunctions'

/**
 @export
 */
const getPrintersAsync = function () {
  if (getSetting('ASSUME_MOBILE')) {
    const result = createPrintersCollection()
    addNetworkPrintersToCollection(result)
    return goog.Promise.resolve(result)
  }

  return createFramework().getPrintersAsync().then(function (printersXml) {
    // get 'local' printers, if we can
    try {
      const result = getPrinters(printersXml)
      addNetworkPrintersToCollection(result)
      return result
    } catch (e) {}
    return null
  })
};

export default getPrintersAsync;
