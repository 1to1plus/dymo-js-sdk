export declare const is550Printer: (printerName: string) => any;
export declare const is550PrinterAsync: (printerName: string) => any;
/** returns a json format that a consumable information in 550 printer such as consumable name, labels remaining and roll status.
 Params:
 - printerName - printer's name (print queue name on Mac)

 @param {string} printerName
 @return {string}
 @export
 */
export declare const getConsumableInfoIn550Printer: (printerName: string) => any;
export declare const getConsumableInfoIn550PrinterAsync: (printerName: string) => any;
