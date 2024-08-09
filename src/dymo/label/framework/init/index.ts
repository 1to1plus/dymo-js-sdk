import { createFramework } from '../createFramework';

/**
 @export
 */
const init = function (callBack) {
  createFramework(callBack, true);
};

export default init;
