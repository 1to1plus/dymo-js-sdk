export declare const settings: {
    DEBUG: boolean;
    DETECT_DOUBLE_ESCAPING: boolean;
    TRUSTED_SITE: boolean;
    FORCE_NON_DOM_HTML_UNESCAPING: boolean;
    ASSUME_MOBILE: boolean;
    WS_PROTOCOL: string;
    Port: number;
    Host: string;
    WS_START_PORT: number;
    WS_END_PORT: number;
    WS_CHECK_TIMEOUT: number;
    WS_COMMAND_TIMEOUT: number;
    WS_SVC_HOST: string;
    WS_SVC_HOST_LEGACY: string;
    WS_SVC_PATH: string;
    BASE_URL: any;
    dymo: {
        label: {
            framework: {
                currentFramework: number;
                trace: boolean;
            };
        };
    };
};
export declare const printers: any[];
export declare const printersObj: {};
export declare const constants: {
    WS_CMD_STATUS: string;
    WS_CMD_GET_PRINTERS: string;
    WS_CMD_OPEN_LABEL: string;
    WS_CMD_PRINT_LABEL: string;
    WS_CMD_PRINT_LABEL2: string;
    WS_CMD_RENDER_LABEL: string;
    WS_CMD_LOAD_IMAGE: string;
    WS_CMD_GET_JOB_STATUS: string;
    WS_CMD_IS_550_PRINTER: string;
    WS_CMD_GET_CONSUMABLE_INFO_IN_550_PRINTER: string;
};
export declare const TextMarkupTag = "<TextMarkup>";
export declare const TextMarkupClosedTag = "</TextMarkup>";
/**
 * Map of tags which have predefined values with regard to whitespace.
 * @private {!Object<string, string>}
 * @const
 */
export declare const PREDEFINED_TAG_VALUES_: {
    IMG: string;
    BR: string;
};
/**
 * Map of tags whose content to ignore when calculating text length.
 * @private {!Object<string, number>}
 * @const
 */
export declare const TAGS_TO_IGNORE_: {
    SCRIPT: number;
    STYLE: number;
    HEAD: number;
    IFRAME: number;
    OBJECT: number;
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
export declare const NodeType: {
    ELEMENT: number;
    ATTRIBUTE: number;
    TEXT: number;
    CDATA_SECTION: number;
    ENTITY_REFERENCE: number;
    ENTITY: number;
    PROCESSING_INSTRUCTION: number;
    COMMENT: number;
    DOCUMENT: number;
    DOCUMENT_TYPE: number;
    DOCUMENT_FRAGMENT: number;
    NOTATION: number;
};
/**
 * Maximum value of #hashCode, exclusive. 2^32.
 * @private
 */
export declare const HASHCODE_MAX_ = 4294967296;
/**
 * The most recent unique ID. |0 is equivalent to Math.floor in this case.
 * @private
 */
export declare const uniqueStringCounter_: number;
/**
 * Common Unicode string characters.
 * @enum {string}
 */
export declare const Unicode: {
    NBSP: string;
};
/**
 * Special chars that need to be escaped for quote.
 * @private {!Object<string, string>}
 */
export declare const specialEscapeChars_: {
    '\0': string;
    '\b': string;
    '\f': string;
    '\n': string;
    '\r': string;
    '\t': string;
    '\v': string;
    '"': string;
    '\\': string;
};
/**
 * Character mappings used internally for escapeChar.
 * @private {!Object<string, string>}
 */
export declare const jsEscapeCache_: {
    "'": string;
};
/**
 * Regular expression used for splitting a string into substrings of fractional
 * numbers, integers, and non-numeric characters.
 * @private
 */
export declare const numerateCompareRegExp_: RegExp;
/**
 * gets the settings fail over to the constants
 */
export declare const getSetting: (key?: (string | number | symbol)[] | string | number | symbol, defaultValue?: any, strict?: boolean) => any;
export declare const reGenerateBaseUrl: () => void;
export declare const setSetting: (key: string, value: any) => {
    DEBUG: boolean;
    DETECT_DOUBLE_ESCAPING: boolean;
    TRUSTED_SITE: boolean;
    FORCE_NON_DOM_HTML_UNESCAPING: boolean;
    ASSUME_MOBILE: boolean;
    WS_PROTOCOL: string;
    Port: number;
    Host: string;
    WS_START_PORT: number;
    WS_END_PORT: number;
    WS_CHECK_TIMEOUT: number;
    WS_COMMAND_TIMEOUT: number;
    WS_SVC_HOST: string;
    WS_SVC_HOST_LEGACY: string;
    WS_SVC_PATH: string;
    BASE_URL: any;
    dymo: {
        label: {
            framework: {
                currentFramework: number;
                trace: boolean;
            };
        };
    };
};
export declare const buildApiUrl: (command: string, { host, port }?: {
    host?: any;
    port?: any;
}) => string;
export declare const addPrinterToCollection: (printer: any, result: any) => void;
