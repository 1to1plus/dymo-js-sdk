import { getSetting } from '../settings'

const window = {};

export const traceMsg = (msg, { key = 'general.log', level = 'log' } = {}) => {
  if (getSetting('dymo.label.framework.trace')) {
    if (window.console && window.console.log) {
      console[level](key, msg)
    }
  }
}
