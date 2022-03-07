var $02FXs$lodash = require("lodash");
var $02FXs$axios = require("axios");
var $02FXs$qs = require("qs");
var $02FXs$xml2js = require("xml2js");
var $02FXs$xmldomxmldom = require("@xmldom/xmldom");
var $02FXs$xmljs = require("xml-js");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "initApp", () => $98024307a5d0726a$export$bec0ec21ab4579a, (v) => $98024307a5d0726a$export$bec0ec21ab4579a = v);

const $87a73fe4e23c61da$export$a5a6e0b888b2c992 = {
    DEBUG: false,
    DETECT_DOUBLE_ESCAPING: false,
    TRUSTED_SITE: false,
    FORCE_NON_DOM_HTML_UNESCAPING: false,
    ASSUME_MOBILE: false,
    WS_PROTOCOL: 'https://',
    Port: 41951,
    Host: '127.0.0.1',
    WS_START_PORT: 41951,
    WS_END_PORT: 41960,
    WS_CHECK_TIMEOUT: 3000,
    WS_COMMAND_TIMEOUT: 10000,
    WS_SVC_HOST: '127.0.0.1',
    WS_SVC_HOST_LEGACY: 'localhost',
    WS_SVC_PATH: 'DYMO/DLS/Printing',
    BASE_URL: undefined,
    dymo: {
        label: {
            framework: {
                currentFramework: 0,
                trace: false
            }
        }
    }
};
const $87a73fe4e23c61da$export$263afe08c0871a1 = [];
const $87a73fe4e23c61da$export$8fc0f0b380b613c2 = {
};
const $87a73fe4e23c61da$export$1a988e7317c65621 = {
    WS_CMD_STATUS: 'StatusConnected',
    WS_CMD_GET_PRINTERS: 'GetPrinters',
    WS_CMD_OPEN_LABEL: 'OpenLabelFile',
    WS_CMD_PRINT_LABEL: 'PrintLabel',
    WS_CMD_PRINT_LABEL2: 'PrintLabel2',
    WS_CMD_RENDER_LABEL: 'RenderLabel',
    WS_CMD_LOAD_IMAGE: 'LoadImageAsPngBase64',
    WS_CMD_GET_JOB_STATUS: 'GetJobStatus',
    WS_CMD_IS_550_PRINTER: 'Is550Printer',
    WS_CMD_GET_CONSUMABLE_INFO_IN_550_PRINTER: 'GetConsumableInfoIn550Printer'
};
const $87a73fe4e23c61da$export$9319d8092206b03f = '<TextMarkup>';
const $87a73fe4e23c61da$export$4a23fba8ac5e0d2e = '</TextMarkup>';
const $87a73fe4e23c61da$export$d3a002d06513d68b = {
    IMG: ' ',
    BR: '\n'
};
const $87a73fe4e23c61da$export$f97d146443077432 = {
    SCRIPT: 1,
    STYLE: 1,
    HEAD: 1,
    IFRAME: 1,
    OBJECT: 1
};
const $87a73fe4e23c61da$export$f06e977173f1857c = {
    ELEMENT: 1,
    ATTRIBUTE: 2,
    TEXT: 3,
    CDATA_SECTION: 4,
    ENTITY_REFERENCE: 5,
    ENTITY: 6,
    PROCESSING_INSTRUCTION: 7,
    COMMENT: 8,
    DOCUMENT: 9,
    DOCUMENT_TYPE: 10,
    DOCUMENT_FRAGMENT: 11,
    NOTATION: 12
};
const $87a73fe4e23c61da$export$50b1d50c0ad68352 = 4294967296;
const $87a73fe4e23c61da$export$34a9398a32363e0 = Math.random() * 2147483648 | 0;
const $87a73fe4e23c61da$export$e51b7935b30bcaa6 = {
    NBSP: '\xa0'
};
const $87a73fe4e23c61da$export$7b27993fc34cc2bd = {
    '\0': '\\0',
    '\b': '\\b',
    '\f': '\\f',
    '\n': '\\n',
    '\r': '\\r',
    '\t': '\\t',
    '\x0B': '\\x0B',
    '"': '\\"',
    '\\': '\\\\'
};
const $87a73fe4e23c61da$export$52c364fca0e4c322 = {
    "'": "\\'"
};
const $87a73fe4e23c61da$export$f94a1a83b1ea80c6 = /(\.\d+)|(\d+)|(\D+)/g;
const $87a73fe4e23c61da$export$8206e8d612b3e63 = (key, defaultValue, strict = false)=>{
    if (!key) return $87a73fe4e23c61da$export$a5a6e0b888b2c992;
    const foundSetting = $02FXs$lodash.get($87a73fe4e23c61da$export$a5a6e0b888b2c992, key, undefined);
    if (foundSetting === undefined && !strict) return $02FXs$lodash.get($87a73fe4e23c61da$export$1a988e7317c65621, key, defaultValue);
    return foundSetting;
};
const $87a73fe4e23c61da$export$61fd6f1ddd0c20e2 = (key, value)=>{
    return $02FXs$lodash.set($87a73fe4e23c61da$export$a5a6e0b888b2c992, key, value);
};
if (!$87a73fe4e23c61da$export$a5a6e0b888b2c992.BASE_URL) {
    const host = $87a73fe4e23c61da$export$8206e8d612b3e63('Host');
    const port = $87a73fe4e23c61da$export$8206e8d612b3e63('Port');
    const url = `${$87a73fe4e23c61da$export$8206e8d612b3e63('WS_PROTOCOL') + host}:${port}/${$87a73fe4e23c61da$export$8206e8d612b3e63('WS_SVC_PATH')}/`;
    $87a73fe4e23c61da$export$61fd6f1ddd0c20e2('BASE_URL', url);
}
const $87a73fe4e23c61da$export$937701d1b4a6fa29 = (command, { host: host = $87a73fe4e23c61da$export$8206e8d612b3e63('Host') , port: port = $87a73fe4e23c61da$export$8206e8d612b3e63('Port')  } = {
})=>{
    const url = `${$87a73fe4e23c61da$export$8206e8d612b3e63('WS_PROTOCOL') + host}:${port}/${$87a73fe4e23c61da$export$8206e8d612b3e63('WS_SVC_PATH')}/`;
    return url + command;
};
const $87a73fe4e23c61da$export$1974eb46f550e54f = (printer, result)=>{
    const { name: printerName  } = printer;
    $87a73fe4e23c61da$export$263afe08c0871a1.push(printer);
    $87a73fe4e23c61da$export$8fc0f0b380b613c2[printerName] = printer;
    result.push(printer);
    result.byIndex.push(printer);
    if (printerName.match(/^\d+$/)) console.error(`Printer name consisting of numbers only (${printerName}) will break proper array behavior. Consider using "byIndex" property for accessing elements by index reliably.`);
    if (printerName === 'length') console.error('Using "length" as printer name overrides Array.length property!');
    result[printerName] = printer;
};



const $b327b8d2b73d3bbc$var$window = {
};
const $b327b8d2b73d3bbc$export$d3d0fd7db52b9fa3 = (msg, { key: key = 'general.log' , level: level = 'log'  } = {
})=>{
    if ($87a73fe4e23c61da$export$8206e8d612b3e63('dymo.label.framework.trace')) {
        if ($b327b8d2b73d3bbc$var$window.console && $b327b8d2b73d3bbc$var$window.console.log) console[level](key, msg);
    }
};








/**
 Create printer collection
 @private
 @return {Array}
 */ const $e9a3303efdb223e1$var$createPrintersCollection = ()=>{
    const result = [];
    result.byIndex = [];
    Object.defineProperty(result, 'byIndex', {
        enumerable: false,
        value: []
    });
    return result;
};
var $e9a3303efdb223e1$export$2e2bcd8739ae039 = $e9a3303efdb223e1$var$createPrintersCollection;







const $c7e2149312647974$var$xml = {
};
const $c7e2149312647974$export$ddc9d26d0b3d592d = (xmlData)=>{
    let newJson;
    $02FXs$xml2js.parseString(xmlData, function(err, results) {
        // parsing to json
        newJson = JSON.stringify(results);
    }, undefined);
    return newJson;
};
/**
 @param {string} text
 @return {Document}
 */ $c7e2149312647974$var$xml.parse = function(text) {
    const parser = new $02FXs$xmldomxmldom.DOMParser();
    return parser.parseFromString(text, 'application/xml');
};
/**
 * Serializes an XML document or subtree to string.
 * @param {Document|Element} node The document or the root node of the subtree.
 * @return {string} The serialized XML.
 */ $c7e2149312647974$var$xml.serialize = function(node1) {
    function fix(node) {
        try {
            return node.replaceAll(/<Color (.+)\/>/g, '<Color $1> </Color>');
        } catch (e) {
        }
        return node;
    }
    const test = new $02FXs$xmldomxmldom.XMLSerializer().serializeToString(node1);
    console.log({
        test: test
    });
    return fix(test);
};
const $c7e2149312647974$export$9e49107c32070c1a = $c7e2149312647974$var$xml.serialize;
// appends a new element to DOM tree as child of parent and set it content to text
// parent - parent Element
// tagName - the element's tagName
// text - the element's content
// attributes - tag attibutes, specified as an associative-array
// returns - new added element
/**
 @param {*} parentElement
 @param {string} tagName
 @param {string=} text
 @param {*=} attributes
 */ $c7e2149312647974$var$xml.appendElement = function(parentElement, tagName, text, attributes) {
    const result = parentElement.ownerDocument.createElement(tagName);
    if (text) result.appendChild(parentElement.ownerDocument.createTextNode(text));
    if (attributes) for(const a in attributes)result.setAttribute(a, attributes[a]);
    parentElement.appendChild(result);
    return result;
};
// returns text content of the element, e.g. for tag <Name>address123</Name>, 'address123' will be returned
/**
 */ $c7e2149312647974$var$xml.getElementText = function(elem, defaultValue = '') {
    if (!elem) return defaultValue;
    let result = '';
    for(let i = 0; i < elem.childNodes.length; i++)if (elem.childNodes[i].nodeType == 3) // TEXT_NODE
    result += elem.childNodes[i].data;
    return result;
};
// returns child element of parent with tag name "elemName"
$c7e2149312647974$var$xml.getElement = function(parent, elemName) {
    const children = parent.getElementsByTagName(elemName);
    if (children.length > 0) return children[0];
    return undefined;
};
// returns all children elements of parent with tag name "elemName"
$c7e2149312647974$var$xml.getElements = function(parent, elemName) {
    return parent.getElementsByTagName(elemName);
};
/**
 * set text content of the elem. Note: all other children of the element will be deleted
 * @param element element to set text
 * @param text string to set
 */ $c7e2149312647974$var$xml.setElementText = function(element, text) {
    // first, remove all children...
    $c7e2149312647974$var$xml.removeAllChildren(element);
    // ...then add text
    element.appendChild(element.ownerDocument.createTextNode(text));
};
// removes all children nodes of the specified node
$c7e2149312647974$var$xml.removeAllChildren = function(node) {
    while(node.firstChild)node.removeChild(node.firstChild);
};
$c7e2149312647974$var$xml.xmlToJson = $c7e2149312647974$export$ddc9d26d0b3d592d;
const $c7e2149312647974$export$dacdacba7f766aa8 = async (json)=>{
    return new Promise((resolve)=>{
        let convert;
        convert = $02FXs$xmljs.xml2json(json, {
            compact: true
        });
        resolve(convert);
    });
};
var $c7e2149312647974$export$2e2bcd8739ae039 = $c7e2149312647974$var$xml;



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
 */ /**
 @public
 @constructor
 @param {string} printerType
 @param {string} name
 @param {string} modelName
 @param {boolean} isConnected
 @param {boolean} isLocal
 */ const $730e2c8499c69cff$var$PrinterInfo = function(printerType, name, modelName, isConnected, isLocal) {
    this.printerType = printerType;
    this.name = name;
    this.modelName = modelName;
    this.isConnected = isConnected;
    this.isLocal = isLocal;
    /**
   internal field to store a printer uri as "network/mobile/remote" printer, e.g. uri for DYMO Label lProxy service
   @public
   @type {string}
   */ this.printerUri = '';
    /**
   internal field to store an original printer name as got from network printer
   @public
   @type {string}
   */ this.originalPrinterName = '';
};
/** Determines is the printer local or network
 Local means installed as a Printer on the Desktop machine
 where javascript is executing, e.g. it is a printer available as 'printer' on Windows machine
 'Network' means a printer installed on a 'proxy' machine or a real network printer (in the future)

 @return {boolean}
 */ $730e2c8499c69cff$var$PrinterInfo.prototype.isNetworkPrinter = function() {
    return this.printerUri != '';
};
var $730e2c8499c69cff$export$2e2bcd8739ae039 = $730e2c8499c69cff$var$PrinterInfo;


/**
 @public
 @constructor
 @extends {PrinterInfo}
 @param {string} name
 @param {string} modelName
 @param {boolean} isConnected
 @param {boolean} isLocal
 @param {boolean} isTwinTurbo
 */ const $180af6f8d627d8c4$var$LabelWriterPrinterInfo = function(name, modelName, isConnected, isLocal, isTwinTurbo) {
    $730e2c8499c69cff$export$2e2bcd8739ae039.call(this, 'LabelWriterPrinter', name, modelName, isConnected, isLocal);
    this.isTwinTurbo = isTwinTurbo;
};
var $180af6f8d627d8c4$export$2e2bcd8739ae039 = $180af6f8d627d8c4$var$LabelWriterPrinterInfo;






/*
 * Generate a RFC4122(v4) UUID
 *
 * based on https://github.com/broofa/node-uuid
 */ /**
 @public
 @return {string}
 */ const $762530daf0de5182$var$uuid = function() {
    // Use node.js Buffer class if available, otherwise use the Array class
    const BufferClass = Array;
    // Buffer used for generating string uuids
    const _buf = new BufferClass(16);
    // Cache number <-> hex string for octet values
    const toString = [];
    const toNumber = {
    };
    for(let i = 0; i < 256; i++){
        toString[i] = (i + 256).toString(16).substr(1).toUpperCase();
        toNumber[toString[i]] = i;
    }
    function parse(s) {
        const buf = new BufferClass(16);
        let i = 0;
        const ton = toNumber;
        s.toUpperCase().replace(/[0-9A-F][0-9A-F]/g, function(octet) {
            buf[i++] = toNumber[octet];
        });
        return buf;
    }
    function unparse(buf) {
        const tos = toString;
        const b = buf;
        return `${tos[b[0]] + tos[b[1]] + tos[b[2]] + tos[b[3]]}-${tos[b[4]]}${tos[b[5]]}-${tos[b[6]]}${tos[b[7]]}-${tos[b[8]]}${tos[b[9]]}-${tos[b[10]]}${tos[b[11]]}${tos[b[12]]}${tos[b[13]]}${tos[b[14]]}${tos[b[15]]}`;
    }
    function uuid(fmt, buf, offset) {
        const b32 = 4294967296;
        const ff = 255;
        const b = fmt != 'binary' ? _buf : buf || new BufferClass(16);
        let i = buf && offset || 0;
        let r = Math.random() * b32;
        b[i++] = r & ff;
        b[i++] = (r >>>= 8) & ff;
        b[i++] = (r >>>= 8) & ff;
        b[i++] = (r >>>= 8) & ff;
        r = Math.random() * b32;
        b[i++] = r & ff;
        b[i++] = (r >>>= 8) & ff;
        b[i++] = (r >>>= 8) & 15 | 64; // See RFC4122 sect. 4.1.3
        b[i++] = (r >>>= 8) & ff;
        r = Math.random() * b32;
        b[i++] = r & 63 | 128; // See RFC4122 sect. 4.4
        b[i++] = (r >>>= 8) & ff;
        b[i++] = (r >>>= 8) & ff;
        b[i++] = (r >>>= 8) & ff;
        r = Math.random() * b32;
        b[i++] = r & ff;
        b[i++] = (r >>>= 8) & ff;
        b[i++] = (r >>>= 8) & ff;
        b[i++] = (r >>>= 8) & ff;
        return fmt === undefined ? unparse(b) : b;
    }
    uuid.parse = parse;
    uuid.unparse = unparse;
    uuid.BufferClass = BufferClass;
    return uuid.toString();
};
var $762530daf0de5182$export$2e2bcd8739ae039 = $762530daf0de5182$var$uuid;


function $d5ef754421ca3e16$var$printLabelToNetworkPrinter(printerInfo, printParamsXml, labelXml, labelSetXml) {
    // send print data
    const jobId = $762530daf0de5182$export$2e2bcd8739ae039();
    // use jsonp and pl verb
    // create payload
    const payload = {
        printerName: printerInfo.originalPrinterName,
        labelXml: labelXml,
        printParamsXml: printParamsXml,
        labelSetXml: labelSetXml
    };
    const uri = goog.Uri.resolve(printerInfo.printerUri, 'pl');
    const payloadJson = goog.json.serialize(payload);
    const CHUNK_SIZE = 4000;
    const LAST_CHUNK_ID = -1;
    const MAX_RETRY_COUNT = 10;
    const STATUS_ACK = 0;
    const STATUS_INVALID_CHUNK_ID = -5;
    const sendOneChunk = function(chunkId, retryCount) {
        const offset = chunkId * CHUNK_SIZE;
        let chunk = '';
        if (offset >= payloadJson.length) chunkId = LAST_CHUNK_ID;
        else chunk = payloadJson.substr(offset, CHUNK_SIZE);
        // send chunk
        const jsonp = new goog.net.Jsonp(uri, 'c');
        jsonp.send({
            j: jobId,
            cid: chunkId,
            pl: chunk
        }, function(printLabelResult) {
            // verify result
            const { status: status  } = printLabelResult;
            const logger = new goog.debug.Logger('dymo.label.framework');
            logger.setLevel(goog.debug.Logger.Level.INFO);
            if (status == STATUS_ACK) {
                // send next chunk if any
                if (chunkId != LAST_CHUNK_ID) sendOneChunk(++chunkId, 0);
                else logger.info(`Finished sending job payload for ${jobId}`);
            } else if (status == STATUS_INVALID_CHUNK_ID) {
                // send last accepted chunk
                if (retryCount < MAX_RETRY_COUNT) sendOneChunk(++printLabelResult.lastAckChunkId, ++retryCount);
                else logger.warning(`Unable to send print job data for "${jobId}": STATUS_INVALID_CHUNK_ID: Max retry count reached`);
            } else // send current chunk
            if (retryCount < MAX_RETRY_COUNT) sendOneChunk(chunkId, ++retryCount);
            else logger.warning(`Unable to send print job data for "${jobId}": Max retry count reached`);
        }, function() {
            const logger = new goog.debug.Logger('dymo.label.framework');
            logger.setLevel(goog.debug.Logger.Level.INFO);
            if (retryCount < MAX_RETRY_COUNT) sendOneChunk(chunkId, ++retryCount);
            else logger.warning(`Unable to send print job data for "${jobId}": error: Max retry count reached`);
        });
    };
    sendOneChunk(0, 0);
    return new dymo.label.framework.PrintJob(printerInfo, jobId);
}
var $d5ef754421ca3e16$export$2e2bcd8739ae039 = $d5ef754421ca3e16$var$printLabelToNetworkPrinter;


const $9643c783b3f6d52e$export$24b501728b598e90 = function(printerName, printParamsXml, labelXml, labelSetXml) {
    printParamsXml = printParamsXml || '';
    labelSetXml = labelSetXml || '';
    if (typeof labelSetXml !== 'string') labelSetXml = labelSetXml.toString();
    if (typeof labelXml === 'undefined') throw new Error('printLabelAsync(): labelXml parameter should be specified');
    if (typeof labelXml !== 'string') labelXml = labelXml.toString();
    return getPrintersAsync().then(function(printers) {
        const printerInfo = printers[printerName];
        if (!$02FXs$lodash.isNil(printerInfo)) {
            if ($87a73fe4e23c61da$export$8206e8d612b3e63('ASSUME_MOBILE') || printerInfo.isNetworkPrinter()) return $d5ef754421ca3e16$export$2e2bcd8739ae039(printerInfo, printParamsXml, labelXml, labelSetXml);
            return _createFramework().printLabelAsync(printerInfo.name, printParamsXml, labelXml, labelSetXml);
        }
        throw new Error(`printLabelAsync(): unknown printer '${printerName}'`);
    });
};
var $9643c783b3f6d52e$export$2e2bcd8739ae039 = $9643c783b3f6d52e$export$24b501728b598e90;



// TODO :: complete
/** Specifies when to draw Intelligent-Mail barcode for address object
 // AboveAddress - print barcode above the address
 // BelowAddress - print barcode below the address
 // Suppress - don't print barcode as all
 @enum {string}
 @export
 */ const $47261f1d7d3d2ea1$var$AddressBarcodePosition = {
};
/** @export */ $47261f1d7d3d2ea1$var$AddressBarcodePosition.AboveAddress = 'AboveAddress';
/** @export */ $47261f1d7d3d2ea1$var$AddressBarcodePosition.BelowAddress = 'BelowAddress';
/** @export */ $47261f1d7d3d2ea1$var$AddressBarcodePosition.Suppress = 'Suppress';
var $47261f1d7d3d2ea1$export$2e2bcd8739ae039 = $47261f1d7d3d2ea1$var$AddressBarcodePosition;


/**
 @private
 @constructor
 @implements {ILabel}
 @param {string} labelXml
 */ const $9a9d7ad69b4a3113$var$Label = function(labelXml) {
    /**
   @private
   */ this._doc = $c7e2149312647974$export$2e2bcd8739ae039.parse(labelXml);
};
/**
 @inheritDoc
 */ $9a9d7ad69b4a3113$var$Label.prototype.getLabelXml = function() {
    return $c7e2149312647974$export$2e2bcd8739ae039.serialize(this._doc);
};
/**
 @inheritDoc
 */ $9a9d7ad69b4a3113$var$Label.prototype.render = function(renderParamsXml, printerName) {
    return $a13fffbe9c49229d$export$267567d6b695ed02(this.getLabelXml(), renderParamsXml, printerName);
};
/**
 @inheritDoc
 */ $9a9d7ad69b4a3113$var$Label.prototype.renderAsync = function(renderParamsXml, printerName) {
    return $a13fffbe9c49229d$export$43e68798adbb7714(this.getLabelXml(), renderParamsXml, printerName);
};
/**
 @inheritDoc
 */ $9a9d7ad69b4a3113$var$Label.prototype.print = function(printerName, printParamsXml, labelSetXml) {
    $a13fffbe9c49229d$export$ccbd759e619b4eca(printerName, printParamsXml, this.getLabelXml(), labelSetXml);
};
/**
 @inheritDoc
 */ $9a9d7ad69b4a3113$var$Label.prototype.printAsync = function(printerName, printParamsXml, labelSetXml) {
    // noinspection JSValidateTypes
    return $9643c783b3f6d52e$export$2e2bcd8739ae039(printerName, printParamsXml, this.getLabelXml(), labelSetXml);
};
// noinspection JSCheckFunctionSignatures
$9a9d7ad69b4a3113$var$Label.prototype.print2 = function(printerName, printParamsXml, labelSetXml) {
    return $7714de672b81ae87$export$2e2bcd8739ae039(printerName, printParamsXml, this.getLabelXml(), labelSetXml);
};
/**
 @inheritDoc
 */ $9a9d7ad69b4a3113$var$Label.prototype.print2Async = function(printerName, printParamsXml, labelSetXml) {
    return $7714de672b81ae87$export$97e3957b1a89df4e(printerName, printParamsXml, this.getLabelXml(), labelSetXml);
};
/**
 @inheritDoc
 */ $9a9d7ad69b4a3113$var$Label.prototype.printAndPollStatus = function(printerName, printParamsXml, labelSetXml, statusCallback, pollInterval) {
    return $a13fffbe9c49229d$export$4af992dd41507952(printerName, printParamsXml, this.getLabelXml(), labelSetXml, statusCallback, pollInterval);
};
/**
 @inheritDoc
 */ $9a9d7ad69b4a3113$var$Label.prototype.printAndPollStatusAsync = function(printerName, printParamsXml, labelSetXml, statusCallback, pollInterval) {
    return $a13fffbe9c49229d$export$e725559191faa8fe(printerName, printParamsXml, this.getLabelXml(), labelSetXml, statusCallback, pollInterval);
};
const $9a9d7ad69b4a3113$var$_allObjectTypes = [
    'AddressObject',
    'TextObject',
    'BarcodeObject',
    'ShapeObject',
    'CounterObject',
    'ImageObject',
    'CircularTextObject',
    'DateTimeObject',
    'QRCodeObject', 
];
/** returns all object elements on the label
 @private
 @param {Array.<string>=} opt_objectTypes optional array of object types to look for
 @return {(NodeList,Array.<Node>)}
 */ $9a9d7ad69b4a3113$var$Label.prototype._getObjectElements = function(opt_objectTypes) {
    const objectTypes = opt_objectTypes || $9a9d7ad69b4a3113$var$_allObjectTypes;
    // return xml.getNodes(this._doc.documentElement, "//" + objectTypes.join("|//"));
    // let dh = new goog.dom.DomHelper(this._doc);
    // goog.array.reduce(objectTypes,
    return goog.dom.findNodes(this._doc.documentElement, function(n) {
        return n.nodeType == goog.dom.NodeType.ELEMENT && goog.array.indexOf(objectTypes, n.tagName) >= 0;
    });
};
/**
 @inheritDoc
 @return {Array.<string>}
 */ $9a9d7ad69b4a3113$var$Label.prototype.getObjectNames = function() {
    const objects = this._getObjectElements();
    const result = [];
    for(let i = 0; i < objects.length; i++)// result.push(xml.getElementText(xml.getNode(objects[i], "Name")));
    result.push($c7e2149312647974$export$2e2bcd8739ae039.getElementText($c7e2149312647974$export$2e2bcd8739ae039.getElement(objects[i], 'Name')));
    return result;
};
/**
 returns all AddressObject elements
 @private
 @return {(NodeList,Array.<Node>)}
 */ $9a9d7ad69b4a3113$var$Label.prototype._getAddressObjectElements = function() {
    // return xml.getNodes(this._doc, "//AddressObject");
    return this._getObjectElements([
        'AddressObject'
    ]);
};
/**
 @inheritDoc
 */ $9a9d7ad69b4a3113$var$Label.prototype.getAddressObjectCount = function() {
    return this._getAddressObjectElements().length;
};
/**
 returns address object element by index
 @param {number} addressIndex
 @return {Element}
 @private
 */ $9a9d7ad69b4a3113$var$Label.prototype._getAddressObjectElementByIndex = function(addressIndex) {
    return this._getAddressObjectElements()[addressIndex];
// TODO: add manual index checking ???
//            let addressElements = _getAddressObjectElements();
//            if (addressIndex < 0 || addressIndex >= addressElements.length)
//                throw new Error("getAddressBarcodePosition(): index out of bounds");
//            let elem = addressElements[addressIndex];
};
/**
 @inheritDoc
 */ $9a9d7ad69b4a3113$var$Label.prototype.getAddressBarcodePosition = function(addressIndex) {
    if (!this.isDCDLabel()) return $c7e2149312647974$export$2e2bcd8739ae039.getElementText($c7e2149312647974$export$2e2bcd8739ae039.getElement(this._getAddressObjectElementByIndex(addressIndex), 'BarcodePosition'));
    return '';
};
/** check the value of passed barcodePosition string to be a valid position value
 // TODO: create universal _verifyEnum() (using for/in); check all values for all defined enums
 // TODO: check other values as well ???

 @private
 @param {string} barcodePosition
 @return {undefined}
 */ $9a9d7ad69b4a3113$var$Label.prototype._verifyAddressBarcodePosition = function(barcodePosition) {
    if (barcodePosition == $47261f1d7d3d2ea1$export$2e2bcd8739ae039.AboveAddress || barcodePosition == $47261f1d7d3d2ea1$export$2e2bcd8739ae039.BelowAddress || barcodePosition == $47261f1d7d3d2ea1$export$2e2bcd8739ae039.Suppress) return;
    throw new Error(`verifyAddressBarcodePosition(): barcode position '${barcodePosition}' is invalid value`);
};
/**
 @inheritDoc
 */ $9a9d7ad69b4a3113$var$Label.prototype.setAddressBarcodePosition = function(addressIndex, barcodePosition) {
    if (!this.isDCDLabel()) {
        this._verifyAddressBarcodePosition(barcodePosition);
        $c7e2149312647974$export$2e2bcd8739ae039.setElementText($c7e2149312647974$export$2e2bcd8739ae039.getElement(this._getAddressObjectElementByIndex(addressIndex), 'BarcodePosition'), barcodePosition);
    }
    return this;
};
/**
 @inheritDoc
 */ $9a9d7ad69b4a3113$var$Label.prototype.getAddressText = function(addressIndex) {
    return this._getAddressObjectText(this._getAddressObjectElementByIndex(addressIndex));
};
/**
 @inheritDoc
 */ $9a9d7ad69b4a3113$var$Label.prototype.setAddressText = function(addressIndex, text) {
    return this._setAddressObjectText(this._getAddressObjectElementByIndex(addressIndex), text);
};
/** returns xml Element of corresponded label object with name objectName
 @private
 @param {string} objectName
 @return {Element}
 */ $9a9d7ad69b4a3113$var$Label.prototype._getObjectByNameElement = function(objectName) {
    const objects = this._getObjectElements();
    // find object with name
    for(let i = 0; i < objects.length; i++){
        const elem = objects[i];
        const name = $c7e2149312647974$export$2e2bcd8739ae039.getElementText($c7e2149312647974$export$2e2bcd8739ae039.getElement(elem, 'Name'));
        if (name == objectName) return elem;
    }
    throw new Error(`getObjectByNameElement(): no object with name '${objectName}' was found`);
};
/** check if the current xml is a DYMO label
 // DYMO label or DieCutLabel

 @inheritDoc
 */ $9a9d7ad69b4a3113$var$Label.prototype.isDCDLabel = function() {
    let result = false;
    /** optionalProperty always contains an array or null
   * @type {string}
   */ const labelXML = this.getLabelXml();
    if (labelXML) result = labelXML.indexOf('</DYMO label>') !== -1;
    return result;
};
/** check if the current xml is a DYMO label
 // DYMO label or DieCutLabel

 @inheritDoc
 */ $9a9d7ad69b4a3113$var$Label.prototype.isDLSLabel = function() {
    let result = false;
    /** optionalProperty always contains an array or null
   * @type {string}
   */ const labelXML = this.getLabelXml();
    if (labelXML) result = labelXML.indexOf('</DieCutLabel>') !== -1 || labelXML.indexOf('</ContinuousLabel>') !== -1;
    return result;
};
/** check if the current xml is a valid label
 // DYMO label or DieCutLabel

 @inheritDoc
 */ $9a9d7ad69b4a3113$var$Label.prototype.isValidLabel = function() {
    return this.isDCDLabel() || this.isDLSLabel();
};
/** extracts text content of an Address object represented by xml element objectElem
 // the same function used to get Text object content

 @private
 @param {Element} objectElem
 */ $9a9d7ad69b4a3113$var$Label.prototype._getAddressObjectText = function(objectElem) {
    // let textElems = xml.getNodes(objectElem, "StyledText/Element/String//text()");
    // let result = "";
    // for (let i = 0; i < textElems.length; i++)
    //    result = result + textElems[i].data;
    // return result;
    let result = '';
    if (!this.isDCDLabel()) {
        const styledTextElem = $c7e2149312647974$export$2e2bcd8739ae039.getElement(objectElem, 'StyledText');
        const stringElems = $c7e2149312647974$export$2e2bcd8739ae039.getElements(styledTextElem, 'String');
        result = goog.array.reduce(stringElems, function(acc, v) {
            return acc + $c7e2149312647974$export$2e2bcd8739ae039.getElementText(v);
        }, '');
    } else {
        const FormattedText = $c7e2149312647974$export$2e2bcd8739ae039.getElement(objectElem, 'FormattedText');
        const LineTextSpans = $c7e2149312647974$export$2e2bcd8739ae039.getElements(FormattedText, 'LineTextSpan');
        for(let i = 0; i < LineTextSpans.length; i++){
            const Spans = $c7e2149312647974$export$2e2bcd8739ae039.getElements(LineTextSpans[i], 'TextSpan');
            for(let k = 0; k < Spans.length; k++){
                const text = $c7e2149312647974$export$2e2bcd8739ae039.getElement(Spans[k], 'Text');
                result += $c7e2149312647974$export$2e2bcd8739ae039.getElementText(text);
            }
        }
    }
    return result;
};
/** extracts text content of a Barcode object represented by xml element objectElem
 // the same function used to get Text object content

 @private
 @param {Element} objectElem
 */ $9a9d7ad69b4a3113$var$Label.prototype._getBarcodeObjectText = function(objectElem) {
    let result = '';
    const nodeName = this.isDCDLabel() ? 'Data' : 'Text';
    const nodeElem = $c7e2149312647974$export$2e2bcd8739ae039.getElement(objectElem, nodeName);
    if (nodeElem) result = $c7e2149312647974$export$2e2bcd8739ae039.getElementText(nodeElem);
    return result;
};
/** extracts text content of a QR code object represented by xml element objectElem
 // the same function used to get Text object content

 @private
 @param {Element} objectElem
 */ $9a9d7ad69b4a3113$var$Label.prototype._getQRcodeObjectText = function(objectElem) {
    let result = '';
    if (this.isDCDLabel()) {
        const nodeElem = $c7e2149312647974$export$2e2bcd8739ae039.getElement(objectElem, 'Data');
        if (nodeElem) {
            const dataString = $c7e2149312647974$export$2e2bcd8739ae039.getElement(nodeElem, 'DataString');
            result = $c7e2149312647974$export$2e2bcd8739ae039.getElementText(dataString);
        }
    }
    return result;
};
/** extracts text content of an Image object represented by xml element objectElem
 // if image is embedded return it (base64 png stream)

 @private
 @param {Element} objectElem
 */ $9a9d7ad69b4a3113$var$Label.prototype._getImageObjectText = function(objectElem) {
    let result = '';
    const nodeName = this.isDCDLabel() ? 'Data' : 'Image';
    const nodeElem = $c7e2149312647974$export$2e2bcd8739ae039.getElement(objectElem, nodeName);
    if (nodeElem) result = $c7e2149312647974$export$2e2bcd8739ae039.getElementText(nodeElem);
    return result;
};
/** extracts text content of an DateTIme object represented by xml element objectElem
 // the same function used to get Text object content

 @private
 @param {Element} objectElem
 */ $9a9d7ad69b4a3113$var$Label.prototype._getDateTimeCounterObjectText = function(objectElem) {
    let result = '';
    if (!this.isDCDLabel()) result = $c7e2149312647974$export$2e2bcd8739ae039.getElementText($c7e2149312647974$export$2e2bcd8739ae039.getElement(objectElem, 'PreText'));
    else {
        const FormattedText = $c7e2149312647974$export$2e2bcd8739ae039.getElement(objectElem, 'FormattedText');
        const LineTextSpans = $c7e2149312647974$export$2e2bcd8739ae039.getElements(FormattedText, 'LineTextSpan');
        if (LineTextSpans) {
            const Spans = $c7e2149312647974$export$2e2bcd8739ae039.getElements(LineTextSpans[0], 'TextSpan');
            const text = $c7e2149312647974$export$2e2bcd8739ae039.getElement(Spans[0], 'Text');
            result += $c7e2149312647974$export$2e2bcd8739ae039.getElementText(text);
        }
    }
    return result;
};
/**
 @inheritDoc
 */ $9a9d7ad69b4a3113$var$Label.prototype.getObjectText = function(objectName) {
    const objectElem = this._getObjectByNameElement(objectName);
    const objectType = objectElem.tagName;
    let result = '';
    switch(objectType){
        case 'AddressObject':
        case 'TextObject':
            result = this._getAddressObjectText(objectElem);
            break;
        case 'BarcodeObject':
            // TODO: Implement method to get barcode text
            result = this._getBarcodeObjectText(objectElem); // xml.getElementText(xml.getElement(objectElem, "Text"));
            break;
        case 'ImageObject':
            // if image is embedded return it (base64 png stream)
            result = this._getImageObjectText(objectElem);
            break;
        case 'CircularTextObject':
            result = this.isDCDLabel() ? this._getAddressObjectText(objectElem) : $c7e2149312647974$export$2e2bcd8739ae039.getElementText($c7e2149312647974$export$2e2bcd8739ae039.getElement(objectElem, 'Text'));
            break;
        case 'QRCodeObject':
            result = this._getQRcodeObjectText(objectElem);
            break;
        case 'DateTimeObject':
        case 'CounterObject':
            // TODO: probably we want to reimplement objects' behaviour and return
            // full text as rendered on a label
            result = this._getDateTimeCounterObjectText(objectElem);
            break;
    }
    return result; // default
};
/** returns line-by-line attributes (as xml Element) of the StyledText
 @private
 @param {Node} styledTextElem
 @return {Array.<Element>}
 */ $9a9d7ad69b4a3113$var$Label.prototype._getStyledTextLineAttributes = function(styledTextElem) {
    const result = [];
    const elems = $c7e2149312647974$export$2e2bcd8739ae039.getElements(styledTextElem, 'Element');
    let isNewLine = true;
    for(let i = 0; i < elems.length; i++){
        const elem = elems[i];
        const str = $c7e2149312647974$export$2e2bcd8739ae039.getElementText($c7e2149312647974$export$2e2bcd8739ae039.getElement(elem, 'String'));
        if (!str || !str.length) continue;
        const lines = str.split('\n');
        const linesCount = lines.length;
        // no line separator in the middle of the line - ignore
        if (linesCount == 1 && !isNewLine) continue;
        // if (i > 0)
        //    linesCount--; // don't count the 'first' line of second, and further element because it is a continuation of the line of the previous element
        let l = 0;
        if (!isNewLine) l = 1;
        const attributesElem = $c7e2149312647974$export$2e2bcd8739ae039.getElement(elem, 'Attributes');
        for(; l < linesCount - 1; l++)result.push(attributesElem);
        // if the last line is not empty - add it as well
        if (lines[linesCount - 1].length > 0) {
            result.push(attributesElem);
            isNewLine = false;
        } else isNewLine = true;
    }
    return result;
};
/*
Label.prototype._getStyledTextLineAttributes = function(styledTextElem)
{
    let result = new Array();
    let elems = xml.getElements(styledTextElem, "Element");
    for (let i = 0; i < elems.length; i++)
    {
        let elem = elems[i];
        let lines = xml.getElementText(xml.getElement(elem, "String")).split("\n");

        let linesCount = lines.length;
        if (i > 0)
            linesCount--; // don't count the 'first' line of second, and further element because it is a continuation of the line of the previous element

        let attributesElem = xml.getElement(elem, "Attributes");
        for (let l = 0; l < linesCount; l++)
            result.push(attributesElem);
    }

    return result;
}
*/ /** sets content for an Address object
 // Parameters:
 //      objectElem - Element corresponded to the address object
 //      text - plain text string of the address data
 // Note: text formatting is applied on line-by-line basis using object's <LineFonts> list

 @private
 @param {Element} objectElem
 @param {string} text
 @return {Label}
 */ $9a9d7ad69b4a3113$var$Label.prototype._setAddressObjectText = function(objectElem, text) {
    if (!this.isDCDLabel()) {
        // get <StyledText>
        const styledTextElem = $c7e2149312647974$export$2e2bcd8739ae039.getElement(objectElem, 'StyledText');
        const attributes = this._getStyledTextLineAttributes(styledTextElem);
        // let lineFonts = xml.getNodes(objectElem, "LineFonts/Font");
        const lineFontsElem = $c7e2149312647974$export$2e2bcd8739ae039.getElement(objectElem, 'LineFonts');
        let lineFonts = [];
        if (lineFontsElem) lineFonts = $c7e2149312647974$export$2e2bcd8739ae039.getElements(lineFontsElem, 'Font');
        let defaultFont;
        if (lineFonts.length == 0) defaultFont = $c7e2149312647974$export$2e2bcd8739ae039.parse('<Font Family="Arial" Size="12" Bold="False" Italic="False" Underline="False" Strikeout="False" />').documentElement;
        const defaultColor = $c7e2149312647974$export$2e2bcd8739ae039.parse('<ForeColor Alpha="255" Red="0" Green="0" Blue="0" />').documentElement;
        // clear all text
        $c7e2149312647974$export$2e2bcd8739ae039.removeAllChildren(styledTextElem);
        const lines = text.split('\n');
        for(let i = 0; i < lines.length; i++){
            let line = lines[i].replace('\r', '');
            if (i < lines.length - 1) line += '\n';
            // use font from lineFonts or the last font.
            // If there is no lineFonts, try to use font from current styled text
            let font = defaultFont;
            if (lineFonts.length > 0) {
                if (i < lineFonts.length) font = lineFonts[i];
                else font = lineFonts[lineFonts.length - 1];
            } else if (attributes.length > 0) {
                if (i < attributes.length) font = $c7e2149312647974$export$2e2bcd8739ae039.getElement(attributes[i], 'Font');
                else font = $c7e2149312647974$export$2e2bcd8739ae039.getElement(attributes[attributes.length - 1], 'Font');
            }
            // font color
            let fontColor = defaultColor;
            // alert(Xml.serialize(fontColor));
            if (i < attributes.length) fontColor = $c7e2149312647974$export$2e2bcd8739ae039.getElement(attributes[i], 'ForeColor');
            // alert(Xml.serialize(fontColor));
            // create styledText element for the line
            const elemElem = styledTextElem.ownerDocument.createElement('Element');
            const stringElem = styledTextElem.ownerDocument.createElement('String');
            $c7e2149312647974$export$2e2bcd8739ae039.setElementText(stringElem, line);
            const attributesElem = styledTextElem.ownerDocument.createElement('Attributes');
            attributesElem.appendChild(font.cloneNode(true));
            attributesElem.appendChild(fontColor.cloneNode(true));
            elemElem.appendChild(stringElem);
            elemElem.appendChild(attributesElem);
            styledTextElem.appendChild(elemElem);
        }
    // alert(Xml.serialize(styledTextElem));
    } else {
        const FormattedText = $c7e2149312647974$export$2e2bcd8739ae039.getElement(objectElem, 'FormattedText');
        const LineTextSpans = $c7e2149312647974$export$2e2bcd8739ae039.getElements(FormattedText, 'LineTextSpan');
        if (LineTextSpans) {
            const Spans = $c7e2149312647974$export$2e2bcd8739ae039.getElements(LineTextSpans[0], 'TextSpan');
            if (Spans) {
                const textElem = $c7e2149312647974$export$2e2bcd8739ae039.getElement(Spans[0], 'Text');
                $c7e2149312647974$export$2e2bcd8739ae039.setElementText(textElem, text);
            }
        }
    }
    return this;
};
/** sets content for an QRCode object
 // Parameters:
 //      objectElem - Element corresponded to the address object
 //      text - plain text string of the address data
 // Note: text formatting is applied on line-by-line basis using object's <LineFonts> list

 @private
 @param {Element} objectElem
 @param {string} text
 @return {Label}
 */ $9a9d7ad69b4a3113$var$Label.prototype._setQRCodeObjectText = function(objectElem, text) {
    if (this.isDCDLabel()) {
        const dataElem = $c7e2149312647974$export$2e2bcd8739ae039.getElement(objectElem, 'Data');
        if (dataElem) {
            const dataStringElem = $c7e2149312647974$export$2e2bcd8739ae039.getElement(dataElem, 'DataString');
            $c7e2149312647974$export$2e2bcd8739ae039.setElementText(dataStringElem, text);
        }
    }
    return this;
};
/** sets content for a Barcode object
 // Parameters:
 //      objectElem - Element corresponded to the address object
 //      text - plain text string of the address data
 // Note: text formatting is applied on line-by-line basis using object's <LineFonts> list

 @private
 @param {Element} objectElem
 @param {string} text
 @return {Label}
 */ $9a9d7ad69b4a3113$var$Label.prototype._setBarcodeObjectText = function(objectElem, text) {
    const nodeName = this.isDCDLabel() ? 'Data' : 'Text';
    const nodeElem = $c7e2149312647974$export$2e2bcd8739ae039.getElement(objectElem, nodeName);
    if (nodeElem) $c7e2149312647974$export$2e2bcd8739ae039.setElementText(nodeElem, text);
    return this;
};
/** sets content for a Barcode object
 // Parameters:
 //      objectElem - Element corresponded to the address object
 //      text - plain text string of the address data
 // Note: text formatting is applied on line-by-line basis using object's <LineFonts> list

 @private
 @param {Element} objectElem
 @param {string} text
 @return {Label}
 */ $9a9d7ad69b4a3113$var$Label.prototype._setImageObjectText = function(objectElem, text) {
    if (!this.isDCDLabel()) {
        let imageElem = $c7e2149312647974$export$2e2bcd8739ae039.getElement(objectElem, 'Image');
        if (imageElem) $c7e2149312647974$export$2e2bcd8739ae039.setElementText(imageElem, text);
        else {
            // if there is no <Image> tag then there should be <ImageLocation>
            // so replace <ImageLocation> with <Image>
            const imageLocationElem = $c7e2149312647974$export$2e2bcd8739ae039.getElement(objectElem, 'ImageLocation');
            if (!imageLocationElem) throw new Error(`setObjectText(): <ImageLocation> is expected but not found: ${$c7e2149312647974$export$2e2bcd8739ae039.serialize(imageElem)}`);
            // create <Image> elem
            imageElem = imageLocationElem.ownerDocument.createElement('Image');
            $c7e2149312647974$export$2e2bcd8739ae039.setElementText(imageElem, text);
            objectElem.replaceChild(imageElem, imageLocationElem);
        }
    } else {
        const nodeElem = $c7e2149312647974$export$2e2bcd8739ae039.getElement(objectElem, 'Data');
        if (nodeElem) $c7e2149312647974$export$2e2bcd8739ae039.setElementText(nodeElem, text);
    }
    return this;
};
/** sets content for an DateTime or Counter object
 // Parameters:
 //      objectElem - Element corresponded to the address object
 //      text - plain text string of the address data
 // Note: text formatting is applied on line-by-line basis using object's <LineFonts> list

 @private
 @param {Element} objectElem
 @param {string} text
 @return {Label}
 */ $9a9d7ad69b4a3113$var$Label.prototype._setDateTimeCounterObjectText = function(objectElem, text) {
    if (!this.isDCDLabel()) $c7e2149312647974$export$2e2bcd8739ae039.setElementText($c7e2149312647974$export$2e2bcd8739ae039.getElement(objectElem, 'PreText'), text);
    else {
        const FormattedText = $c7e2149312647974$export$2e2bcd8739ae039.getElement(objectElem, 'FormattedText');
        const LineTextSpans = $c7e2149312647974$export$2e2bcd8739ae039.getElements(FormattedText, 'LineTextSpan');
        if (LineTextSpans) {
            const Spans = $c7e2149312647974$export$2e2bcd8739ae039.getElements(LineTextSpans[0], 'TextSpan');
            const textElem = $c7e2149312647974$export$2e2bcd8739ae039.getElement(Spans[0], 'Text');
            $c7e2149312647974$export$2e2bcd8739ae039.setElementText(textElem, text);
        }
    }
    return this;
};
/**
 @inheritDoc
 */ $9a9d7ad69b4a3113$var$Label.prototype.setObjectText = function(objectName, text) {
    const objectElem = this._getObjectByNameElement(objectName);
    const objectType = objectElem.tagName;
    switch(objectType){
        case 'AddressObject':
            this._setAddressObjectText(objectElem, text);
            break;
        case 'TextObject':
            this._setAddressObjectText(objectElem, text);
            break;
        case 'QRCodeObject':
            this._setQRCodeObjectText(objectElem, text);
            break;
        case 'BarcodeObject':
            this._setBarcodeObjectText(objectElem, text);
            break;
        case 'ImageObject':
            this._setImageObjectText(objectElem, text);
            break;
        case 'CircularTextObject':
            this.isDCDLabel() ? this._setAddressObjectText(objectElem, text) : $c7e2149312647974$export$2e2bcd8739ae039.setElementText($c7e2149312647974$export$2e2bcd8739ae039.getElement(objectElem, 'Text'), text);
            break;
        case 'DateTimeObject':
        case 'CounterObject':
            this._setDateTimeCounterObjectText(objectElem, text);
            break;
    }
    return this;
};
/**
 @inheritDoc
 */ $9a9d7ad69b4a3113$var$Label.prototype.setLabelLength = function(newLength) {
    const labelElm = this._doc.documentElement;
    if (labelElm.nodeName != 'ContinuousLabel') throw new Error('Cannot set length on non-continuous label.');
    const lengthMode = newLength == 0 ? 'Auto' : 'Fixed';
    const lengthValue = newLength == 0 ? 7200 : newLength;
    $c7e2149312647974$export$2e2bcd8739ae039.setElementText($c7e2149312647974$export$2e2bcd8739ae039.getElement(labelElm, 'LengthMode'), lengthMode);
    $c7e2149312647974$export$2e2bcd8739ae039.setElementText($c7e2149312647974$export$2e2bcd8739ae039.getElement(labelElm, 'LabelLength'), lengthValue);
    const rootCellElm = $c7e2149312647974$export$2e2bcd8739ae039.getElement(labelElm, 'RootCell');
    $c7e2149312647974$export$2e2bcd8739ae039.setElementText($c7e2149312647974$export$2e2bcd8739ae039.getElement(rootCellElm, 'Length'), lengthValue);
    $c7e2149312647974$export$2e2bcd8739ae039.setElementText($c7e2149312647974$export$2e2bcd8739ae039.getElement(rootCellElm, 'LengthMode'), lengthMode);
    return this;
};
/**
 @override
 */ $9a9d7ad69b4a3113$var$Label.prototype.toString = function() {
    return this.getLabelXml();
};
var $9a9d7ad69b4a3113$export$2e2bcd8739ae039 = $9a9d7ad69b4a3113$var$Label;







/**
 @public
 @constructor
 @extends {PrinterInfo}
 @param {string} name
 @param {string} modelName
 @param {boolean} isConnected
 @param {boolean} isLocal
 @param {boolean} isAutoCutSupported
 */ const $2ce209adcfae9472$var$TapePrinterInfo = function(name, modelName, isConnected, isLocal, isAutoCutSupported) {
    $730e2c8499c69cff$export$2e2bcd8739ae039.call(this, 'TapePrinter', name, modelName, isConnected, isLocal);
    this.isAutoCutSupported = isAutoCutSupported;
};
var $2ce209adcfae9472$export$2e2bcd8739ae039 = $2ce209adcfae9472$var$TapePrinterInfo;



/**
 @public
 @constructor
 @extends {PrinterInfo}
 @param {string} name
 @param {string} modelName
 @param {boolean} isConnected
 @param {boolean} isLocal
 @param {boolean} isAutoCutSupported
 */ const $cd37e7dc69c02314$var$DZPrinterInfo = function(name, modelName, isConnected, isLocal, isAutoCutSupported) {
    $730e2c8499c69cff$export$2e2bcd8739ae039.call(this, 'DZPrinter', name, modelName, isConnected, isLocal);
    this.isAutoCutSupported = isAutoCutSupported;
};
var $cd37e7dc69c02314$export$2e2bcd8739ae039 = $cd37e7dc69c02314$var$DZPrinterInfo;






/**
 add network printers to printer collection
 @private
 @return {undefined}
 */ const $752399679cd603e5$var$addNetworkPrintersToCollection = (result)=>{
    // get network printers as well
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for(const printerUri in $87a73fe4e23c61da$export$263afe08c0871a1){
        const npi = $87a73fe4e23c61da$export$263afe08c0871a1[printerUri].getPrinters();
        // eslint-disable-next-line no-plusplus
        for(let j = 0; j < npi.length; ++j){
            const networkPrinter = npi[j];
            $87a73fe4e23c61da$export$1974eb46f550e54f(networkPrinter, result);
        }
    }
};
var $752399679cd603e5$export$2e2bcd8739ae039 = $752399679cd603e5$var$addNetworkPrintersToCollection;



/**
 @export
 */ const $b2288b9e1bea7c2c$var$getPrintersAsync = function() {
    if ($87a73fe4e23c61da$export$8206e8d612b3e63('ASSUME_MOBILE')) {
        const result = $e9a3303efdb223e1$export$2e2bcd8739ae039();
        $752399679cd603e5$export$2e2bcd8739ae039(result);
        return goog.Promise.resolve(result);
    }
    return $357bab5e353b9a9d$export$118613715be2faef().getPrintersAsync().then(function(printersXml) {
        // get 'local' printers, if we can
        try {
            const result = $a13fffbe9c49229d$export$6423f0b50c189a37(printersXml);
            $752399679cd603e5$export$2e2bcd8739ae039(result);
            return result;
        } catch (e) {
        }
        return null;
    });
};
var $b2288b9e1bea7c2c$export$2e2bcd8739ae039 = $b2288b9e1bea7c2c$var$getPrintersAsync;




const $1a7caefcd96a48d2$export$844ec244b1367d54 = (testString)=>{
    return typeof testString === 'string';
};
const $1a7caefcd96a48d2$export$bc22fd4c25654bb8 = (baseUri, path)=>{
    if (baseUri.endsWith('/')) baseUri = baseUri.substr(0, baseUri.length - 1);
    if (path.startsWith('/')) path = path.substr(1);
    return `${baseUri}/${path}`;
};


/** filters printers list by specified printer type
 @private
 @param {string} printerType
 @return {Array.<PrinterInfo>}
 */ function $a13fffbe9c49229d$var$getPrintersByType(printerType) {
    const result = [];
    /** optionalProperty always contains an array or null
   * @type {?Array}
   */ let printers = $b97309180d2fd587$export$2e2bcd8739ae039();
    printers = printers.byIndex // access array safely
    ;
    for(let i = 0; i < printers.length; i++){
        const printer = printers[i];
        if (!!printer.printerType && printer.printerType == printerType) result.push(printer);
    }
    return result;
}
const $a13fffbe9c49229d$export$ae6e590b577c8230 = function(printerUri, opt_location, opt_successCallback, opt_errorCallback) {
    // check location
    let location = opt_location || '';
    if (!$1a7caefcd96a48d2$export$844ec244b1367d54(location)) location = location.toString();
    const successCallback = function(printersXml) {
        const printerInfo = new NetworkPrinterInfo(printerUri, location, printersXml);
        _networkPrinters[printerUri] = printerInfo;
        if (opt_successCallback) opt_successCallback(printerUri);
    };
    let errorCallback = null;
    if (opt_errorCallback) errorCallback = function() {
        opt_errorCallback(printerUri);
    };
    const getPrintersUri = $1a7caefcd96a48d2$export$bc22fd4c25654bb8(printerUri, 'getPrinters');
// noinspection JSCheckFunctionSignatures
// TODO :: refactor this to remove goog
// const jsonp = new goog.net.Jsonp(getPrintersUri, 'callback')
// jsonp.send(null, successCallback, errorCallback)
};
const $a13fffbe9c49229d$export$bfc1ef122814c857 = function(printerUri) {
    delete _networkPrinters[printerUri];
// for (let i = _networkPrinters.length - 1; i >= 0; --i)
//    if (_networkPrinters[i].printerUri == printerUri)
//        _networkPrinters.remove(i);
};
const $a13fffbe9c49229d$export$9fdccdc1c7354f5b = function() {
    const _networkPrinters = {
    };
// for (let i = _networkPrinters.length - 1; i >= 0; --i)
//    if (_networkPrinters[i].printerUri == printerUri)
//        _networkPrinters.remove(i);
};
const $a13fffbe9c49229d$export$6423f0b50c189a37 = async (printersXml)=>{
    // TODO: update to use functions from Xml namespace
    // let getXmlText = function(elem) { return elem.firstChild.data; };
    // let getChildText = function(elem, child) { return getXmlText(elem.getElementsByTagName(child)[0]); };
    const getChildText = function(elem, child) {
        return $c7e2149312647974$export$2e2bcd8739ae039.getElementText($c7e2149312647974$export$2e2bcd8739ae039.getElement(elem, child));
    };
    const xmldoc = $c7e2149312647974$export$2e2bcd8739ae039.parse(printersXml);
    const result = $e9a3303efdb223e1$export$2e2bcd8739ae039();
    let i;
    let name;
    let modelName;
    let isConnected;
    let isLocal;
    let isTwinTurbo;
    let isAutoCutSupported;
    // TODO: update to use XPath
    // let printers = xmldoc.getElementsByTagName("Printers")[0];
    const printers = $c7e2149312647974$export$2e2bcd8739ae039.getElement(xmldoc, 'Printers');
    // let labelWriterPrinters = printers.getElementsByTagName("LabelWriterPrinter");
    const labelWriterPrinters = $c7e2149312647974$export$2e2bcd8739ae039.getElements(printers, 'LabelWriterPrinter');
    for(i = 0; i < labelWriterPrinters.length; i++){
        // let labelWriterPrinter = {};
        // labelWriterPrinter.printerType = "LabelWriterPrinter";
        name = getChildText(labelWriterPrinters[i], 'Name');
        modelName = getChildText(labelWriterPrinters[i], 'ModelName');
        isConnected = getChildText(labelWriterPrinters[i], 'IsConnected') == 'True';
        isLocal = getChildText(labelWriterPrinters[i], 'IsLocal') == 'True';
        isTwinTurbo = getChildText(labelWriterPrinters[i], 'IsTwinTurbo') == 'True';
        const labelWriterPrinterInfo = new $180af6f8d627d8c4$export$2e2bcd8739ae039(name, modelName, isConnected, isLocal, isTwinTurbo);
        $87a73fe4e23c61da$export$1974eb46f550e54f(labelWriterPrinterInfo, result);
    }
    const tapePrinters = $c7e2149312647974$export$2e2bcd8739ae039.getElements(printers, 'TapePrinter');
    for(i = 0; i < tapePrinters.length; i++){
        name = getChildText(tapePrinters[i], 'Name');
        modelName = getChildText(tapePrinters[i], 'ModelName');
        isConnected = getChildText(tapePrinters[i], 'IsConnected') == 'True';
        isLocal = getChildText(tapePrinters[i], 'IsLocal') == 'True';
        isAutoCutSupported = getChildText(tapePrinters[i], 'IsAutoCutSupported') == 'True';
        const tapePrinterInfo = new $2ce209adcfae9472$export$2e2bcd8739ae039(name, modelName, isConnected, isLocal, isAutoCutSupported);
        $87a73fe4e23c61da$export$1974eb46f550e54f(tapePrinterInfo, result);
    }
    // let dzPrinters = printers.getElementsByTagName("DZPrinter");
    const dzPrinters = $c7e2149312647974$export$2e2bcd8739ae039.getElements(printers, 'DZPrinter');
    for(i = 0; i < dzPrinters.length; i++){
        name = getChildText(dzPrinters[i], 'Name');
        modelName = getChildText(dzPrinters[i], 'ModelName');
        isConnected = getChildText(dzPrinters[i], 'IsConnected') == 'True';
        isLocal = getChildText(dzPrinters[i], 'IsLocal') == 'True';
        isAutoCutSupported = getChildText(dzPrinters[i], 'IsAutoCutSupported') == 'True';
        const dzPrinterInfo = new $cd37e7dc69c02314$export$2e2bcd8739ae039(name, modelName, isConnected, isLocal, isAutoCutSupported);
        $87a73fe4e23c61da$export$1974eb46f550e54f(dzPrinterInfo, result);
    }
    return result;
};
/** filters printers list by specified printer type
 @private
 @param {string} printerType
 @return {Array.<PrinterInfo>}
 */ function $a13fffbe9c49229d$var$getPrintersByTypeAsync(printerType) {
    return $b2288b9e1bea7c2c$export$2e2bcd8739ae039().then(function(printers) {
        const result = [];
        printers = printers.byIndex // access array safely
        ;
        for(let i = 0; i < printers.length; i++){
            const printer = printers[i];
            if (!!printer.printerType && printer.printerType == printerType) result.push(printer);
        }
        return result;
    });
}
const $a13fffbe9c49229d$export$96d68b3ba89bdb50 = ()=>{
    // noinspection JSValidateTypes
    return $a13fffbe9c49229d$var$getPrintersByType('LabelWriterPrinter');
};
const $a13fffbe9c49229d$export$d5eda92ccd3a0f6f = ()=>{
    // noinspection JSValidateTypes
    return $a13fffbe9c49229d$var$getPrintersByType('TapePrinter');
};
const $a13fffbe9c49229d$export$46c0dee94dd447fb = ()=>{
    // noinspection JSValidateTypes
    return $a13fffbe9c49229d$var$getPrintersByType('DZPrinter');
};
const $a13fffbe9c49229d$export$2980194aa631c114 = ()=>{
    // noinspection JSValidateTypes
    return $a13fffbe9c49229d$var$getPrintersByTypeAsync('LabelWriterPrinter');
};
const $a13fffbe9c49229d$export$432b51be97c24f75 = ()=>{
    // noinspection JSValidateTypes
    return $a13fffbe9c49229d$var$getPrintersByTypeAsync('TapePrinter');
};
const $a13fffbe9c49229d$export$e571da39ef1895fc = ()=>{
    // noinspection JSValidateTypes
    return $a13fffbe9c49229d$var$getPrintersByTypeAsync('DZPrinter');
};
const $a13fffbe9c49229d$export$27b1eef2de53a7ac = (fileName)=>{
    return new $9a9d7ad69b4a3113$export$2e2bcd8739ae039($357bab5e353b9a9d$export$118613715be2faef().openLabelFile(fileName));
};
const $a13fffbe9c49229d$export$b8d2324ece16dbb8 = (fileName)=>{
    return $357bab5e353b9a9d$export$118613715be2faef().openLabelFileAsync(fileName).then(function(labelXml) {
        return new $9a9d7ad69b4a3113$export$2e2bcd8739ae039(labelXml);
    });
};
const $a13fffbe9c49229d$export$eafb1c84f0319e13 = (labelXml)=>{
    $b327b8d2b73d3bbc$export$d3d0fd7db52b9fa3(labelXml, {
        key: 'dymo.label.framework'
    });
    return new $9a9d7ad69b4a3113$export$2e2bcd8739ae039(labelXml);
};
const $a13fffbe9c49229d$export$ccbd759e619b4eca = (printerName, printParamsXml, labelXml, labelSetXml)=>{
    printParamsXml = printParamsXml || '';
    labelSetXml = labelSetXml || '';
    if (typeof labelSetXml !== 'string') labelSetXml = labelSetXml.toString();
    if (typeof labelXml === 'undefined') throw new Error('printLabel(): labelXml parameter should be specified');
    if (typeof labelXml !== 'string') labelXml = labelXml.toString();
    const printers = $b97309180d2fd587$export$2e2bcd8739ae039();
    const printerInfo = printers[printerName];
    if (!$02FXs$lodash.isNil(printerInfo)) {
        // noinspection JSUnresolvedFunction
        if ($87a73fe4e23c61da$export$8206e8d612b3e63('ASSUME_MOBILE') || printerInfo.isNetworkPrinter()) $d5ef754421ca3e16$export$2e2bcd8739ae039(printerInfo, printParamsXml, labelXml, labelSetXml);
        else $357bab5e353b9a9d$export$118613715be2faef().printLabel(printerInfo.name, printParamsXml, labelXml, labelSetXml);
    }
    throw new Error(`printLabel(): unknown printer '${printerName}'`);
};
const $a13fffbe9c49229d$export$4af992dd41507952 = (printerName, printParamsXml, labelXml, labelSetXml, statusCallback, pollInterval)=>{
    const printJob = $7714de672b81ae87$export$2e2bcd8739ae039(printerName, printParamsXml, labelXml, labelSetXml);
    const statusChecker = async function(pjs) {
        // noinspection JSCheckFunctionSignatures
        const callbackResult = statusCallback(printJob, pjs);
        if (!callbackResult) return;
        // schedule more status checking
        await new Promise((resolve)=>{
            setTimeout(resolve, pollInterval);
        });
        printJob.getStatus(statusChecker);
    };
    printJob.getStatus(statusChecker);
    // noinspection JSValidateTypes
    return printJob;
};
const $a13fffbe9c49229d$export$e725559191faa8fe = (printerName, printParamsXml, labelXml, labelSetXml, statusCallback, pollInterval)=>{
    return $7714de672b81ae87$export$97e3957b1a89df4e(printerName, printParamsXml, labelXml, labelSetXml).then(function(printJob) {
        const statusChecker = async function(pjs) {
            const callbackResult = statusCallback(printJob, pjs);
            if (!callbackResult) return;
            // schedule more status checking
            await new Promise((resolve)=>{
                setTimeout(resolve, pollInterval);
            });
            printJob.getStatus(statusChecker);
        };
        printJob.getStatus(statusChecker);
        return printJob;
    });
};
const $a13fffbe9c49229d$export$267567d6b695ed02 = (labelXml, renderParamsXml, printerName)=>{
    if (typeof labelXml === 'undefined') throw new Error('renderLabel(): labelXml parameter should be specified');
    if (typeof labelXml !== 'string') labelXml = labelXml.toString();
    renderParamsXml = renderParamsXml || '';
    printerName = printerName || '';
    return $357bab5e353b9a9d$export$118613715be2faef().renderLabel(labelXml, renderParamsXml, printerName);
};
const $a13fffbe9c49229d$export$43e68798adbb7714 = (labelXml, renderParamsXml, printerName)=>{
    if (typeof labelXml === 'undefined') throw new Error('renderLabelAsync(): labelXml parameter should be specified');
    if (typeof labelXml !== 'string') labelXml = labelXml.toString();
    renderParamsXml = renderParamsXml || '';
    printerName = printerName || '';
    return $357bab5e353b9a9d$export$118613715be2faef().renderLabelAsync(labelXml, renderParamsXml, printerName);
};
const $a13fffbe9c49229d$export$2f64e4c25f8844b = (requestId, statusId, statusMessage, imageData)=>{
    const result = {
    };
    result.requestId = requestId;
    result.imageData = imageData;
    result.statusId = statusId;
    result.statusMessage = statusMessage;
    return result;
};
const $a13fffbe9c49229d$export$e5b7e32b410c36ba = (params)=>{
    if (!params) return '';
    const doc = $c7e2149312647974$export$2e2bcd8739ae039.parse('<TapePrintParams/>');
    const root = doc.documentElement;
    const { copies: copies = false , jobTitle: jobTitle = false , flowDirection: flowDirection = false , alignment: alignment = false , cutMode: cutMode = false ,  } = params || {
    };
    if (copies) $c7e2149312647974$export$2e2bcd8739ae039.appendElement(root, 'Copies', copies.toString());
    if (jobTitle) $c7e2149312647974$export$2e2bcd8739ae039.appendElement(root, 'JobTitle', jobTitle);
    if (flowDirection) $c7e2149312647974$export$2e2bcd8739ae039.appendElement(root, 'FlowDirection', flowDirection);
    if (alignment) $c7e2149312647974$export$2e2bcd8739ae039.appendElement(root, 'Alignment', alignment);
    if (cutMode) $c7e2149312647974$export$2e2bcd8739ae039.appendElement(root, 'CutMode', cutMode);
    return $c7e2149312647974$export$2e2bcd8739ae039.serialize(doc);
};



/**
 @export
 @return {Array.<dymo.label.framework.PrinterInfo>}
 */ const $b97309180d2fd587$var$getPrinters = async ()=>{
    let result = $e9a3303efdb223e1$export$2e2bcd8739ae039();
    if (!$87a73fe4e23c61da$export$8206e8d612b3e63('ASSUME_MOBILE')) // get 'local' printers, if we can
    try {
        const printersXml = await $357bab5e353b9a9d$export$118613715be2faef().getPrinters();
        result = $a13fffbe9c49229d$export$6423f0b50c189a37(printersXml);
    } catch (e) {
        console.log({
            e: e
        });
    }
    $752399679cd603e5$export$2e2bcd8739ae039(result);
    return result;
};
var $b97309180d2fd587$export$2e2bcd8739ae039 = $b97309180d2fd587$var$getPrinters;





/**
 @public
 @constructor
 @param {string} printerName
 @param {string} jobId
 @param {number} status
 @param {string} statusMessage
 */ const $af45e04149270ecf$var$PrintJobStatusInfo = function(printerName, jobId, status, statusMessage) {
    this.printerName = printerName;
    this.jobId = jobId;
    this.status = status;
    this.statusMessage = statusMessage;
};
/**
 Parses statusStr that contains status code abd status message separates by a space
 Returns an object with 'status' and 'statusMessage' properties
 @param {string} statusStr
 @return {{status: number, statusMessage: string}}
 */ $af45e04149270ecf$var$PrintJobStatusInfo.parse = function(statusStr) {
    const result = {
    };
    const a = statusStr.split(' ');
    if (a.length >= 1) result.status = parseInt(a[0], 10);
    result.statusMessage = a.slice(1).join(' ');
    return result;
};
var $af45e04149270ecf$export$2e2bcd8739ae039 = $af45e04149270ecf$var$PrintJobStatusInfo;


/** Specifies print job status
 @export
 */ const $fd3139ff3ad63450$var$PrintJobStatus = {
};
// real job status (when a job has been successfully created on the host machine / network printer)
/// Unknown/unexpected status, see statusMessage for more details
/** @export */ $fd3139ff3ad63450$var$PrintJobStatus.Unknown = 0;
/** @export */ $fd3139ff3ad63450$var$PrintJobStatus.Printing = 1;
/** @export */ $fd3139ff3ad63450$var$PrintJobStatus.Finished = 2;
/** @export */ $fd3139ff3ad63450$var$PrintJobStatus.Error = 3;
/** @export */ $fd3139ff3ad63450$var$PrintJobStatus.PaperOut = 4;
/** @export */ $fd3139ff3ad63450$var$PrintJobStatus.InQueue = 5;
// surrogate statuses
/** @export */ $fd3139ff3ad63450$var$PrintJobStatus.ProcessingError = -1;
/** @export */ $fd3139ff3ad63450$var$PrintJobStatus.PrinterBusy = -2;
/** @export */ $fd3139ff3ad63450$var$PrintJobStatus.InvalidJobId = -3;
/** @export */ $fd3139ff3ad63450$var$PrintJobStatus.NotSpooled = -4;
var $fd3139ff3ad63450$export$2e2bcd8739ae039 = $fd3139ff3ad63450$var$PrintJobStatus;


const $f6bbdda70da0550a$var$PrintJob = function(printerInfo, jobId) {
    /**
   @private
   */ this._printerInfo = printerInfo;
    /**
   @private
   */ this._jobId = jobId;
};
/**
 Gets printer name the print job has been created for
 @return {string}
 */ $f6bbdda70da0550a$var$PrintJob.prototype.getPrinterName = function() {
    return this._printerInfo.name;
};
/**
 Gets print job id
 @return {string}
 */ $f6bbdda70da0550a$var$PrintJob.prototype.getJobId = function() {
    return this._jobId;
};
/**
 Gets a status of the print job
 @public
 @param {function(PrintJobStatusInfo)} replyCallback a function call when the status is available
 @return {undefined}
 */ $f6bbdda70da0550a$var$PrintJob.prototype.getStatus = function(replyCallback) {
    if (!this._printerInfo.isNetworkPrinter()) {
        let statusInfo;
        try {
            statusInfo = $357bab5e353b9a9d$export$118613715be2faef().getJobStatus(this._printerInfo.name, this._jobId);
        } catch (e) {
            statusInfo = new $af45e04149270ecf$export$2e2bcd8739ae039(this.getPrinterName(), this._jobId, $fd3139ff3ad63450$export$2e2bcd8739ae039.ProcessingError, e.message || e);
        }
        replyCallback(statusInfo);
    } else this.getStatusForNetworkPrinter(replyCallback);
};
/**
 Gets a status of the print job
 @private
 @param {function(PrintJobStatusInfo)} replyCallback a function call when the status is available
 */ $f6bbdda70da0550a$var$PrintJob.prototype.getStatusForNetworkPrinter = function(replyCallback) {
    const printerName = this.getPrinterName();
    const jobId = this._jobId;
    // let networkPrinterName = splitNetworkPrinterName(printerName);
    // try to get data
    const { printerUri: printerUri  } = this._printerInfo;
    const jsonp2 = new goog.net.Jsonp(goog.Uri.resolve(printerUri, 'getPrintJobStatus'), 'callback');
    jsonp2.send({
        jobId: jobId,
        printerName: this._printerInfo.originalPrinterName
    }, function(pjs) {
        const jobStatusInfo = new $af45e04149270ecf$export$2e2bcd8739ae039(printerName, jobId, pjs.status, pjs.statusMessage);
        replyCallback(jobStatusInfo);
    }, function() {
        const jobStatusInfo = new $af45e04149270ecf$export$2e2bcd8739ae039(printerName, jobId, $fd3139ff3ad63450$export$2e2bcd8739ae039.ProcessingError, `Error processing getPrintJobStatus(): Unable to contact "${printerUri}"`);
        replyCallback(jobStatusInfo);
    });
};
var $f6bbdda70da0550a$export$2e2bcd8739ae039 = $f6bbdda70da0550a$var$PrintJob;




/** Prints a label and return a job id
 // printerName - the printer to print on. A list of printers can be obtained by getPrinters()
 // printParamsXml - printing parameters, like number of copies, print quality, etc. See PrintParams.xsd
 // labelXml - label to print
 // labelSetXml - LabelSet to print. LabelSet is used to print multiple labels with same layout but different data, e.g. multiple addresses.
 //               Use LabelSetBuilder to create a LabelSet or construct xml manualy according to LabelSet.xsd

 @param {string} printerName the printer to print on. A list of printers can be obtained by getPrinters()
 @param {string} printParamsXml printing parameters, like number of copies, print quality, etc. See PrintParams.xsd
 @param {string} labelXml label to print
 @param {string} labelSetXml
 LabelSet to print. LabelSet is used to print multiple labels with same layout but different data, e.g. multiple addresses.
 Use LabelSetBuilder to create a LabelSet or construct xml manualy according to LabelSet.xsd
 @return {PrintJob} print job
 @export
 */ const $7714de672b81ae87$var$printLabel2 = function(printerName, printParamsXml, labelXml, labelSetXml) {
    printParamsXml = printParamsXml || '';
    labelSetXml = labelSetXml || '';
    if (typeof labelSetXml !== 'string') labelSetXml = labelSetXml.toString();
    if (typeof labelXml === 'undefined') throw new Error('printLabel2(): labelXml parameter should be specified');
    if (typeof labelXml !== 'string') labelXml = labelXml.toString();
    const printers = $b97309180d2fd587$export$2e2bcd8739ae039();
    const printerInfo = printers[printerName];
    if (!$02FXs$lodash.isNil(printerInfo)) {
        if ($87a73fe4e23c61da$export$8206e8d612b3e63('ASSUME_MOBILE') || printerInfo.isNetworkPrinter()) return $d5ef754421ca3e16$export$2e2bcd8739ae039(printerInfo, printParamsXml, labelXml, labelSetXml);
        return new $f6bbdda70da0550a$export$2e2bcd8739ae039(printerInfo, $357bab5e353b9a9d$export$118613715be2faef().printLabel2(printerName, printParamsXml, labelXml, labelSetXml));
    }
    throw new Error(`printLabel(): unknown printer '${printerName}'`);
};
const $7714de672b81ae87$export$97e3957b1a89df4e = function(printerName, printParamsXml, labelXml, labelSetXml) {
    printParamsXml = printParamsXml || '';
    labelSetXml = labelSetXml || '';
    if (typeof labelSetXml !== 'string') labelSetXml = labelSetXml.toString();
    if (typeof labelXml === 'undefined') throw new Error('printLabel2Async(): labelXml parameter should be specified');
    if (typeof labelXml !== 'string') labelXml = labelXml.toString();
    return $b2288b9e1bea7c2c$export$2e2bcd8739ae039().then(function(printers) {
        const printerInfo = printers[printerName];
        if (!$02FXs$lodash.isNil(printerInfo)) {
            if ($87a73fe4e23c61da$export$8206e8d612b3e63('ASSUME_MOBILE') || printerInfo.isNetworkPrinter()) return $d5ef754421ca3e16$export$2e2bcd8739ae039(printerInfo, printParamsXml, labelXml, labelSetXml);
            return $357bab5e353b9a9d$export$118613715be2faef().printLabel2Async(printerName, printParamsXml, labelXml, labelSetXml).then(function(result) {
                return new $f6bbdda70da0550a$export$2e2bcd8739ae039(printerInfo, result);
            });
        }
        throw new Error(`printLabel2Async(): unknown printer '${printerName}'`);
    });
};
var $7714de672b81ae87$export$2e2bcd8739ae039 = $7714de672b81ae87$var$printLabel2;



const $756044f2577989d3$export$1bb358554aac31c1 = 'get';
const $756044f2577989d3$export$484f3009c2ee32ad = 'post';
const $756044f2577989d3$export$54950d96c4d7b0 = 'patch';
const $756044f2577989d3$export$5508c7b57250ebc6 = 'put';
const $756044f2577989d3$export$4bd2facc4a3e6aa1 = 'delete';
const $756044f2577989d3$export$8eb3892b442747bd = 'options';
const $756044f2577989d3$var$apiService = async ({ url: url , method: method = $756044f2577989d3$export$1bb358554aac31c1 , params: params , headers: headers = {
} , debug: debug = false , timeout: timeout = 1000 ,  })=>{
    const writer = (output, force = debug)=>{
        if (force) console.log('apiService.writer', output);
    };
    try {
        const config = {
            method: method,
            url: url,
            [method === $756044f2577989d3$export$1bb358554aac31c1 ? 'params' : 'data']: params,
            headers: headers,
            rejectUnauthorized: false,
            timeout: timeout
        };
        const { data: data , ...others } = await ($parcel$interopDefault($02FXs$axios))(config);
        // if data is a string and starts with < it's probably xml
        if (data && typeof data === 'string' && data.charAt(0) == '<') {
            const xmlResponse = $c7e2149312647974$export$ddc9d26d0b3d592d(data, {
            });
            return JSON.parse(xmlResponse);
        }
        return data;
    } catch (e) {
        writer(e);
        throw e;
    }
};
const $756044f2577989d3$export$3a4d4692811ad9db = (port, host)=>{
    $87a73fe4e23c61da$export$61fd6f1ddd0c20e2('Host', host);
    $87a73fe4e23c61da$export$61fd6f1ddd0c20e2('Port', port);
};
const $756044f2577989d3$export$e6d175d6dda5b1c6 = async (method, command, params, defaultData = {
})=>{
    const WS_PROTOCOL = $87a73fe4e23c61da$export$8206e8d612b3e63('WS_PROTOCOL');
    const WS_SVC_HOST = $87a73fe4e23c61da$export$8206e8d612b3e63('WS_SVC_HOST');
    const WS_SVC_PATH = $87a73fe4e23c61da$export$8206e8d612b3e63('WS_SVC_PATH');
    const url = `${WS_PROTOCOL + WS_SVC_HOST}:${$87a73fe4e23c61da$export$8206e8d612b3e63('WS_START_PORT')}/${WS_SVC_PATH}/${command}`;
    const { data: data = defaultData  } = await $756044f2577989d3$var$apiService({
        url: url,
        params: params,
        method: method
    });
    return data;
};
const $756044f2577989d3$export$929c93f3ebf4dd68 = (url, data, method, defaultData)=>{
    const { data: responseData = defaultData  } = $756044f2577989d3$var$apiService({
        url: url,
        params: data,
        method: method
    });
    return responseData;
};
const $756044f2577989d3$export$cda26f64738995f6 = (currentPort, host)=>{
    const stop = 'here';
    const url = $87a73fe4e23c61da$export$937701d1b4a6fa29($87a73fe4e23c61da$export$8206e8d612b3e63('WS_CMD_STATUS'), {
        currentPort: currentPort,
        host: host
    });
    return $756044f2577989d3$var$apiService({
        url: url,
        timeout: $87a73fe4e23c61da$export$8206e8d612b3e63('WS_CHECK_TIMEOUT')
    });
};
const $756044f2577989d3$export$60a731736ea9a494 = async (host, successFindWebService, errorFindWebService)=>{
    const startPort = $87a73fe4e23c61da$export$8206e8d612b3e63('WS_START_PORT');
    const endPort = $87a73fe4e23c61da$export$8206e8d612b3e63('WS_END_PORT');
    const ajaxPromises = [];
    for(let i = startPort; i <= endPort; ++i)ajaxPromises.push($756044f2577989d3$export$cda26f64738995f6(i, host));
    // using reverse logic: first successful response will result in rejected promise, so it will break .all() loop
    // and ignore all pending results from other promises.
    // So 'thenCatch' is called in case of success, and 'then' handler is called in case of failure (no ports found).
    try {
        const ports = await Promise.all(ajaxPromises).catch(()=>false
        );
        errorFindWebService && errorFindWebService();
        let found = false;
        ports.forEach((port)=>{
            if (!found && $02FXs$lodash.isNumber(port)) {
                found = true;
                $756044f2577989d3$export$3a4d4692811ad9db(port, host);
                successFindWebService();
            }
        });
        if (!found) throw 'Could not find dymo port';
    } catch (e) {
        errorFindWebService && errorFindWebService(e);
    }
};
const $756044f2577989d3$export$804f1be6f63ea4e = (onSuccess, onError)=>$756044f2577989d3$export$60a731736ea9a494(undefined, onSuccess, onError)
;
const $756044f2577989d3$export$2924fd58e9f79dae = (onSuccess, onError)=>$756044f2577989d3$export$60a731736ea9a494(undefined, onSuccess, onError)
;
const $756044f2577989d3$export$9bd96f5c5c9d87f0 = (method, command, params)=>{
    const url = $87a73fe4e23c61da$export$937701d1b4a6fa29(command);
    return $756044f2577989d3$var$apiService({
        url: url,
        method: method,
        params: params ? ($parcel$interopDefault($02FXs$qs)).stringify(params) : undefined,
        withCredentials: false,
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }
    });
};
const $756044f2577989d3$export$4af992dd41507952 = (printerName, printParamsXml, labelXml, labelSetXml, statusCallback, pollInterval)=>{
    const printJob = $7714de672b81ae87$export$2e2bcd8739ae039(printerName, printParamsXml, labelXml, labelSetXml);
    const statusChecker = async function(pjs) {
        const callbackResult = statusCallback(printJob, pjs);
        if (!callbackResult) return;
        // schedule more status checking
        await new Promise((resolve)=>{
            setTimeout(resolve, pollInterval);
        });
        printJob.getStatus(statusChecker);
    };
    printJob.getStatus(statusChecker);
    return printJob;
};
var $756044f2577989d3$export$2e2bcd8739ae039 = $756044f2577989d3$var$apiService;



const $4689b3733c33ff98$export$9342ab57b40592c6 = function() {
    this.getPrinters = function() {
        return $756044f2577989d3$export$9bd96f5c5c9d87f0($756044f2577989d3$export$1bb358554aac31c1, $87a73fe4e23c61da$export$8206e8d612b3e63('WS_CMD_GET_PRINTERS'));
    };
    this.getJobStatus = function() {
        return $756044f2577989d3$export$9bd96f5c5c9d87f0($756044f2577989d3$export$1bb358554aac31c1, $87a73fe4e23c61da$export$8206e8d612b3e63('WS_CMD_GET_JOB_STATUS'));
    };
    this.openLabelFile = function(fileName) {
        return $756044f2577989d3$export$9bd96f5c5c9d87f0($756044f2577989d3$export$1bb358554aac31c1, $87a73fe4e23c61da$export$8206e8d612b3e63('WS_CMD_OPEN_LABEL'), {
            fileName: fileName
        });
    };
    this.printLabel = function(printerName, printParamsXml, labelXml, labelSetXml) {
        const stop = 'here';
        return $756044f2577989d3$export$9bd96f5c5c9d87f0($756044f2577989d3$export$484f3009c2ee32ad, $87a73fe4e23c61da$export$8206e8d612b3e63('WS_CMD_PRINT_LABEL'), {
            printerName: printerName,
            printParamsXml: printParamsXml,
            labelXml: labelXml,
            labelSetXml: labelSetXml
        });
    };
    this.printLabel2 = function(printerName, printParamsXml, labelXml, labelSetXml) {
        return $756044f2577989d3$export$9bd96f5c5c9d87f0($756044f2577989d3$export$484f3009c2ee32ad, $87a73fe4e23c61da$export$8206e8d612b3e63('WS_CMD_PRINT_LABEL2'), {
            printerName: printerName,
            printParamsXml: printParamsXml,
            labelXml: labelXml,
            labelSetXml: labelSetXml
        });
    };
    this.renderLabel = function(labelXml, renderParamsXml, printerName) {
        return $756044f2577989d3$export$9bd96f5c5c9d87f0($756044f2577989d3$export$484f3009c2ee32ad, $87a73fe4e23c61da$export$8206e8d612b3e63('WS_CMD_RENDER_LABEL'), {
            labelXml: labelXml,
            renderParamsXml: renderParamsXml,
            printerName: printerName
        });
    };
    this.loadImageAsPngBase64 = function(imageUri) {
        return $756044f2577989d3$export$9bd96f5c5c9d87f0($756044f2577989d3$export$1bb358554aac31c1, $87a73fe4e23c61da$export$8206e8d612b3e63('WS_CMD_LOAD_IMAGE'), {
            imageUri: imageUri
        });
    };
    this.is550Printer = function(printerName) {
        return $756044f2577989d3$export$9bd96f5c5c9d87f0($756044f2577989d3$export$1bb358554aac31c1, $87a73fe4e23c61da$export$8206e8d612b3e63('WS_CMD_IS_550_PRINTER'), {
            printerName: printerName
        });
    };
    this.getConsumableInfoIn550Printer = function(printerName) {
        return $756044f2577989d3$export$9bd96f5c5c9d87f0($756044f2577989d3$export$1bb358554aac31c1, $87a73fe4e23c61da$export$8206e8d612b3e63('WS_CMD_GET_CONSUMABLE_INFO_IN_550_PRINTER'), {
            printerName: printerName
        });
    };
    // Async
    this.getPrintersAsync = function() {
        return $756044f2577989d3$export$9bd96f5c5c9d87f0($756044f2577989d3$export$1bb358554aac31c1, $87a73fe4e23c61da$export$8206e8d612b3e63('WS_CMD_GET_PRINTERS'));
    };
    this.openLabelFileAsync = function(fileName) {
        return $756044f2577989d3$export$9bd96f5c5c9d87f0($756044f2577989d3$export$1bb358554aac31c1, $87a73fe4e23c61da$export$8206e8d612b3e63('WS_CMD_OPEN_LABEL'), {
            fileName: fileName
        });
    };
    this.printLabelAsync = function(printerName, printParamsXml, labelXml, labelSetXml) {
        return $756044f2577989d3$export$9bd96f5c5c9d87f0($756044f2577989d3$export$484f3009c2ee32ad, $87a73fe4e23c61da$export$8206e8d612b3e63('WS_CMD_PRINT_LABEL'), {
            printerName: printerName,
            printParamsXml: printParamsXml,
            labelXml: labelXml,
            labelSetXml: labelSetXml
        });
    };
    this.printLabel2Async = function(printerName, printParamsXml, labelXml, labelSetXml) {
        return $756044f2577989d3$export$9bd96f5c5c9d87f0($756044f2577989d3$export$484f3009c2ee32ad, $87a73fe4e23c61da$export$8206e8d612b3e63('WS_CMD_PRINT_LABEL2'), {
            printerName: printerName,
            printParamsXml: printParamsXml,
            labelXml: labelXml,
            labelSetXml: labelSetXml
        });
    };
    this.renderLabelAsync = function(labelXml, renderParamsXml, printerName) {
        return $756044f2577989d3$export$9bd96f5c5c9d87f0($756044f2577989d3$export$484f3009c2ee32ad, $87a73fe4e23c61da$export$8206e8d612b3e63('WS_CMD_RENDER_LABEL'), {
            labelXml: labelXml,
            renderParamsXml: renderParamsXml,
            printerName: printerName
        });
    };
    this.loadImageAsPngBase64Async = function(imageUri) {
        return $756044f2577989d3$export$9bd96f5c5c9d87f0($756044f2577989d3$export$1bb358554aac31c1, $87a73fe4e23c61da$export$8206e8d612b3e63('WS_CMD_LOAD_IMAGE'), {
            imageUri: imageUri
        });
    };
    this.is550PrinterAsync = function(printerName) {
        return $756044f2577989d3$export$9bd96f5c5c9d87f0($756044f2577989d3$export$1bb358554aac31c1, $87a73fe4e23c61da$export$8206e8d612b3e63('WS_CMD_IS_550_PRINTER'), {
            printerName: printerName
        });
    };
    this.getConsumableInfoIn550PrinterAsync = function(printerName) {
        return $756044f2577989d3$export$9bd96f5c5c9d87f0($756044f2577989d3$export$1bb358554aac31c1, $87a73fe4e23c61da$export$8206e8d612b3e63('WS_CMD_GET_CONSUMABLE_INFO_IN_550_PRINTER'), {
            printerName: printerName
        });
    };
};





const $ace4824fd98414a7$var$chooseEnvironment = function(envCheckResult) {
    let _framework;
    if (envCheckResult.errorDetails != '') throw new Error(envCheckResult.errorDetails);
    // first, trying new cross-platform implementation, then fallback to os-specific implementations
    $b327b8d2b73d3bbc$export$d3d0fd7db52b9fa3('chooseEnvironment > WebServicePresent');
    const svc = new $4689b3733c33ff98$export$9342ab57b40592c6();
    if (svc) {
        _framework = {
        };
        _framework.getPrinters = function() {
            return svc.getPrinters();
        };
        _framework.openLabelFile = function(fileName) {
            return svc.openLabelFile(fileName);
        };
        _framework.printLabel = function(printerName, printParamsXml, labelXml, labelSetXml) {
            return svc.printLabel(printerName, printParamsXml, labelXml, labelSetXml);
        };
        _framework.printLabel2 = function(printerName, printParamsXml, labelXml, labelSetXml) {
            return svc.printLabel2(printerName, printParamsXml, labelXml, labelSetXml);
        };
        _framework.renderLabel = function(labelXml, renderParamsXml, printerName) {
            return svc.renderLabel(labelXml, renderParamsXml, printerName);
        };
        _framework.loadImageAsPngBase64 = function(imageUri) {
            return svc.loadImageAsPngBase64(imageUri);
        };
        _framework.is550Printer = function(printerName) {
            return svc.is550Printer(printerName);
        };
        _framework.getConsumableInfoIn550Printer = function(printerName) {
            return svc.getConsumableInfoIn550Printer(printerName);
        };
        _framework.getJobStatus = function(printerName, jobId) {
            const status = typeof svc.getJobStatus === 'function' ? $af45e04149270ecf$export$2e2bcd8739ae039.parse(svc.getJobStatus(printerName, parseInt(jobId, 10))) : {
                status: $fd3139ff3ad63450$export$2e2bcd8739ae039.Unknown,
                statusMessage: 'not implemented'
            };
            return new $af45e04149270ecf$export$2e2bcd8739ae039(printerName, jobId, status.status, status.statusMessage);
        };
        _framework.getPrintersAsync = function() {
            return svc.getPrintersAsync();
        };
        _framework.openLabelFileAsync = function(fileName) {
            return svc.openLabelFileAsync(fileName);
        };
        _framework.printLabelAsync = function(printerName, printParamsXml, labelXml, labelSetXml) {
            return svc.printLabelAsync(printerName, printParamsXml, labelXml, labelSetXml);
        };
        _framework.printLabel2Async = function(printerName, printParamsXml, labelXml, labelSetXml) {
            return svc.printLabel2Async(printerName, printParamsXml, labelXml, labelSetXml);
        };
        _framework.renderLabelAsync = function(labelXml, renderParamsXml, printerName) {
            return svc.renderLabelAsync(labelXml, renderParamsXml, printerName);
        };
        _framework.loadImageAsPngBase64Async = function(imageUri) {
            return svc.loadImageAsPngBase64Async(imageUri);
        };
        _framework.is550PrinterAsync = function(printerName) {
            return svc.is550PrinterAsync(printerName);
        };
        _framework.getConsumableInfoIn550PrinterAsync = function(printerName) {
            return svc.getConsumableInfoIn550PrinterAsync(printerName);
        };
        return _framework;
    }
    throw new Error('Cannot establish connection to the web service. Is DYMO Label Framework installed?');
};
var $ace4824fd98414a7$export$2e2bcd8739ae039 = $ace4824fd98414a7$var$chooseEnvironment;






/**
 Checks is browser enviroment suitable for the framework
 @export
 */ const $cec85e923fbadf04$var$checkEnvironment = async function(onEnvironmentCheckedCallback, checkWebService) {
    const result = {
        isBrowserSupported: false,
        isFrameworkInstalled: false,
        isWebServicePresent: false,
        errorDetails: ''
    };
    const onWebServiceFound = async function() {
        result.isBrowserSupported = true;
        result.isFrameworkInstalled = true;
        result.isWebServicePresent = true;
        onEnvironmentCheckedCallback && await onEnvironmentCheckedCallback(result);
    };
    const onLegacyPluginFound = async function() {
        result.isBrowserSupported = true;
        result.isFrameworkInstalled = true;
        result.isWebServicePresent = false;
        onEnvironmentCheckedCallback && await onEnvironmentCheckedCallback(result);
    };
    const checkLegacyPlugins = function() {
        $b327b8d2b73d3bbc$export$d3d0fd7db52b9fa3('checkLegacyPlugins');
        result.isWebServicePresent = false;
        result.isBrowserSupported = true;
    };
    const errorFindWebService = function(err) {
        checkLegacyPlugins();
        onEnvironmentCheckedCallback && onEnvironmentCheckedCallback(result);
    };
    if ($87a73fe4e23c61da$export$8206e8d612b3e63('dymo.label.framework.currentFramework')) {
        $b327b8d2b73d3bbc$export$d3d0fd7db52b9fa3('checkEnvironment > return existing instance of framework');
        if ($87a73fe4e23c61da$export$8206e8d612b3e63('dymo.label.framework.currentFramework') == 2) await onWebServiceFound();
        else await onLegacyPluginFound();
        return result;
    }
    if (checkWebService) await $756044f2577989d3$export$804f1be6f63ea4e(onWebServiceFound, errorFindWebService);
    else await $756044f2577989d3$export$2924fd58e9f79dae(onWebServiceFound, errorFindWebService);
    return result;
};
var $cec85e923fbadf04$export$2e2bcd8739ae039 = $cec85e923fbadf04$var$checkEnvironment;


const $357bab5e353b9a9d$export$80c2ec0b947f4e43 = function(e) {
    const error = e || new Error('DYMO Label Framework Plugin or WebService are not installed');
    const throwError = function() {
        throw error;
    };
    return {
        getPrinters: throwError,
        openLabelFile: throwError,
        printLabel: throwError,
        printLabel2: throwError,
        renderLabel: throwError,
        loadImageAsPngBase64: throwError,
        getJobStatus: throwError,
        is550Printer: throwError,
        getConsumableInfoIn550Printer: throwError,
        getPrintersAsync: throwError,
        openLabelFileAsync: throwError,
        printLabelAsync: throwError,
        printLabel2Async: throwError,
        renderLabelAsync: throwError,
        loadImageAsPngBase64Async: throwError,
        is550PrinterAsync: throwError,
        getConsumableInfoIn550PrinterAsync: throwError
    };
};
// let _framework
// let currentFramework
// let _waitWebService = false
// let _checkResult = null
/**
 * @constructor
 */ function $357bab5e353b9a9d$var$_createFramework(callBack, checkWebService, framework) {
    this.v1 = true;
    this.init = false;
    let _framework = framework;
    let currentFramework;
    let _waitWebService = false;
    let _checkResult = null;
    if (_waitWebService) {
        $b327b8d2b73d3bbc$export$d3d0fd7db52b9fa3('_createFramework > Error service discovery is in progress. ');
        throw new Error('DYMO Label Framework service discovery is in progress.');
    }
    if (_framework) {
        $b327b8d2b73d3bbc$export$d3d0fd7db52b9fa3(`_createFramework > returning existing instance of _framework, has callBack: ${!!callBack}`);
        callBack && callBack(_checkResult);
        return _framework;
    }
    if (this && this.constructor == $357bab5e353b9a9d$var$_createFramework) {
        _waitWebService = true;
        const onEnvironmentChecked = function(checkResult) {
            _checkResult = checkResult;
            try {
                _framework = $ace4824fd98414a7$export$2e2bcd8739ae039(checkResult);
                currentFramework = checkResult.isWebServicePresent ? 2 : 1;
                $87a73fe4e23c61da$export$61fd6f1ddd0c20e2('dymo.label.framework.currentFramework', currentFramework);
            } catch (e) {
                $b327b8d2b73d3bbc$export$d3d0fd7db52b9fa3(`onEnvironmentChecked > exception e : ${e.description || e.message || e}`);
                if (!checkWebService) throw e;
                _framework = $357bab5e353b9a9d$export$80c2ec0b947f4e43(e);
                $b327b8d2b73d3bbc$export$d3d0fd7db52b9fa3('onEnvironmentChecked > fall back to createFaultyFramework');
            } finally{
                _waitWebService = false;
            }
            callBack && callBack(_checkResult);
        };
        return (async ()=>{
            await $cec85e923fbadf04$export$2e2bcd8739ae039(onEnvironmentChecked, checkWebService);
            return _framework;
        })();
    }
    this.init = true;
    return new $357bab5e353b9a9d$var$_createFramework(callBack, checkWebService);
}
const $357bab5e353b9a9d$export$118613715be2faef = (callBack, checkWebService)=>new $357bab5e353b9a9d$var$_createFramework(callBack, checkWebService) // export default new _createFramework
;


const $8dade80d0b9d9e5d$export$f71ef76cc1435eaa = `<?xml version="1.0" encoding="utf-8"?>
<DesktopLabel Version="1">
    <DYMOLabel Version="3">
        <Description>DYMO Label</Description>
        <Orientation>Landscape</Orientation>
        <LabelName>Address</LabelName>
        <InitialLength>0</InitialLength>
        <BorderStyle>SolidLine</BorderStyle>
        <DYMORect>
            <DYMOPoint>
                <X>0.23</X>
                <Y>0.06</Y>
            </DYMOPoint>
            <Size>
                <Width>3.21</Width>
                <Height>0.9966666</Height>
            </Size>
        </DYMORect>
        <BorderColor>
            <SolidColorBrush>
                <Color A="1" R="0" G="0" B="0"> </Color>
            </SolidColorBrush>
        </BorderColor>
        <BorderThickness>1</BorderThickness>
        <Show_Border>False</Show_Border>
        <DynamicLayoutManager>
            <RotationBehavior>ClearObjects</RotationBehavior>
            <LabelObjects>
                <TextObject>
                    <Name>Line1</Name>
                    <Brushes>
                        <BackgroundBrush>
                            <SolidColorBrush>
                                <Color A="0" R="0" G="0" B="0"> </Color>
                            </SolidColorBrush>
                        </BackgroundBrush>
                        <BorderBrush>
                            <SolidColorBrush>
                                <Color A="1" R="0" G="0" B="0"> </Color>
                            </SolidColorBrush>
                        </BorderBrush>
                        <StrokeBrush>
                            <SolidColorBrush>
                                <Color A="1" R="0" G="0" B="0"> </Color>
                            </SolidColorBrush>
                        </StrokeBrush>
                        <FillBrush>
                            <SolidColorBrush>
                                <Color A="0" R="0" G="0" B="0"> </Color>
                            </SolidColorBrush>
                        </FillBrush>
                    </Brushes>
                    <Rotation>Rotation0</Rotation>
                    <OutlineThickness>1</OutlineThickness>
                    <IsOutlined>False</IsOutlined>
                    <BorderStyle>SolidLine</BorderStyle>
                    <Margin>
                        <DYMOThickness Left="0" Top="0" Right="0" Bottom="0" />
                    </Margin>
                    <HorizontalAlignment>Center</HorizontalAlignment>
                    <VerticalAlignment>Middle</VerticalAlignment>
                    <FitMode>None</FitMode>
                    <IsVertical>False</IsVertical>
                    <FormattedText>
                        <FitMode>None</FitMode>
                        <HorizontalAlignment>Center</HorizontalAlignment>
                        <VerticalAlignment>Middle</VerticalAlignment>
                        <IsVertical>False</IsVertical>
                        <LineTextSpan>
                            <TextSpan>
                                <Text>Line1</Text>
                                <FontInfo>
                                    <FontName>Segoe UI</FontName>
                                    <FontSize>8</FontSize>
                                    <IsBold>True</IsBold>
                                    <IsItalic>False</IsItalic>
                                    <IsUnderline>False</IsUnderline>
                                    <FontBrush>
                                        <SolidColorBrush>
                                            <Color A="1" R="0" G="0" B="0"> </Color>
                                        </SolidColorBrush>
                                    </FontBrush>
                                </FontInfo>
                            </TextSpan>
                        </LineTextSpan>
                    </FormattedText>
                    <ObjectLayout>
                        <DYMOPoint>
                            <X>0.23</X>
                            <Y>0.06</Y>
                        </DYMOPoint>
                        <Size>
                            <Width>3.193756</Width>
                            <Height>0.1368766</Height>
                        </Size>
                    </ObjectLayout>
                </TextObject>
                <TextObject>
                    <Name>Line2</Name>
                    <Brushes>
                        <BackgroundBrush>
                            <SolidColorBrush>
                                <Color A="0" R="0" G="0" B="0"> </Color>
                            </SolidColorBrush>
                        </BackgroundBrush>
                        <BorderBrush>
                            <SolidColorBrush>
                                <Color A="1" R="0" G="0" B="0"> </Color>
                            </SolidColorBrush>
                        </BorderBrush>
                        <StrokeBrush>
                            <SolidColorBrush>
                                <Color A="1" R="0" G="0" B="0"> </Color>
                            </SolidColorBrush>
                        </StrokeBrush>
                        <FillBrush>
                            <SolidColorBrush>
                                <Color A="0" R="0" G="0" B="0"> </Color>
                            </SolidColorBrush>
                        </FillBrush>
                    </Brushes>
                    <Rotation>Rotation0</Rotation>
                    <OutlineThickness>1</OutlineThickness>
                    <IsOutlined>False</IsOutlined>
                    <BorderStyle>SolidLine</BorderStyle>
                    <Margin>
                        <DYMOThickness Left="0" Top="0" Right="0" Bottom="0" />
                    </Margin>
                    <HorizontalAlignment>Center</HorizontalAlignment>
                    <VerticalAlignment>Middle</VerticalAlignment>
                    <FitMode>None</FitMode>
                    <IsVertical>False</IsVertical>
                    <FormattedText>
                        <FitMode>None</FitMode>
                        <HorizontalAlignment>Center</HorizontalAlignment>
                        <VerticalAlignment>Middle</VerticalAlignment>
                        <IsVertical>False</IsVertical>
                        <LineTextSpan>
                            <TextSpan>
                                <Text>Line2</Text>
                                <FontInfo>
                                    <FontName>Segoe UI</FontName>
                                    <FontSize>8</FontSize>
                                    <IsBold>False</IsBold>
                                    <IsItalic>False</IsItalic>
                                    <IsUnderline>False</IsUnderline>
                                    <FontBrush>
                                        <SolidColorBrush>
                                            <Color A="1" R="0" G="0" B="0"> </Color>
                                        </SolidColorBrush>
                                    </FontBrush>
                                </FontInfo>
                            </TextSpan>
                        </LineTextSpan>
                    </FormattedText>
                    <ObjectLayout>
                        <DYMOPoint>
                            <X>0.23</X>
                            <Y>0.1968766</Y>
                        </DYMOPoint>
                        <Size>
                            <Width>3.180007</Width>
                            <Height>0.1338767</Height>
                        </Size>
                    </ObjectLayout>
                </TextObject>
                <TextObject>
                    <Name>Line3</Name>
                    <Brushes>
                        <BackgroundBrush>
                            <SolidColorBrush>
                                <Color A="0" R="0" G="0" B="0"> </Color>
                            </SolidColorBrush>
                        </BackgroundBrush>
                        <BorderBrush>
                            <SolidColorBrush>
                                <Color A="1" R="0" G="0" B="0"> </Color>
                            </SolidColorBrush>
                        </BorderBrush>
                        <StrokeBrush>
                            <SolidColorBrush>
                                <Color A="1" R="0" G="0" B="0"> </Color>
                            </SolidColorBrush>
                        </StrokeBrush>
                        <FillBrush>
                            <SolidColorBrush>
                                <Color A="0" R="0" G="0" B="0"> </Color>
                            </SolidColorBrush>
                        </FillBrush>
                    </Brushes>
                    <Rotation>Rotation0</Rotation>
                    <OutlineThickness>1</OutlineThickness>
                    <IsOutlined>False</IsOutlined>
                    <BorderStyle>SolidLine</BorderStyle>
                    <Margin>
                        <DYMOThickness Left="0" Top="0" Right="0" Bottom="0" />
                    </Margin>
                    <HorizontalAlignment>Center</HorizontalAlignment>
                    <VerticalAlignment>Middle</VerticalAlignment>
                    <FitMode>None</FitMode>
                    <IsVertical>False</IsVertical>
                    <FormattedText>
                        <FitMode>None</FitMode>
                        <HorizontalAlignment>Center</HorizontalAlignment>
                        <VerticalAlignment>Middle</VerticalAlignment>
                        <IsVertical>False</IsVertical>
                        <LineTextSpan>
                            <TextSpan>
                                <Text>Line3</Text>
                                <FontInfo>
                                    <FontName>Segoe UI</FontName>
                                    <FontSize>10</FontSize>
                                    <IsBold>False</IsBold>
                                    <IsItalic>False</IsItalic>
                                    <IsUnderline>False</IsUnderline>
                                    <FontBrush>
                                        <SolidColorBrush>
                                            <Color A="1" R="0" G="0" B="0"> </Color>
                                        </SolidColorBrush>
                                    </FontBrush>
                                </FontInfo>
                            </TextSpan>
                        </LineTextSpan>
                    </FormattedText>
                    <ObjectLayout>
                        <DYMOPoint>
                            <X>0.23</X>
                            <Y>0.7875001</Y>
                        </DYMOPoint>
                        <Size>
                            <Width>3.19878</Width>
                            <Height>0.2691666</Height>
                        </Size>
                    </ObjectLayout>
                </TextObject>
                <BarcodeObject>
                    <Name>ItemCode</Name>
                    <Brushes>
                        <BackgroundBrush>
                            <SolidColorBrush>
                                <Color A="1" R="1" G="1" B="1"> </Color>
                            </SolidColorBrush>
                        </BackgroundBrush>
                        <BorderBrush>
                            <SolidColorBrush>
                                <Color A="1" R="0" G="0" B="0"> </Color>
                            </SolidColorBrush>
                        </BorderBrush>
                        <StrokeBrush>
                            <SolidColorBrush>
                                <Color A="1" R="0" G="0" B="0"> </Color>
                            </SolidColorBrush>
                        </StrokeBrush>
                        <FillBrush>
                            <SolidColorBrush>
                                <Color A="1" R="0" G="0" B="0"> </Color>
                            </SolidColorBrush>
                        </FillBrush>
                    </Brushes>
                    <Rotation>Rotation0</Rotation>
                    <OutlineThickness>1</OutlineThickness>
                    <IsOutlined>False</IsOutlined>
                    <BorderStyle>SolidLine</BorderStyle>
                    <Margin>
                        <DYMOThickness Left="0" Top="0" Right="0" Bottom="0" />
                    </Margin>
                    <BarcodeFormat>Code128B</BarcodeFormat>
                    <Data>
                        <MultiDataString>
                            <DataString>1234</DataString>
                        </MultiDataString>
                    </Data>
                    <HorizontalAlignment>Center</HorizontalAlignment>
                    <VerticalAlignment>Middle</VerticalAlignment>
                    <Size>Medium</Size>
                    <TextPosition>None</TextPosition>
                    <FontInfo>
                        <FontName>Arial</FontName>
                        <FontSize>12</FontSize>
                        <IsBold>False</IsBold>
                        <IsItalic>False</IsItalic>
                        <IsUnderline>False</IsUnderline>
                        <FontBrush>
                            <SolidColorBrush>
                                <Color A="1" R="0" G="0" B="0"> </Color>
                            </SolidColorBrush>
                        </FontBrush>
                    </FontInfo>
                    <ObjectLayout>
                        <DYMOPoint>
                            <X>0.23</X>
                            <Y>0.3498435</Y>
                        </DYMOPoint>
                        <Size>
                            <Width>3.196882</Width>
                            <Height>0.5037009</Height>
                        </Size>
                    </ObjectLayout>
                </BarcodeObject>
            </LabelObjects>
        </DynamicLayoutManager>
    </DYMOLabel>
    <LabelApplication>Blank</LabelApplication>
    <DataTable>
        <Columns> </Columns>
        <Rows> </Rows>
    </DataTable>
</DesktopLabel>`;



/** LabelSetRecord class
 Holds data of one label-set records and provides methods to add data to the record

 @constructor
 @private
 @implements {ILabelSetRecord}
 */ const $1d177bef11cfbeda$var$LabelSetRecord = function() {
};
/** inheritDoc */ $1d177bef11cfbeda$var$LabelSetRecord.prototype.setTextMarkup = function(objectName, textMarkup) {
    textMarkup = textMarkup.toString();
    if (textMarkup.indexOf($87a73fe4e23c61da$export$9319d8092206b03f) != 0) textMarkup = $87a73fe4e23c61da$export$9319d8092206b03f + textMarkup + $87a73fe4e23c61da$export$4a23fba8ac5e0d2e;
    this[objectName] = textMarkup;
    return this;
};
/** inheritDoc */ $1d177bef11cfbeda$var$LabelSetRecord.prototype.setText = function(objectName, text) {
    this[objectName] = text;
    return this;
};
/** inheritDoc */ $1d177bef11cfbeda$var$LabelSetRecord.prototype.setBase64Image = function(objectName, base64Image) {
    this[objectName] = base64Image;
    return this;
};
var $1d177bef11cfbeda$export$2e2bcd8739ae039 = $1d177bef11cfbeda$var$LabelSetRecord;







/** Specifies how tape is cut between label when printing multiple labels on Tape printers.
 // Note: it affects multiple pages print jobs only, if one page job is printed the tape is always cut.
 // AutoCut - cut tape between pages
 // ChainMarks - draw a mark between pages
 @enum {string}
 @export
 */ const $d64eec3b73a0f03c$var$TapeCutMode = {
};
/** @export */ $d64eec3b73a0f03c$var$TapeCutMode.AutoCut = 'AutoCut';
/** @export */ $d64eec3b73a0f03c$var$TapeCutMode.ChainMarks = 'ChainMarks';
var $d64eec3b73a0f03c$export$2e2bcd8739ae039 = $d64eec3b73a0f03c$var$TapeCutMode;





/** Specifies how objects and object text are laid down on the label. For Middle East labels/content specify RightToLeft, otherwise "LeftToRight" (default)
 @enum {string}
 @export
 */ const $f203f21b73a1a142$var$FlowDirection = {
};
/** @export */ $f203f21b73a1a142$var$FlowDirection.LeftToRight = 'LeftToRight';
/** @export */ $f203f21b73a1a142$var$FlowDirection.RightToLeft = 'RightToLeft';
var $f203f21b73a1a142$export$2e2bcd8739ae039 = $f203f21b73a1a142$var$FlowDirection;



/** Specifies printing quality when printed on LabelWriter printers
 // 'Text' - text print quality (fast)
 // 'BarcodeAndGraphics' - barcode and images print quality (slow)
 // 'Auto' - automatically determines the print quality based on objects on the label
 @enum {string}
 @export
 */ const $302ed3e4ae7cc699$var$LabelWriterPrintQuality = {
};
/** @export */ $302ed3e4ae7cc699$var$LabelWriterPrintQuality.Auto = 'Auto';
/** @export */ $302ed3e4ae7cc699$var$LabelWriterPrintQuality.Text = 'Text';
/** @export */ $302ed3e4ae7cc699$var$LabelWriterPrintQuality.BarcodeAndGraphics = 'BarcodeAndGraphics';
var $302ed3e4ae7cc699$export$2e2bcd8739ae039 = $302ed3e4ae7cc699$var$LabelWriterPrintQuality;



/**
 @interface
 @public
 */ const $03ab2e58258d4619$var$ILabelSetRecord = function() {
};
/**
 // Adds data to the record specified as text markup
 // Parameters:
 //      objectName - object name which the markup is set for
 //      textMarkup - markup string

 @public
 @param {string} objectName
 @param {string} textMarkup
 @return {ILabelSetRecord}
 */ $03ab2e58258d4619$var$ILabelSetRecord.prototype.setTextMarkup = function(objectName, textMarkup) {
};
/**
 // Adds data to the record specified as plain text
 // Parameters:
 //      objectName - object name which the markup is set for
 //      text - text string

 @public
 @param {string} objectName
 @param {string} text
 @return {ILabelSetRecord}
 */ $03ab2e58258d4619$var$ILabelSetRecord.prototype.setText = function(objectName, text) {
};
/**
 // Adds image data to the record.
 // Parameters:
 //      objectName - object name which the markup is set for
 //      base64Image - string contains base64-encoded png image stream

 @public
 @param {string} objectName
 @param {string} base64Image
 @return {ILabelSetRecord}
 */ $03ab2e58258d4619$var$ILabelSetRecord.prototype.setBase64Image = function(objectName, base64Image) {
};
var $03ab2e58258d4619$export$2e2bcd8739ae039 = $03ab2e58258d4619$var$ILabelSetRecord;


/**
 @public
 @interface
 */ const $4149dcedf033ebb8$var$ILabel = function() {
};
/**
 Returns current label xml as a string
 the returned xmlcan be passed to functions accepts label xml as a parameter
 or can be used to direct content manipulations not currently supported by the Framework
 @public
 @return {string}
 */ $4149dcedf033ebb8$var$ILabel.prototype.getLabelXml = function() {
};
/** Creates the label bitmap image can be used for label previewing. Similar to renderLabel()
 // Parameters:
 //      labelXml - label to preview
 //      renderParamsXml - rendering parameters, like shadow depth, label color, etc. See LabelRenderParams.xsd
 //      printerName - printer name the preview is generated for. Thhe preview/output cna be different on different printers,
 //                    especially on tape printers with different print head size.
 //                    An empty string can be passed if it does not matter or important on whitch printer the label will be printed.
 //                    In this case a default printer metrics will be used that is LW400 for LabelWriter printers and LW400 DUO Tape for tape printers
 // Returns base64-encoded string of rendered png label image

 @public
 @param {string} renderParamsXml
 @param {string} printerName
 @return {string}
 */ $4149dcedf033ebb8$var$ILabel.prototype.render = function(renderParamsXml, printerName) {
};
/** Creates the label bitmap image can be used for label previewing. Similar to renderLabel()
 // Parameters:
 //      labelXml - label to preview
 //      renderParamsXml - rendering parameters, like shadow depth, label color, etc. See LabelRenderParams.xsd
 //      printerName - printer name the preview is generated for. Thhe preview/output cna be different on different printers,
 //                    especially on tape printers with different print head size.
 //                    An empty string can be passed if it does not matter or important on whitch printer the label will be printed.
 //                    In this case a default printer metrics will be used that is LW400 for LabelWriter printers and LW400 DUO Tape for tape printers
 // Returns base64-encoded string of rendered png label image

 @public
 @param {string} renderParamsXml
 @param {string} printerName
 @return {string}
 */ $4149dcedf033ebb8$var$ILabel.prototype.renderAsync = function(renderParamsXml, printerName) {
};
/**
 // Prints the label. Similar to printLabel()
 // Parameters:
 //      printerName - the printer to print on. A list of printers can be obtained by getPrinters()
 //      printParamsXml - printing parameters, like number of copies, print quality, etc. See PrintParams.xsd
 //      labelSetXml - LabelSet to print. LabelSet is used to print multiple labels with same layout but different data, e.g. multiple addresses.
 //                    Use LabelSetBuilder to create a LabelSet or construct xml manualy according to LabelSet.xsd

 @public
 @param {string} printerName
 @param {string} printParamsXml
 @param {string} labelSetXml
 @return {void}

 */ $4149dcedf033ebb8$var$ILabel.prototype.print = function(printerName, printParamsXml, labelSetXml) {
};
/**
 // Prints the label. Similar to printLabel()
 // Parameters:
 //      printerName - the printer to print on. A list of printers can be obtained by getPrinters()
 //      printParamsXml - printing parameters, like number of copies, print quality, etc. See PrintParams.xsd
 //      labelSetXml - LabelSet to print. LabelSet is used to print multiple labels with same layout but different data, e.g. multiple addresses.
 //                    Use LabelSetBuilder to create a LabelSet or construct xml manualy according to LabelSet.xsd

 @public
 @param {string} printerName
 @param {string} printParamsXml
 @param {string} labelSetXml
 @return {void}

 */ $4149dcedf033ebb8$var$ILabel.prototype.printAsync = function(printerName, printParamsXml, labelSetXml) {
};
/**
 // Prints the label. Similar to printLabel()
 // Parameters:
 //      printerName - the printer to print on. A list of printers can be obtained by getPrinters()
 //      printParamsXml - printing parameters, like number of copies, print quality, etc. See PrintParams.xsd
 //      labelSetXml - LabelSet to print. LabelSet is used to print multiple labels with same layout but different data, e.g. multiple addresses.
 //                    Use LabelSetBuilder to create a LabelSet or construct xml manualy according to LabelSet.xsd

 @public
 @param {string} printerName
 @param {string} printParamsXml
 @param {string} labelSetXml
 @return {PrintJob} print job

 */ $4149dcedf033ebb8$var$ILabel.prototype.print2 = function(printerName, printParamsXml, labelSetXml) {
};
/**
 // Prints the label. Similar to printLabel()
 // Parameters:
 //      printerName - the printer to print on. A list of printers can be obtained by getPrinters()
 //      printParamsXml - printing parameters, like number of copies, print quality, etc. See PrintParams.xsd
 //      labelSetXml - LabelSet to print. LabelSet is used to print multiple labels with same layout but different data, e.g. multiple addresses.
 //                    Use LabelSetBuilder to create a LabelSet or construct xml manualy according to LabelSet.xsd

 @public
 @param {string} printerName
 @param {string} printParamsXml
 @param {string} labelSetXml
 @return {goog.Promise} print job

 */ $4149dcedf033ebb8$var$ILabel.prototype.print2Async = function(printerName, printParamsXml, labelSetXml) {
};
/** Prints a label and runs status checking in a loop

 @public
 @param {string} printerName the printer to print on. A list of printers can be obtained by getPrinters()
 @param {string} printParamsXml printing parameters, like number of copies, print quality, etc. See PrintParams.xsd
 @param {string} labelSetXml
 LabelSet to print. LabelSet is used to print multiple labels with same layout but different data, e.g. multiple addresses.
 Use LabelSetBuilder to create a LabelSet or construct xml manualy according to LabelSet.xsd
 @param {function(PrintJob, PrintJobStatusInfo): boolean} statusCallback
 Function to be called when a print job status is available.
 The function is called with one argument of type PrintJobStatusInfo
 To continue polling the status the function should return true, false otherwise
 @param {number} pollInterval poll interval in milliseconds
 @return {PrintJob} print job
 */ $4149dcedf033ebb8$var$ILabel.prototype.printAndPollStatus = function(printerName, printParamsXml, labelSetXml, statusCallback, pollInterval) {
};
/** Prints a label and runs status checking in a loop

 @public
 @param {string} printerName the printer to print on. A list of printers can be obtained by getPrinters()
 @param {string} printParamsXml printing parameters, like number of copies, print quality, etc. See PrintParams.xsd
 @param {string} labelSetXml
 LabelSet to print. LabelSet is used to print multiple labels with same layout but different data, e.g. multiple addresses.
 Use LabelSetBuilder to create a LabelSet or construct xml manualy according to LabelSet.xsd
 @param {function(PrintJob, PrintJobStatusInfo): boolean} statusCallback
 Function to be called when a print job status is available.
 The function is called with one argument of type PrintJobStatusInfo
 To continue polling the status the function should return true, false otherwise
 @param {number} pollInterval poll interval in milliseconds
 @return {goog.Promise}
 */ $4149dcedf033ebb8$var$ILabel.prototype.printAndPollStatusAsync = function(printerName, printParamsXml, labelSetXml, statusCallback, pollInterval) {
};
/**
 returns an array of object names on the label
 @public
 @return {Array.<string>}
 */ $4149dcedf033ebb8$var$ILabel.prototype.getObjectNames = function() {
};
/**
 returns the number of address objects on the label
 @public
 @return {number}
 */ $4149dcedf033ebb8$var$ILabel.prototype.getAddressObjectCount = function() {
};
/** Returns IntellegentMail barcode position for an Address object
 // Parameters:
 //      addressIndex - zero-based index of the address object in 'virtual' array of all address objects on the label
 // Returns Element object of the corresponed address object

 @public
 @param {number} addressIndex
 @return {AddressBarcodePosition}
 */ $4149dcedf033ebb8$var$ILabel.prototype.getAddressBarcodePosition = function(addressIndex) {
};
/** Set IntelegentMail barcode position for an Address object
 // Parameters:
 //      addressIndex - zero-based index of the address object in 'virtual' array of all address objects on the label
 //      bacodePosition - one of barcode position defined in AddressBarcodePosition
 // Returns Element object of the corresponed address object

 @public
 @param {number} addressIndex
 @param {AddressBarcodePosition|string} barcodePosition
 @return {ILabel}
 */ $4149dcedf033ebb8$var$ILabel.prototype.setAddressBarcodePosition = function(addressIndex, barcodePosition) {
};
/** Returns text content of an Address object
 // Parameters:
 //      addressIndex - zero-based index of the address object in 'virtual' array of all address objects on the label
 // Returns string contained plain text from the Address object

 @public
 @param {number} addressIndex
 @return {string}
 */ $4149dcedf033ebb8$var$ILabel.prototype.getAddressText = function(addressIndex) {
};
/** Set text content of an Address object
 // Parameters:
 //      addressIndex - zero-based index of the address object in 'virtual' array of all address objects on the label
 //      text - plain text string contain the content. Note: current text formatting is remained on line-by-line basis

 @public
 @param {number} addressIndex
 @param {string} text
 @return {ILabel}
 */ $4149dcedf033ebb8$var$ILabel.prototype.setAddressText = function(addressIndex, text) {
};
/** Get label type
 // Parameters:
 //
 //

 @public
 @return {boolean}
 */ $4149dcedf033ebb8$var$ILabel.prototype.isDCDLabel = function() {
};
$4149dcedf033ebb8$var$ILabel.prototype.isDLSLabel = function() {
};
$4149dcedf033ebb8$var$ILabel.prototype.isValidLabel = function() {
};
/** Returns 'text' content of an object
 // The content depends on object type:
 //  - for Address and Text objects it is object's text without formatting
 //  - for Barcode object it is barcode string
 //  - for Image it is base64-encoded string on image's png stream (only if image data is embedded with the label, not linked to url/file)
 //  - for CircularText it is object's text
 //  - for other objects an empty string is returned

 @public
 @param {string} objectName
 @return {string}
 */ $4149dcedf033ebb8$var$ILabel.prototype.getObjectText = function(objectName) {
};
/** sets text content for an object. Depends on object's type the content and/or text formatitng are set differently:
 //  - for Address the formatting is applied on line-by-line basis using <LineFonts> list
 //  - for text the formatting of current first character is used for the whole text
 //  - for Barcode object it is barcode string
 //  - for Image it is base64-encoded string of image's png stream
 //  - for CircularText it is object's text
 //  - for DateTime and Counter object it is object's PreText
 //  - for other objects an empty string is returned
 // Parameters:
 //      objectName - object name
 //      text - plain text string for new object content

 @public
 @param {string} objectName
 @param {string} text
 @return {ILabel}
 */ $4149dcedf033ebb8$var$ILabel.prototype.setObjectText = function(objectName, text) {
};
/** sets length of the continuous label in units of the label (that is, if label units are twips, the length will be assumed as twips value as well)
 // Parameters:
 //      newLength - object name

 @public
 @param {number} newLength
 @return {ILabel}
 */ $4149dcedf033ebb8$var$ILabel.prototype.setLabelLength = function(newLength) {
};
var $4149dcedf033ebb8$export$2e2bcd8739ae039 = $4149dcedf033ebb8$var$ILabel;



var $8906eb39e86ecbaa$exports = {};




/** Specifies tape's leader and trailer on a label when printing on Tape printer
 // Center - 10mm leader and trailer
 // Left - 6mm leader, 10mm trailer
 // Right - 10mm leader, 6mm trailer
 @enum {string}
 @export
 */ const $8c6e0b8ac29c1d85$var$TapeAlignment = {
};
/** @export */ $8c6e0b8ac29c1d85$var$TapeAlignment.Center = 'Center';
/** @export */ $8c6e0b8ac29c1d85$var$TapeAlignment.Left = 'Left';
/** @export */ $8c6e0b8ac29c1d85$var$TapeAlignment.Right = 'Right';
var $8c6e0b8ac29c1d85$export$2e2bcd8739ae039 = $8c6e0b8ac29c1d85$var$TapeAlignment;


/** Specifies on whitch roll to print when printing on Twin Turbo printers
 // Left - print on left roll only
 // Right - print on right roll only
 // Auto - continue printing on a different roll when current roll is out of paper. Note: it does not guarantee on whitch roll it will start printing. it can be both left or right.
 @enum {string}
 @export
 */ const $1c16ef16e67ae454$var$TwinTurboRoll = {
};
/** @export */ $1c16ef16e67ae454$var$TwinTurboRoll.Auto = 'Auto';
/** @export */ $1c16ef16e67ae454$var$TwinTurboRoll.Left = 'Left';
/** @export */ $1c16ef16e67ae454$var$TwinTurboRoll.Right = 'Right';
var $1c16ef16e67ae454$export$2e2bcd8739ae039 = $1c16ef16e67ae454$var$TwinTurboRoll;


/**
 @constructor
 @private
 @param {Object} result
 */ const $249a940330f69ded$var$CheckEnvironmentResult = function(result) {
    this.isWebServicePresent = result.isWebServicePresent;
    this.isBrowserSupported = result.isBrowserSupported;
    this.isFrameworkInstalled = result.isFrameworkInstalled;
    this.errorDetails = result.errorDetails;
};
var $249a940330f69ded$export$2e2bcd8739ae039 = $249a940330f69ded$var$CheckEnvironmentResult;



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
 */ const $80f85c90e563111c$var$createLabelWriterPrintParamsXml = function(params) {
    if (!params) return '';
    const doc = $c7e2149312647974$export$2e2bcd8739ae039.parse('<LabelWriterPrintParams/>');
    const root = doc.documentElement;
    if (params.copies) $c7e2149312647974$export$2e2bcd8739ae039.appendElement(root, 'Copies', params.copies.toString());
    if (params.jobTitle) $c7e2149312647974$export$2e2bcd8739ae039.appendElement(root, 'JobTitle', params.jobTitle);
    if (params.flowDirection) $c7e2149312647974$export$2e2bcd8739ae039.appendElement(root, 'FlowDirection', params.flowDirection);
    if (params.printQuality) $c7e2149312647974$export$2e2bcd8739ae039.appendElement(root, 'PrintQuality', params.printQuality);
    if (params.twinTurboRoll) $c7e2149312647974$export$2e2bcd8739ae039.appendElement(root, 'TwinTurboRoll', params.twinTurboRoll);
    // let result = Xml.serialize(doc);
    // alert(result);
    // return result;
    return $c7e2149312647974$export$2e2bcd8739ae039.serialize(doc);
};
var $80f85c90e563111c$export$2e2bcd8739ae039 = $80f85c90e563111c$var$createLabelWriterPrintParamsXml;


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
 */ const $af005cfdb1cc667d$var$NetworkPrinterName = function(printerUri, printerName) {
    this.printerUri = printerUri;
    this.printerName = printerName;
};
/** Determines is the printer local or network
 Local means installed as a Printer on the Desktop machine
 where JavaScript is executing, e.g. it is a printer available as 'printer' on Windows machine
 'Network' means a printer installed on a 'proxy' machine or a real network printer (in the future)

 @param {string} printerName
 @return {boolean}
 */ $af005cfdb1cc667d$var$NetworkPrinterName.isNetworkPrinter = function(printerName) {
    // a network printer should have a valid uri with 'dymo' as the uri's scheme
    const printerUri = new goog.Uri(printerName);
    return printerUri.hasScheme() && printerUri.hasDomain() && printerUri.hasPath();
};
/** Splits network printer name into two parts, the printer's uri and a
 'local' printer name

 @param {string} networkPrinterName
 @return {NetworkPrinterName}
 */ $af005cfdb1cc667d$var$NetworkPrinterName.splitNetworkPrinterName = function(networkPrinterName) {
    const uri = new goog.Uri(networkPrinterName);
    let printerName = uri.getPath();
    if (printerName.length > 1 && printerName.charAt(0) == '/') printerName = printerName.slice(1);
    uri.setPath('');
    return new $af005cfdb1cc667d$var$NetworkPrinterName(uri.toString(), printerName);
};
var $af005cfdb1cc667d$export$2e2bcd8739ae039 = $af005cfdb1cc667d$var$NetworkPrinterName;



const $7167f933cef13ee5$export$64fe4026710ed9e3 = function(printerName) {
    let result = false;
    try {
        result = $357bab5e353b9a9d$export$118613715be2faef().is550Printer(printerName);
    } catch (e) {
    }
    return result;
};
const $7167f933cef13ee5$export$2a08c1724d0b9966 = function(printerName) {
    return $357bab5e353b9a9d$export$118613715be2faef().is550PrinterAsync(printerName).then(function(resultData) {
        return resultData;
    });
};
const $7167f933cef13ee5$export$351966686cb22eb = function(printerName) {
    let result = '';
    try {
        result = $357bab5e353b9a9d$export$118613715be2faef().getConsumableInfoIn550Printer(printerName);
    } catch (e) {
    }
    return result;
};
const $7167f933cef13ee5$export$50df381d9f62ba6a = function(printerName) {
    return $357bab5e353b9a9d$export$118613715be2faef().getConsumableInfoIn550PrinterAsync(printerName).then(function(resultData) {
        return resultData;
    });
};


const $7128567ed2719561$var$dymo = {
    xml: $c7e2149312647974$export$2e2bcd8739ae039,
    uuid: $762530daf0de5182$export$2e2bcd8739ae039,
    label: {
        framework: {
            trace: false,
            PrinterInfo: $730e2c8499c69cff$export$2e2bcd8739ae039,
            AddressBarcodePosition: $47261f1d7d3d2ea1$export$2e2bcd8739ae039,
            TapeCutMode: $d64eec3b73a0f03c$export$2e2bcd8739ae039,
            TapePrinterInfo: $2ce209adcfae9472$export$2e2bcd8739ae039,
            PrintJob: $f6bbdda70da0550a$export$2e2bcd8739ae039,
            Label: $9a9d7ad69b4a3113$export$2e2bcd8739ae039,
            FlowDirection: $f203f21b73a1a142$export$2e2bcd8739ae039,
            PrintJobStatusInfo: $af45e04149270ecf$export$2e2bcd8739ae039,
            LabelWriterPrintQuality: $302ed3e4ae7cc699$export$2e2bcd8739ae039,
            LabelWriterPrinterInfo: $180af6f8d627d8c4$export$2e2bcd8739ae039,
            ILabelSetRecord: $03ab2e58258d4619$export$2e2bcd8739ae039,
            ILabel: $4149dcedf033ebb8$export$2e2bcd8739ae039,
            LabelSetBuilder: $dd6befa10a7b6c73$export$2e2bcd8739ae039,
            NetworkPrinter: (/*@__PURE__*/$parcel$interopDefault($8906eb39e86ecbaa$exports)),
            NetworkPrinterName: $af005cfdb1cc667d$export$2e2bcd8739ae039,
            createLabelWriterPrintParamsXml: $80f85c90e563111c$export$2e2bcd8739ae039,
            DZPrinterInfo: $cd37e7dc69c02314$export$2e2bcd8739ae039,
            LabelSetRecord: $1d177bef11cfbeda$export$2e2bcd8739ae039,
            TapeAlignment: $8c6e0b8ac29c1d85$export$2e2bcd8739ae039,
            TwinTurboRoll: $1c16ef16e67ae454$export$2e2bcd8739ae039,
            CheckEnvironmentResult: $249a940330f69ded$export$2e2bcd8739ae039,
            is550Printer: $7167f933cef13ee5$export$64fe4026710ed9e3,
            is550PrinterAsync: $7167f933cef13ee5$export$2a08c1724d0b9966,
            getConsumableInfoIn550Printer: $7167f933cef13ee5$export$351966686cb22eb,
            getConsumableInfoIn550PrinterAsync: $7167f933cef13ee5$export$50df381d9f62ba6a
        }
    }
};
var $7128567ed2719561$export$2e2bcd8739ae039 = $7128567ed2719561$var$dymo;


const $dd6befa10a7b6c73$var$LabelSetBuilder = function() {
    /**
   @private
   */ this._records = [];
};
/** Returns label set records
 @export
 @return {Array.<ILabelSetRecord>}
 */ $dd6befa10a7b6c73$var$LabelSetBuilder.prototype.getRecords = function() {
    return this._records;
};
/** Adds a new record to the label-set
 // Returns created record object
 @export
 @return {ILabelSetRecord}
 */ $dd6befa10a7b6c73$var$LabelSetBuilder.prototype.addRecord = function() {
    const record = new $1d177bef11cfbeda$export$2e2bcd8739ae039();
    this._records.push(record);
    // noinspection JSValidateTypes
    return record;
};
/** Convert record objects into xml format defined in LabelSet.xsd
 // Returned xml can be passed to dymo.label.framework.printLabel() as labelSetXml parameter.
 // Parameters:
 //      records - records to convert to xml. records should be array-like object of associative-arrays with object names as keys and object text as values.
 // Return string contains xml data
 // Note: this function can be used independent of other LabelSetBuilder methods if records data is generated by other functions

 @export
 @param {Array.<Object.<string, string>>} records
 */ $dd6befa10a7b6c73$var$LabelSetBuilder.toXml = function(records) {
    // create xml representation of LabelSet
    // records is an Array-like object of associative arrays of object name/object value pairs
    const doc = $7128567ed2719561$export$2e2bcd8739ae039.xml.parse('<LabelSet/>');
    const root = doc.documentElement;
    for(let i = 0; i < records.length; i++){
        const record = records[i];
        const recordElem = doc.createElement('LabelRecord');
        for(const objectName in record){
            let objectValue = record[objectName];
            if (typeof objectValue === 'function') continue;
            objectValue = objectValue.toString();
            const objectElem = doc.createElement('ObjectData');
            objectElem.setAttribute('Name', objectName);
            if (objectValue.indexOf($87a73fe4e23c61da$export$9319d8092206b03f) == 0) {
                // parse the markup into xml and insert it as is
                const markupDoc = $7128567ed2719561$export$2e2bcd8739ae039.xml.parse(objectValue);
                objectElem.appendChild(markupDoc.documentElement.cloneNode(true));
            } else {
                const textNode = doc.createTextNode(objectValue);
                objectElem.appendChild(textNode);
            }
            recordElem.appendChild(objectElem);
        }
        root.appendChild(recordElem);
    }
    return $7128567ed2719561$export$2e2bcd8739ae039.xml.serialize(doc);
};
/** Converts the builder to a xml string
 @override
 */ $dd6befa10a7b6c73$var$LabelSetBuilder.prototype.toString = function() {
    return $dd6befa10a7b6c73$var$LabelSetBuilder.toXml(this._records);
};
var $dd6befa10a7b6c73$export$2e2bcd8739ae039 = $dd6befa10a7b6c73$var$LabelSetBuilder;


const $98024307a5d0726a$export$bec0ec21ab4579a = (config = {
}, callback)=>{
    Object.keys(config).forEach((key)=>{
        $87a73fe4e23c61da$export$61fd6f1ddd0c20e2(key, config[key]);
    });
    return new $357bab5e353b9a9d$export$118613715be2faef(callback);
};
module.exports = {
    default: $98024307a5d0726a$export$bec0ec21ab4579a(),
    createFramework: $357bab5e353b9a9d$export$118613715be2faef,
    sampleSingleLabel: $8dade80d0b9d9e5d$export$f71ef76cc1435eaa,
    LabelSetBuilder: $dd6befa10a7b6c73$export$2e2bcd8739ae039
};


//# sourceMappingURL=dymo-js-sdk.js.map
