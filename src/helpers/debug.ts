import { getSetting } from '../dymo-js-sdk';

const window = {
  console: {
    log: (...params: any) => console.log(...params),
  },
};

export const traceMsg = (msg: any, { key = 'general.log', level = 'log' } = {}) => {
  if (getSetting('dymo.label.framework.trace')) {
    if (window.console && window.console.log) {
      console[level](key, msg);
    }
  }
};
