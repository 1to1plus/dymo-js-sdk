import { setSetting as _setSetting, getSetting as _getSetting } from './settings'
import { createFramework as initFramework } from './dymo/label/framework/createFramework'

/**
 *
 * @param config
 * @param callback
 * @return {Promise<undefined>|_createFramework}
 */
export const initApp = (config = {}, callback) => {
  Object.keys(config).forEach((key) => {
    _setSetting(key, config[key])
  })

  return initFramework(callback)
}

export const createFramework = initFramework;
export const sampleSingleLabel = require('./dymo/label/framework/createFramework/__tests__/data/singleLabel').sampleSingleLabel;
export const LabelSetBuilder = require('./dymo/label/framework/LabelSetBuilder').default;
export const setSetting = _setSetting;
export const getSetting = _getSetting;

export default initApp
