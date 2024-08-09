import PrinterInfo from '../PrinterInfo';

/**
 @public
 @constructor
 @extends {PrinterInfo}
 @param {string} name
 @param {string} modelName
 @param {boolean} isConnected
 @param {boolean} isLocal
 @param {boolean} isTwinTurbo
 */
const LabelWriterPrinterInfo = function (name, modelName, isConnected, isLocal, isTwinTurbo) {
  PrinterInfo.call(this, 'LabelWriterPrinter', name, modelName, isConnected, isLocal);

  this.isTwinTurbo = isTwinTurbo;
};

export default LabelWriterPrinterInfo;
