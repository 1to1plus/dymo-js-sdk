
//----------------------------------------------------------------------------
//
//  $Id: PrintJob.js 15739 2011-08-11 15:56:29Z vbuzuev $ 
//
// Project -------------------------------------------------------------------
//
//  DYMO Label Framework JavaScript Library
//
// Content -------------------------------------------------------------------
//
//  PrintJobStatus class
//
//----------------------------------------------------------------------------
//
//  Copyright (c), 2010, Sanford, L.P. All Rights Reserved.
//
//----------------------------------------------------------------------------


/** information about for one network printer
    @constructor
    @param {string} printerUri      uri to communicatino with the printer. Right now only Dymo Label Proxy service is supported
    @param {string} printerLocation printer location/description. Just a string used to format "name" for the end-user. If not specified, host name from printerUri will be used
    @param {string} printersXml 
*/
var NetworkPrinterInfo = function(printerUri, printerLocation, printersXml)
{
    this.printerUri = printerUri;
    this.printerLocation = printerLocation;
    this.printersXml = printersXml;
}

/**
    parses printers xml and returns appropriate PrinterInfo 
    @return {Array.<dymo.label.framework.PrinterInfo>}
*/
NetworkPrinterInfo.prototype.getPrinters = function()
{

    var result = getPrinters(this.printersXml);

    var uri = new goog.Uri(this.printerUri);
    var location = this.printerLocation;
    if (location == '')
        location = uri.getDomain();

    // update name to include location or hostname like
    // '<name> @ <location>'
    for (var i = 0; i < result.length; ++i)
    {
        var printerInfo = result[i];

        var name = printerInfo["name"];

        //result[i]["name"] = goog.uri.utils.appendPath(uri.toString(), name);
        printerInfo["name"] = name + ' @ ' + location;

        // set additional fields
        printerInfo.printerUri = this.printerUri;
        printerInfo.location = location;
        printerInfo.originalPrinterName = name;

        // 'publish' fields as well
        printerInfo['printerUri'] = printerInfo.printerUri;
        printerInfo['location'] = printerInfo.location;
        printerInfo['localName'] = printerInfo.originalPrinterName;
    }

    return result;
}
