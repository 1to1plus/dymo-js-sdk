import { getSetting, setSetting, settings } from './settings';
import { createFramework as initFramework } from './dymo/label/framework/createFramework';
import { sampleSingleLabel } from './dymo/label/framework/createFramework/__tests__/data/singleLabel';
import { default as LabelSetBuilder } from './dymo/label/framework/LabelSetBuilder';
import { default as MissingPrinter } from './Exceptions/MissingPrinter';

/**
 * Initializes the application with the provided configuration.
 */
export declare const initApp: (config?: Record<string, any>, callback?: any | undefined, checkWebService?: any) => any;
export declare const exceptions: {
    MissingPrinter: typeof MissingPrinter;
};
export { initFramework as createFramework, initFramework, sampleSingleLabel, LabelSetBuilder, setSetting, getSetting, settings, };
export { default as LabelSetRecord } from './dymo/label/framework/LabelSetRecord';
export default initApp;
