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

const PrinterInfo = function (
  printerType: string,
  name: string,
  modelName: string,
  isConnected: boolean,
  isLocal: boolean,
) {
  this.printerType = printerType;
  this.name = name;
  this.modelName = modelName;
  this.isConnected = isConnected;
  this.isLocal = isLocal;

  /**
   internal field to store a printer uri as "network/mobile/remote" printer, e.g. uri for DYMO Label lProxy service
   @public
   @type {string}
   */
  this.printerUri = '';

  /**
   internal field to store an original printer name as got from network printer
   @public
   @type {string}
   */
  this.originalPrinterName = '';
};

export default PrinterInfo;
