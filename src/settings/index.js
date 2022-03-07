import { get, set } from 'lodash'

export const settings = {
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

        trace: false,
      },
    },
  },
};

export const printers = [];
export const printersObj = {};

export const constants = {
  WS_CMD_STATUS: 'StatusConnected',
  WS_CMD_GET_PRINTERS: 'GetPrinters',
  WS_CMD_OPEN_LABEL: 'OpenLabelFile',
  WS_CMD_PRINT_LABEL: 'PrintLabel',
  WS_CMD_PRINT_LABEL2: 'PrintLabel2',
  WS_CMD_RENDER_LABEL: 'RenderLabel',
  WS_CMD_LOAD_IMAGE: 'LoadImageAsPngBase64',
  WS_CMD_GET_JOB_STATUS: 'GetJobStatus',
  WS_CMD_IS_550_PRINTER: 'Is550Printer',
  WS_CMD_GET_CONSUMABLE_INFO_IN_550_PRINTER: 'GetConsumableInfoIn550Printer',
};

export const TextMarkupTag = '<TextMarkup>';
export const TextMarkupClosedTag = '</TextMarkup>';

/**
 * Map of tags which have predefined values with regard to whitespace.
 * @private {!Object<string, string>}
 * @const
 */
export const PREDEFINED_TAG_VALUES_ = { IMG: ' ', BR: '\n' };

/**
 * Map of tags whose content to ignore when calculating text length.
 * @private {!Object<string, number>}
 * @const
 */
export const TAGS_TO_IGNORE_ = {
  SCRIPT: 1,
  STYLE: 1,
  HEAD: 1,
  IFRAME: 1,
  OBJECT: 1,
};

/**
 * Constants for the nodeType attribute in the Node interface.
 *
 * These constants match those specified in the Node interface. These are
 * usually present on the Node object in recent browsers, but not in older
 * browsers (specifically, early IEs) and thus are given here.
 *
 * In some browsers (early IEs), these are not defined on the Node object,
 * so they are provided here.
 *
 * See http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1950641247
 * @enum {number}
 */
export const NodeType = {
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
  NOTATION: 12,
};

/**
 * Maximum value of #hashCode, exclusive. 2^32.
 * @type {number}
 * @private
 */
export const HASHCODE_MAX_ = 0x100000000;

/**
 * The most recent unique ID. |0 is equivalent to Math.floor in this case.
 * @type {number}
 * @private
 */
export const uniqueStringCounter_ = (Math.random() * 0x80000000) | 0;

/**
 * Common Unicode string characters.
 * @enum {string}
 */
export const Unicode = {
  NBSP: '\xa0',
};

/**
 * Special chars that need to be escaped for quote.
 * @private {!Object<string, string>}
 */
export const specialEscapeChars_ = {
  '\0': '\\0',
  '\b': '\\b',
  '\f': '\\f',
  '\n': '\\n',
  '\r': '\\r',
  '\t': '\\t',
  '\x0B': '\\x0B', // '\v' is not supported in JScript
  '"': '\\"',
  '\\': '\\\\',
};

/**
 * Character mappings used internally for escapeChar.
 * @private {!Object<string, string>}
 */
export const jsEscapeCache_ = {
  "'": "\\'",
};

/**
 * Regular expression used for splitting a string into substrings of fractional
 * numbers, integers, and non-numeric characters.
 * @type {RegExp}
 * @private
 */
export const numerateCompareRegExp_ = /(\.\d+)|(\d+)|(\D+)/g;

/**
 * gets the settings fail over to the constants
 * @param {string} key - path in the settings object
 * @param {any} [defaultValue = undefined]
 * @param {boolean} [strict]
 * @return {{DETECT_DOUBLE_ESCAPING: boolean, WS_PROTOCOL: string, WS_START_PORT: number, WS_END_PORT: number, Port: number, Host: string, ASSUME_MOBILE: boolean, DEBUG: boolean, WS_COMMAND_TIMEOUT: number, WS_SVC_HOST: string, TRUSTED_SITE: boolean, dymo: {label: {framework: {trace: boolean, currentFramework: number}}}, WS_SVC_PATH: string, BASE_URL: undefined, FORCE_NON_DOM_HTML_UNESCAPING: boolean, WS_CHECK_TIMEOUT: number, WS_SVC_HOST_LEGACY: string}}
 */
export const getSetting = (key = undefined, defaultValue = undefined, strict = false) => {
  if (!key) {
    return settings
  }

  const foundSetting = get(settings, key, undefined);

  if (foundSetting === undefined && !strict) {
    return get(constants, key, defaultValue);
  }

  return foundSetting;
};

export const setSetting = (key, value) => {
  return set(settings, key, value);
};

if (!settings.BASE_URL) {
  const host = getSetting('Host');
  const port = getSetting('Port');

  const url = `${getSetting('WS_PROTOCOL') + host}:${port}/${getSetting('WS_SVC_PATH')}/`;

  setSetting('BASE_URL', url);
}

export const buildApiUrl = (
  command,
  { host = getSetting('Host'), port = getSetting('Port') } = {},
) => {
  const url = `${getSetting('WS_PROTOCOL') + host}:${port}/${getSetting('WS_SVC_PATH')}/`;

  return url + command;
};

export const addPrinterToCollection = (printer, result) => {
  const { name: printerName } = printer;

  printers.push(printer);
  printersObj[printerName] = printer;

  result.push(printer);
  result.byIndex.push(printer);

  if (printerName.match(/^\d+$/)) {
    console.error(
      `Printer name consisting of numbers only (${printerName}) will break proper array behavior. Consider using "byIndex" property for accessing elements by index reliably.`,
    );
  }
  if (printerName === 'length') {
    console.error('Using "length" as printer name overrides Array.length property!');
  }

  result[printerName] = printer;
};
