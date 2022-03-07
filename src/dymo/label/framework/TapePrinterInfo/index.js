import PrinterInfo from '../PrinterInfo'

/**
 @public
 @constructor
 @extends {PrinterInfo}
 @param {string} name
 @param {string} modelName
 @param {boolean} isConnected
 @param {boolean} isLocal
 @param {boolean} isAutoCutSupported
 */
const TapePrinterInfo = function (
  name, modelName, isConnected, isLocal, isAutoCutSupported) {
  PrinterInfo.call(this, 'TapePrinter', name, modelName, isConnected, isLocal)

  this.isAutoCutSupported = isAutoCutSupported
}

export default TapePrinterInfo
