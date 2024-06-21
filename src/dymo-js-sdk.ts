import { getSetting, setSetting, settings } from './settings';
import { createFramework as initFramework } from './dymo/label/framework/createFramework';
import { sampleSingleLabel } from './dymo/label/framework/createFramework/__tests__/data/singleLabel';
import LabelSetBuilder from './dymo/label/framework/LabelSetBuilder';
import MissingPrinter from './Exceptions/MissingPrinter';


/**
 * Initializes the application with the provided configuration.
 */
export const initApp = (
  config: Record<string, any> = {},
  callback: any | undefined = undefined, // previous instance if, exists already
  checkWebService = undefined, // printer polling status callback
) => {
  Object.keys(config).forEach((key) => {
    setSetting(key, config[key]);
  });

  return initFramework(callback, checkWebService);
};

// used for types when using this package, optional
export const exceptions = {
  MissingPrinter,
};

export {
  initFramework as createFramework,
  initFramework,
  sampleSingleLabel,
  LabelSetBuilder,
  setSetting,
  getSetting,
  settings,
};

// used for types when using this package, optional
export { default as LabelSetRecord } from './dymo/label/framework/LabelSetRecord';

export default initApp;
