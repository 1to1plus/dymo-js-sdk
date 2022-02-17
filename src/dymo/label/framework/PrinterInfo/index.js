//----------------------------------------------------------------------------
//
//  $Id: DYMO.Label.Framework.js 12271 2010-06-16 14:25:34Z vbuzuev $
//
// Project -------------------------------------------------------------------
//
//  DYMO Label Framework JavaScript Library
//
// Content -------------------------------------------------------------------
//
//  Main functions
//
//----------------------------------------------------------------------------
//
//  Copyright (c), 2010, Sanford, L.P. All Rights Reserved.
//
//----------------------------------------------------------------------------

/**
 @fileoverview PrinterInfo support
 */


/**
 @public
 @constructor
 @param {string} printerType
 @param {string} name
 @param {string} modelName
 @param {boolean} isConnected
 @param {boolean} isLocal
 */
const PrinterInfo = function (
  printerType, name, modelName, isConnected, isLocal) {
  this['printerType'] = printerType
  this['name'] = name
  this['modelName'] = modelName
  this['isConnected'] = isConnected
  this['isLocal'] = isLocal

  /**
   internal field to store a printer uri as "network/mobile/remote" printer, e.g. uri for DYMO Label lProxy service
   @public
   @type {string}
   */
  this.printerUri = ''

  /**
   internal field to store an original printer name as got from network printer
   @public
   @type {string}
   */
  this.originalPrinterName = ''
}

/** Determines is the printer local or network
 Local means installed as a Printer on the Desktop machine
 where javascript is executing, e.g. it is a printer available as 'printer' on Windows machine
 'Network' means a printer installed on a 'proxy' machine or a real network printer (in the future)

 @return {boolean}
 */
PrinterInfo.prototype.isNetworkPrinter = function () {
  return this.printerUri != ''
}

export default PrinterInfo
