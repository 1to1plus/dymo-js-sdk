

// Copyright 2006 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Class for managing requests via iFrames.  Supports a number of
 * methods of transfer.
 *
 * Gets and Posts can be performed and the resultant page read in as text,
 * JSON, or from the HTML DOM.
 *
 * Using an iframe causes the throbber to spin, this is good for providing
 * feedback to the user that an action has occurred.
 *
 * Requests do not affect the history stack, see goog.History if you require
 * this behavior.
 *
 * The responseText and responseJson methods assume the response is plain,
 * text.  You can access the Iframe's DOM through responseXml if you need
 * access to the raw HTML.
 *
 * Tested:
 *    + FF2.0 (Win Linux)
 *    + IE6, IE7
 *    + Opera 9.1,
 *    + Chrome
 *    - Opera 8.5 fails because of no textContent and buggy innerText support
 *
 * NOTE: Safari doesn't fire the onload handler when loading plain text files
 *
 * This has been tested with Drip in IE to ensure memory usage is as constant
 * as possible. When making making thousands of requests, memory usage stays
 * constant for a while but then starts increasing (<500k for 2000
 * requests) -- this hasn't yet been tracked down yet, though it is cleared up
 * after a refresh.
 *
 *
 * BACKGROUND FILE UPLOAD:
 * By posting an arbitrary form through an IframeIo object, it is possible to
 * implement background file uploads.  Here's how to do it:
 *
 * - Create a form:
 *   <pre>
 *   &lt;form id="form" enctype="multipart/form-data" method="POST"&gt;
 *      &lt;input name="userfile" type="file" /&gt;
 *   &lt;/form&gt;
 *   </pre>
 *
 * - Have the user click the file input
 * - Create an IframeIo instance
 *   <pre>
 *   var io = new goog.net.IframeIo;
 *   goog.events.listen(io, goog.net.EventType.COMPLETE,
 *       function() { alert('Sent'); });
 *   io.sendFromForm(document.getElementById('form'));
 *   </pre>
 *
 *
 * INCREMENTAL LOADING:
 * Gmail sends down multiple script blocks which get executed as they are
 * received by the client. This allows incremental rendering of the thread
 * list and conversations.
 *
 * This requires collaboration with the server that is sending the requested
 * page back.  To set incremental loading up, you should:
 *
 * A) In the application code there should be an externed reference to
 * <code>handleIncrementalData()</code>.  e.g.
 * goog.exportSymbol('GG_iframeFn', goog.net.IframeIo.handleIncrementalData);
 *
 * B) The response page should them call this method directly, an example
 * response would look something like this:
 * <pre>
 *   &lt;html&gt;
 *   &lt;head&gt;
 *     &lt;meta content="text/html;charset=UTF-8" http-equiv="content-type"&gt;
 *   &lt;/head&gt;
 *   &lt;body&gt;
 *     &lt;script&gt;
 *       D = top.P ? function(d) { top.GG_iframeFn(window, d) } : function() {};
 *     &lt;/script&gt;
 *
 *     &lt;script&gt;D([1, 2, 3, 4, 5]);&lt;/script&gt;
 *     &lt;script&gt;D([6, 7, 8, 9, 10]);&lt;/script&gt;
 *     &lt;script&gt;D([11, 12, 13, 14, 15]);&lt;/script&gt;
 *   &lt;/body&gt;
 *   &lt;/html&gt;
 * </pre>
 *
 * Your application should then listen, on the IframeIo instance, to the event
 * goog.net.EventType.INCREMENTAL_DATA.  The event object contains a
 * 'data' member which is the content from the D() calls above.
 *
 * NOTE: There can be problems if you save a reference to the data object in IE.
 * If you save an array, and the iframe is dispose, then the array looses its
 * prototype and thus array methods like .join().  You can get around this by
 * creating arrays using the parent window's Array constructor, or you can
 * clone the array.
 *
 *
 * EVENT MODEL:
 * The various send methods work asynchronously. You can be notified about
 * the current status of the request (completed, success or error) by
 * listening for events on the IframeIo object itself. The following events
 * will be sent:
 * - goog.net.EventType.COMPLETE: when the request is completed
 *   (either sucessfully or unsuccessfully). You can find out about the result
 *   using the isSuccess() and getLastError
 *   methods.
 * - goog.net.EventType.SUCCESS</code>: when the request was completed
 *   successfully
 * - goog.net.EventType.ERROR: when the request failed
 * - goog.net.EventType.ABORT: when the request has been aborted
 *
 * Example:
 * <pre>
 * var io = new goog.net.IframeIo();
 * goog.events.listen(io, goog.net.EventType.COMPLETE,
 *   function() { alert('request complete'); });
 * io.sendFromForm(...);
 * </pre>
 *
 */
































// adds a hidden element to load DYMO Safari plugin
// returns js object represent the plugin
/**
    @return {SafariPlugin}
*/
function _createSafariPlugin()
{
    if (ASSUME_MOBILE)
        return null;

    var pluginId = '_DymoLabelFrameworkJslSafariPlugin';
            
    if (!document.getElementById(pluginId))
    {
        // try to create Safari Plugin as <embed> control
        var safariPlugin = document.createElement("embed");
        safariPlugin.type = "application/x-dymolabel";
        safariPlugin.id = pluginId;
        safariPlugin.width = 1;
        safariPlugin.height = 1;
        safariPlugin.hidden = true;

        // it is important to add it to the DOM
        // otherwise _DymoLabelFrameworkJslSafariPlugin is unavailable and 
        // it is impossible to call plug-in methods
        document.body.appendChild(safariPlugin);
    }
    
    return window[pluginId];
}

// adds a hidden element to load DYMO Safari plugin
// returns js object represent the plugin
/**
    @private
    @return {NsapiPlugin|HTMLElement}
*/
function _createNsapiPlugin2(hidden)
{
    if (ASSUME_MOBILE)
        return null;

    var pluginId = '_DymoLabelFrameworkJslPlugin';
            
    if (!document.getElementById(pluginId))
    {
        // try to create Safari Plugin as <embed> control
        var plugin = document.createElement("embed");
        plugin.type = "application/x-dymolabel";
        plugin.id = pluginId;

        if (hidden)
        {
            plugin.width = 1;
            plugin.height = 1;
            plugin.hidden = true;
        }
        else
        {
            plugin.width = 0;
            plugin.height = 0;
            plugin.hidden = false;
        }

        // it is important to add it to the DOM
        // otherwise _DymoLabelFrameworkJslSafariPlugin is unavailable and 
        // it is impossible to call plug-in methods
        document.body.appendChild(plugin);
    }
    
    //return _DymoLabelFrameworkJslSafariPlugin;
    return document.getElementById(pluginId);
}

// adds a hidden element to load DYMO Safari plugin
// returns js object represent the plugin
/**
    @private
    @return {NsapiPlugin|HTMLElement}
*/
function _createNsapiPlugin()
{
    if (ASSUME_MOBILE)
        return null;

    var result = _createNsapiPlugin2(true);
    if (!result.getPrinters)
    {
        document.body.removeChild(result); 
        result = _createNsapiPlugin2(false);
    }

    return result;

}


// adds a hidden element to load DYMO NPAPI plugin
// returns js object represent the plugin
/**
    @private
    @return {NsapiPlugin|HTMLElement}
*/
function _createMacNsapiPlugin2(hidden)
{
    if (ASSUME_MOBILE)
        return null;

    var pluginId = '_DymoLabelFrameworkJslPlugin';
            
    if (!document.getElementById(pluginId))
    {
        // try to create Safari Plugin as <embed> control
        var plugin = document.createElement("embed");
        plugin.type = "application/x-npapi-dymolabel";
        plugin.id = pluginId;
        if (hidden)
        {
            plugin.width = 1;
            plugin.height = 1;
            plugin.hidden = true;
        }
        else
        {
            plugin.width = 0;
            plugin.height = 0;
            plugin.hidden = false;
        }

        // it is important to add it to the DOM
        // otherwise _DymoLabelFrameworkJslSafariPlugin is unavailable and 
        // it is impossible to call plug-in methods
        document.body.appendChild(plugin);

        if (!plugin.getPrinters)
        {
            plugin.width = 1;
            plugin.height = 1;
            plugin.hidden = false;
        }
    }
    
    //return _DymoLabelFrameworkJslSafariPlugin;
    return document.getElementById(pluginId);
}

// adds a hidden element to load DYMO Safari plugin
// returns js object represent the plugin
/**
    @return {NsapiPlugin|HTMLElement}
*/
function _createMacNsapiPlugin()
{
    if (ASSUME_MOBILE)
        return null;

    var result = _createMacNsapiPlugin2(true);
    if (!result.getPrinters)
    {
        document.body.removeChild(result); 
        result = _createMacNsapiPlugin2(false);
    }

    return result;

}



/**
  @export
 */
dymo.label.framework.init = function(callBack)
{
    _createFramework(callBack, true);
}
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


/**
    Adds a network printer/proxy to the library.
    Upon adding a request is made to the printer to get it configuration information 

    @export
   
    @param {string} printerUri printer uri 

    @param {string=} opt_location printer location 

    @param {function(string)=} opt_successCallback A function expecting one
     argument, called when the printer configuration information arrives, with the printer uri.
 
    @param {function(string)=} opt_errorCallback A function expecting one
       argument, called on timeout or other error

    @return {undefined}
*/
dymo.label.framework.addPrinterUri = function(printerUri, opt_location, opt_successCallback, opt_errorCallback)
{
    // check location
    var location = opt_location || '';
    if (!goog.isString(location))
        location = location.toString();

    var successCallback = function(printersXml)
    {
        var printerInfo = new NetworkPrinterInfo(printerUri, location, printersXml);
        _networkPrinters[printerUri] = printerInfo;

        if (opt_successCallback)
            opt_successCallback(printerUri);
    }

    var errorCallback = null;
    if (opt_errorCallback)
        errorCallback = function() {opt_errorCallback(printerUri);};

    var getPritnersUri = goog.uri.utils.appendPath(printerUri, 'getPrinters');

    var jsonp = new goog.net.Jsonp(getPritnersUri, 'callback');
    jsonp.send(null, successCallback, errorCallback); 
}

/**
    @export
    @param {string} printerUri 
    @return {undefined}
*/
dymo.label.framework.removePrinterUri = function(printerUri)
{
    delete _networkPrinters[printerUri];
    //for (var i = _networkPrinters.length - 1; i >= 0; --i)
    //    if (_networkPrinters[i].printerUri == printerUri)
    //        _networkPrinters.remove(i);
}

/**
    @export
    @return {undefined}
*/
dymo.label.framework.removeAllPrinterUri = function()
{
    _networkPrinters = {};
    //for (var i = _networkPrinters.length - 1; i >= 0; --i)
    //    if (_networkPrinters[i].printerUri == printerUri)
    //        _networkPrinters.remove(i);
}


/**
    parses printers xml and returns appropriate PrinterInfo 
    @private
    @return {Array.<dymo.label.framework.PrinterInfo>}
*/
function getPrinters(printersXml)
{
    //TODO: update to use functions from Xml namespace
    //var getXmlText = function(elem) { return elem.firstChild.data; };
    //var getChildText = function(elem, child) { return getXmlText(elem.getElementsByTagName(child)[0]); };
    var getChildText = function(elem, child) { return dymo.xml.getElementText(dymo.xml.getElement(elem, child)); };
 
    var xmldoc = dymo.xml.parse(printersXml);
    var result = createPrintersCollection();
    var i, name, modelName, isConnected, isLocal, isTwinTurbo, isAutoCutSupported;

    //TODO: update to use XPath
    //var printers = xmldoc.getElementsByTagName("Printers")[0];
    var printers = dymo.xml.getElement(xmldoc, "Printers");
    //var labelWriterPrinters = printers.getElementsByTagName("LabelWriterPrinter");
    var labelWriterPrinters = dymo.xml.getElements(printers, "LabelWriterPrinter");
    for (i = 0; i < labelWriterPrinters.length; i++)
    {
        //var labelWriterPrinter = {};
        //labelWriterPrinter.printerType = "LabelWriterPrinter";
        name = getChildText(labelWriterPrinters[i], "Name");
        modelName = getChildText(labelWriterPrinters[i], "ModelName");
        isConnected = getChildText(labelWriterPrinters[i], "IsConnected") == "True";
        isLocal = getChildText(labelWriterPrinters[i], "IsLocal") == "True";
        isTwinTurbo = getChildText(labelWriterPrinters[i], "IsTwinTurbo") == "True";

        var labelWriterPrinterInfo = new dymo.label.framework.LabelWriterPrinterInfo(name, modelName, isConnected, isLocal, isTwinTurbo);
         addPrinterToCollection(labelWriterPrinterInfo, result);
    }

    //var tapePrinters = printers.getElementsByTagName("TapePrinter");
    var tapePrinters = dymo.xml.getElements(printers, "TapePrinter");
    for (i = 0; i < tapePrinters.length; i++)
    {
        //var tapePrinter = {};
        //tapePrinter.printerType = "TapePrinter";
        name = getChildText(tapePrinters[i], "Name");
        modelName = getChildText(tapePrinters[i], "ModelName");
        isConnected = getChildText(tapePrinters[i], "IsConnected") == "True";
        isLocal = getChildText(tapePrinters[i], "IsLocal") == "True";
        isAutoCutSupported = getChildText(tapePrinters[i], "IsAutoCutSupported") == "True";

        var tapePrinterInfo = new dymo.label.framework.TapePrinterInfo(name, modelName, isConnected, isLocal, isAutoCutSupported);
        addPrinterToCollection(tapePrinterInfo, result);
    }

    //var dzPrinters = printers.getElementsByTagName("DZPrinter");
    var dzPrinters = dymo.xml.getElements(printers, "DZPrinter");
    for (i = 0; i < dzPrinters.length; i++)
    {
        //var dzPrinter = {};
        //dzPrinter.printerType = "DZPrinter";
        name = getChildText(dzPrinters[i], "Name");
        modelName = getChildText(dzPrinters[i], "ModelName");
        isConnected = getChildText(dzPrinters[i], "IsConnected") == "True";
        isLocal = getChildText(dzPrinters[i], "IsLocal") == "True";
        isAutoCutSupported = getChildText(dzPrinters[i], "IsAutoCutSupported") == "True";

        var dzPrinterInfo = new dymo.label.framework.DZPrinterInfo(name, modelName, isConnected, isLocal, isAutoCutSupported);
        addPrinterToCollection(dzPrinterInfo, result);
    }
    return result;
}




/** filters printers list by specified printer type
    @private
    @param {string} printerType
    @return {Array.<dymo.label.framework.PrinterInfo>}
*/
function getPrintersByType(printerType)
{
    var result = [];
     /** optionalProperty always contains an array or null
    * @type {?Array}
    */
    var printers = dymo.label.framework.getPrinters();
    printers = printers['byIndex']; // access array safely
    for (var i = 0; i < printers.length; i++)
    {
        var printer = printers[i];
        if (!!printer.printerType && printer.printerType == printerType)
            result.push(printer);
    }

    return result;
}

/** filters printers list by specified printer type
    @private
    @param {string} printerType    
	@return {Array.<dymo.label.framework.PrinterInfo>}    
*/
function getPrintersByTypeAsync(printerType)
{        
	return dymo.label.framework.getPrintersAsync().then(function(printers)
	{
        var result = [];        
		printers = printers['byIndex']; // access array safely
		for (var i = 0; i < printers.length; i++)
		{
			var printer = printers[i];
			if (!!printer.printerType && printer.printerType == printerType)
				result.push(printer);
		}
		return result;
	});	 
}

/** filters printers list, gets LabelWriter printers only
    @return {Array.<dymo.label.framework.LabelWriterPrinterInfo>}
    @export
*/
dymo.label.framework.getLabelWriterPrinters = function()
{
    return getPrintersByType("LabelWriterPrinter");
}

/** filters printers list, gets tape printers only
    @return {Array.<dymo.label.framework.TapePrinterInfo>}
    @export
*/
dymo.label.framework.getTapePrinters = function()
{
    return getPrintersByType("TapePrinter");
}

/** filters printers list, gets DZ printers only
    @return {Array.<dymo.label.framework.DZPrinterInfo>}
    @export
*/
dymo.label.framework.getDZPrinters = function () {
    return getPrintersByType("DZPrinter");
}

/** filters printers list, gets LabelWriter printers only
    @return {Array.<dymo.label.framework.LabelWriterPrinterInfo>}
    @export
*/
dymo.label.framework.getLabelWriterPrintersAsync = function()
{
	return getPrintersByTypeAsync("LabelWriterPrinter");
}

/** filters printers list, gets tape printers only
    @return {Array.<dymo.label.framework.TapePrinterInfo>}
    @export
*/
dymo.label.framework.getTapePrintersAsync = function()
{    
	return getPrintersByTypeAsync("TapePrinter");
}

/** filters printers list, gets DZ printers only
    @return {Array.<dymo.label.framework.DZPrinterInfo>}
    @export
*/
dymo.label.framework.getDZPrintersAsync = function ()
{    	
	return getPrintersByTypeAsync("DZPrinter");	
}


/** loads label content from a file or URL
 There are some considerations should be taken into account before using this function.
 Use it only then there are no other way to load label data, that in most cases should be done using openLabelXml()
 - full file name/url should be specified. The function will not honor relative pathes based on document.location.href
 - the fileName can be http:// or file:// urls. On Windows it can be a regular file name, like 'c:\users\desktop\address.label' 
 - the content of the label will be loaded synchronously. So if the remote server is down there will be a timeout.
 - any local file can be accessed/tried to be accessed. The function is not limited by any browser restrictions. 
   Though only a valid label file (according to label.xsd schema) can be loaded this still can be potential security concern.
 - the URL is not limited to same-site-origin browser policy - any url can be opened
 - the proxy settings are system default settings, not nessesary browser settings. TODO: fix it by providing proxy settings params into the library (same as DLS7) or read browser proxy settings (if possible) 
 returns Label object provides label manipulation methods

    @param {string} fileName
    return {dymo.label.framework.ILabel}
    @export
*/ 
dymo.label.framework.openLabelFile = function(fileName)
{
    return new dymo.label.framework.Label(_createFramework().openLabelFile(fileName));
}

/**
    @param {string} fileName
    return {dymo.label.framework.ILabel}
    @export
*/ 
dymo.label.framework.openLabelFileAsync = function(fileName)
{    
	return _createFramework().openLabelFileAsync(fileName).then(function(labelXml)
	{
		return new dymo.label.framework.Label(labelXml);
	});	 
}

/** loads label content from xml stream/string
 labelXml - label definition as xml string
 Note: it is a preferable way to load/open label files. Use XMLHttpRequest() or other standard browser methods to get xml string.
 returns Label object

    @param {string} labelXml
    return {dymo.label.framework.ILabel}
    @export
*/
dymo.label.framework.openLabelXml = function(labelXml)
{
    //alert('dymo.label.framework.openLabelXml: ' + labelXml);
    //goog.debug.Logger.getLogger('dymo.label.framework').info('dymo.label.framework.openLabelXml(): length ' + labelXml.length);

    var logger = new goog.debug.Logger('dymo.label.framework');
    logger.setLevel(goog.debug.Logger.Level.INFO);
    logger.info(labelXml);
    
    return new dymo.label.framework.Label(labelXml);
}


/**
    Contains a pair of 
    @constructor

    @param {string} printerUri
    @param {string} printerName
*/

/** Splits network printer name into two parts, the printer's uri and a 
 'local' printer name

 @param {string} networkPrinterName
 @return {NetworkPrinterName} 
*/
/*
function splitNetworkPrinterName(networkPrinterName)
{
    var uri = new goog.Uri(networkPrinterName);
    var printerName = uri.getPath();
    if (printerName.length > 1 && printerName.charAt(0) == '/')
        printerName = printerName.slice(1);

    uri.setPath('');

    return new NetworkPrinterName(uri.toString(), printerName);
}
*/

/** Prints a label
// printerName - the printer to print on. A list of printers can be obtained by getPrinters()
// printParamsXml - printing parameters, like number of copies, print quality, etc. See PrintParams.xsd
// labelXml - label to print
// labelSetXml - LabelSet to print. LabelSet is used to print multiple labels with same layout but different data, e.g. multiple addresses.
//               Use LabelSetBuilder to create a LabelSet or construct xml manualy according to LabelSet.xsd

    @param {string} printerName
    @param {string} printParamsXml
    @param {string} labelXml
    @param {string} labelSetXml
    @return {undefined}
    @export
*/
dymo.label.framework.printLabel = function(printerName, printParamsXml, labelXml, labelSetXml)
{
    printParamsXml = printParamsXml || "";
    labelSetXml = labelSetXml || "";
    if (typeof(labelSetXml) != "string")
        labelSetXml = labelSetXml.toString();
        
    if (typeof(labelXml) == "undefined")
            throw new Error("printLabel(): labelXml parameter should be specified");

    if (typeof(labelXml) != "string")
        labelXml = labelXml.toString();

    var printers = dymo.label.framework.getPrinters();
    var printerInfo = printers[printerName];

    if (goog.isDefAndNotNull(printerInfo))
    {
        if (ASSUME_MOBILE || printerInfo.isNetworkPrinter())
            printLabelToNetworkPrinter(printerInfo, printParamsXml, labelXml, labelSetXml);
        else
            _createFramework().printLabel(printerInfo["name"], printParamsXml, labelXml, labelSetXml);
    }
    else
        throw new Error("printLabel(): unknown printer '" + printerName + "'");


    //if (!isNetworkPrinter(printerName))
    //    _createFramework().printLabel(printerName, printParamsXml, labelXml, labelSetXml);
    //else
    //{
    //    printLabelToNetworkPrinter(printerName, printParamsXml, labelXml, labelSetXml);
    //}
};




/** Prints a label and runs status checking in a loop

    @param {string} printerName the printer to print on. A list of printers can be obtained by getPrinters()
    @param {string} printParamsXml printing parameters, like number of copies, print quality, etc. See PrintParams.xsd
    @param {string} labelXml label to print
    @param {string} labelSetXml 
        LabelSet to print. LabelSet is used to print multiple labels with same layout but different data, e.g. multiple addresses. 
        Use LabelSetBuilder to create a LabelSet or construct xml manualy according to LabelSet.xsd
    @param {function(dymo.label.framework.PrintJob, dymo.label.framework.PrintJobStatusInfo): boolean} statusCallback
        Function to be called when a print job status is available.
        The function is called with one argument of type dymo.label.framework.PrintJobStatusInfo
        To continue polling the status the function should return true, false otherwise 
    @param {number} pollInterval poll interval in milliseconds
    @return {dymo.label.framework.PrintJob}
    @export
*/
dymo.label.framework.printLabelAndPollStatus = function(printerName, printParamsXml, labelXml, labelSetXml, statusCallback, pollInterval)
{
    var printJob = dymo.label.framework.printLabel2(printerName, printParamsXml, labelXml, labelSetXml);

    var statusChecker = function(pjs)
    {
        var callbackResult = statusCallback(printJob, pjs);
        if (!callbackResult)
            return;

        // schedule more status checking                    
        var delay = new goog.async.Delay(function()
        {
            printJob.getStatus(statusChecker);
            delay.dispose();
        }, pollInterval);
        delay.start();
    };

    printJob.getStatus(statusChecker);

    return printJob;
};
/** Prints a label and runs status checking in a loop

    @param {string} printerName the printer to print on. A list of printers can be obtained by getPrinters()
    @param {string} printParamsXml printing parameters, like number of copies, print quality, etc. See PrintParams.xsd
    @param {string} labelXml label to print
    @param {string} labelSetXml 
        LabelSet to print. LabelSet is used to print multiple labels with same layout but different data, e.g. multiple addresses. 
        Use LabelSetBuilder to create a LabelSet or construct xml manualy according to LabelSet.xsd
    @param {function(dymo.label.framework.PrintJob, dymo.label.framework.PrintJobStatusInfo): boolean} statusCallback
        Function to be called when a print job status is available.
        The function is called with one argument of type dymo.label.framework.PrintJobStatusInfo
        To continue polling the status the function should return true, false otherwise 
    @param {number} pollInterval poll interval in milliseconds   
	@return {goog.Promise} dymo.label.framework.PrintJob print job
    @export
*/
dymo.label.framework.printLabelAndPollStatusAsync = function(printerName, printParamsXml, labelXml, labelSetXml, statusCallback, pollInterval)
{    	
	return dymo.label.framework.printLabel2Async(printerName, printParamsXml, labelXml, labelSetXml).then(function(printJob){
		
		var statusChecker = function(pjs)
		{
			var callbackResult = statusCallback(printJob, pjs);
			if (!callbackResult)
				return;

			// schedule more status checking                    
			var delay = new goog.async.Delay(function()
			{
				printJob.getStatus(statusChecker);
				delay.dispose();
			}, pollInterval);
			delay.start();
		};

		printJob.getStatus(statusChecker);

		return printJob;
	});
};



/** Creates a label bitmap image can be used for label previewing
 Params:
 - labelXml - label to preview
 - renderParamsXml - rendering parameters, like shadow depth, label color, etc. See LabelRenderParams.xsd
 - printerName - printer name the preview is generated for. Thhe preview/output cna be different on different printers,
                 especially on tape printers with different print head size.
                 An empty string can be passed if it does not matter or important on whitch printer the label will be printed.
                 In this case a default printer metrics will be used that is LW400 for LabelWriter printers and LW400 DUO Tape for tape printers

    @param {string} labelXml
    @param {string} renderParamsXml
    @param {string} printerName
    @return {string}
    @export
*/
dymo.label.framework.renderLabel = function(labelXml, renderParamsXml, printerName)
{
    if (typeof(labelXml) == "undefined")
            throw new Error("renderLabel(): labelXml parameter should be specified");

    if (typeof(labelXml) != "string")
        labelXml = labelXml.toString();

    renderParamsXml = renderParamsXml || "";
    printerName = printerName || "";

    return _createFramework().renderLabel(labelXml, renderParamsXml, printerName);
};

/** Creates a label bitmap image can be used for label previewing
 Params:
 - labelXml - label to preview
 - renderParamsXml - rendering parameters, like shadow depth, label color, etc. See LabelRenderParams.xsd
 - printerName - printer name the preview is generated for. Thhe preview/output cna be different on different printers,
                 especially on tape printers with different print head size.
                 An empty string can be passed if it does not matter or important on whitch printer the label will be printed.
                 In this case a default printer metrics will be used that is LW400 for LabelWriter printers and LW400 DUO Tape for tape printers

    @param {string} labelXml
    @param {string} renderParamsXml
    @param {string} printerName
    @return {string}
    @export
*/
dymo.label.framework.renderLabelAsync = function(labelXml, renderParamsXml, printerName)
{
   	
	if (typeof(labelXml) == "undefined")
            throw new Error("renderLabelAsync(): labelXml parameter should be specified");

    if (typeof(labelXml) != "string")
        labelXml = labelXml.toString();

    renderParamsXml = renderParamsXml || "";
    printerName = printerName || "";
	
	return _createFramework().renderLabelAsync(labelXml, renderParamsXml, printerName);
};


/** Utility function to create a render label request object
    @param {string} requestId
    @param {string} statusId
    @param {string} statusMessage
    @param {string} imageData

    @return {Object}
*/
function createRenderLabelRequest(requestId, statusId, statusMessage, imageData)
{
    var result = {};
    result['requestId'] = requestId;
    result['imageData'] = imageData;
    result['statusId'] = statusId;
    result['statusMessage'] = statusMessage;

    return result;
}


/** Loads an image from url/file and returns it as base64-encoded png stream.
// Note: the same comments as for openLabelFile() is applied to this function as well

    @param {string} imageUri
    @return {string}
    @export
*/    
dymo.label.framework.loadImageAsPngBase64 = function(imageUri)
{
    return _createFramework().loadImageAsPngBase64(imageUri);
};

/** Loads an image from url/file and returns it as base64-encoded png stream.
// Note: the same comments as for openLabelFile() is applied to this function as well

    @param {string} imageUri
    @return {string}
    @export
*/    
dymo.label.framework.loadImageAsPngBase64Async = function(imageUri)
{
	return _createFramework().loadImageAsPngBase64Async(imageUri);
};

/** Creates an xml stream suatable to pass to printLabel() function as printParamsXml parameter
// Created printing parameters are for printing on LabelWriter printers
// Parameters:
// - params - an JavaScript object with following properties (not all properties have to be defined, if a property is not defined a default value will be used)
//      params.copies - number of copies to print
//      params.jobTitle - print job title/description
//      params.flowDirection - prints label content as left-to-right or right-to-left use FlowDirection enum to specify values
//      params.printQuality - printing quality, one of 'Text', 'BarcodeAndGraphics', or 'Auto'
//      params.twinTurboRoll - the roll to print on if the printer is TwinTurbo. One of 'Left", 'Right', or 'Auto'

    @param {LabelWriterPrintParams} params
    @return {string}
    @export
*/
dymo.label.framework.createLabelWriterPrintParamsXml = function(params)
{
    if (!params)
        return "";

    var doc = dymo.xml.parse("<LabelWriterPrintParams/>");
    var root = doc.documentElement;

    if (params.copies)
        dymo.xml.appendElement(root, "Copies", params.copies.toString());

    if (params.jobTitle)
        dymo.xml.appendElement(root, "JobTitle", params.jobTitle);

    if (params.flowDirection)
        dymo.xml.appendElement(root, "FlowDirection", params.flowDirection);

    if (params.printQuality)
        dymo.xml.appendElement(root, "PrintQuality", params.printQuality);

    if (params.twinTurboRoll)
        dymo.xml.appendElement(root, "TwinTurboRoll", params.twinTurboRoll);

    //var result = Xml.serialize(doc);
    //alert(result);
    //return result;

    return dymo.xml.serialize(doc);
}

/** Creates an xml stream suatable to pass to printLabel() function as printParamsXml parameter
// Created printing parameters are for printing on Tape printers
// Parameters:
// - params - an JavaScript object with following properties (not all properties have to be defined, if a property is not defined a default value will be used)
//      params.copies - number of copies to print
//      params.jobTitle - print job title/description
//      params.flowDirection - prints label content as left-to-right or right-to-left use FlowDirection enum to specify values
//      params.alignment - lable alignment. One of 'Left', 'Center', or 'Right'
//      params.cutMode - cut mode if auto-cut is supported by the printer. One of 'AutoCut" or 'ChainMarks'

    @param {TapePrintParams} params
    @return {string}
    @export

*/
dymo.label.framework.createTapePrintParamsXml = function(params)
{
    if (!params)
        return "";

    var doc = dymo.xml.parse("<TapePrintParams/>");
    var root = doc.documentElement;

    if (params.copies)
        dymo.xml.appendElement(root, "Copies", params.copies.toString());

    if (params.jobTitle)
        dymo.xml.appendElement(root, "JobTitle", params.jobTitle);

    if (params.flowDirection)
        dymo.xml.appendElement(root, "FlowDirection", params.flowDirection);

    if (params.alignment)
        dymo.xml.appendElement(root, "Alignment", params.alignment);

    if (params.cutMode)
        dymo.xml.appendElement(root, "CutMode", params.cutMode);

    return dymo.xml.serialize(doc);
}
