import { setSetting } from './settings'
import { createFramework as initFramework } from './dymo/label/framework/createFramework'
import {
  sampleSingleLabel as sampleLabel
} from './dymo/label/framework/createFramework/__tests__/data/singleLabel'
import _LabelSetBuilder from './dymo/label/framework/LabelSetBuilder'

/**
 *
 * @param config
 * @param callback
 * @return {Promise<undefined>|_createFramework}
 */
export const initApp = (config = {}, callback) => {
  Object.keys(config).forEach((key) => {
    setSetting(key, config[key])
  })

  return new initFramework(callback)
}

const dymoJsSdk = initApp()

dymoJsSdk.prototype.LabelSetBuilder = _LabelSetBuilder;
dymoJsSdk.prototype.sampleSingleLabel = sampleLabel;
dymoJsSdk.createFramework.sampleSingleLabel = createFramework;

export const createFramework = initFramework;
export const sampleSingleLabel = sampleLabel;
export const LabelSetBuilder = _LabelSetBuilder;

export default dymoJsSdk
