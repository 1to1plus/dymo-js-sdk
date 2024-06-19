import { getSetting, setSetting, settings } from './settings';
import { createFramework as initFramework } from './dymo/label/framework/createFramework';
import { sampleSingleLabel } from './dymo/label/framework/createFramework/__tests__/data/singleLabel';
import LabelSetBuilder from './dymo/label/framework/LabelSetBuilder';

/**
 * Initializes the application with the provided configuration.
 */
export const initApp = (
  config: Record<string, any> = {},
  callback: any | undefined = undefined,
) => {
  Object.keys(config).forEach((key) => {
    setSetting(key, config[key]);
  });

  return initFramework(callback);
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

export default initApp;
