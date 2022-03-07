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

module.exports = {
  default: initApp(),
  createFramework: initFramework,
  sampleSingleLabel: sampleLabel,
  LabelSetBuilder: _LabelSetBuilder,
}
