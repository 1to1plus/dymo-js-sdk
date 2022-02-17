import { getSetting } from '../../../../settings'
import _createFramework from '../createFramework'

/**
 @export
 */
const getPrintersAsync = function () {
  if (getSetting('ASSUME_MOBILE')) {
    let result = createPrintersCollection()
    addNetworkPrintersToCollection(result)
    return goog.Promise.resolve(result)
  }

  return _createFramework().getPrintersAsync().then(function (printersXml) {
    // get 'local' printers, if we can
    try {
      let result = getPrinters(printersXml)
      addNetworkPrintersToCollection(result)
    } catch (e) {}
    return result
  })
}

export default getPrintersAsync
