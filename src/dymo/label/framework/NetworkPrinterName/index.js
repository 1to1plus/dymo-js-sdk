//----------------------------------------------------------------------------
//
//  $Id: NetworkPrinter.js 15739 2011-08-11 15:56:29Z vbuzuev $
//
// Project -------------------------------------------------------------------
//
//  DYMO Label Framework JavaScript Library
//
// Content -------------------------------------------------------------------
//
//  PrintJob class
//
//----------------------------------------------------------------------------
//
//  Copyright (c), 2010, Sanford, L.P. All Rights Reserved.
//
//----------------------------------------------------------------------------

/**
 Contains a pair of printer uri and printer' local name
 @constructor

 @param {string} printerUri
 @param {string} printerName
 */
const NetworkPrinterName = function (printerUri, printerName) {
  this.printerUri = printerUri;
  this.printerName = printerName;
};

/** Determines is the printer local or network
 Local means installed as a Printer on the Desktop machine
 where JavaScript is executing, e.g. it is a printer available as 'printer' on Windows machine
 'Network' means a printer installed on a 'proxy' machine or a real network printer (in the future)

 @param {string} printerName
 @return {boolean}
 */
NetworkPrinterName.isNetworkPrinter = function (printerName) {
  // a network printer should have a valid uri with 'dymo' as the uri's scheme
  const printerUri = new goog.Uri(printerName);
  return printerUri.hasScheme() && printerUri.hasDomain() && printerUri.hasPath();
};

/** Splits network printer name into two parts, the printer's uri and a
 'local' printer name

 @param {string} networkPrinterName
 @return {NetworkPrinterName}
 */
NetworkPrinterName.splitNetworkPrinterName = function (networkPrinterName) {
  const uri = new goog.Uri(networkPrinterName);
  let printerName = uri.getPath();
  if (printerName.length > 1 && printerName.charAt(0) == '/') printerName = printerName.slice(1);

  uri.setPath('');

  return new NetworkPrinterName(uri.toString(), printerName);
};

export default NetworkPrinterName;
