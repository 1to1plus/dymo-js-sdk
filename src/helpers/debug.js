import { getSetting } from '../settings';

export const traceMsg = (msg) => {
  if (getSetting('dymo.label.framework.trace')) {
    if (window.console && window.console.log) {
      console.log(msg);
    }
  }
};
