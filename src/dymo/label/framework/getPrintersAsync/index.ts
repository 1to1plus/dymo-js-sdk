import { createFramework } from '../createFramework';
import { getPrinters } from '../OneOffFunctions';

/**
 @export
 */
const getPrintersAsync = function () {
  return createFramework()
    .getPrintersAsync()
    .then(function (printersXml: any) {
      // get 'local' printers if we can
      return getPrinters(printersXml);
    });
};

export default getPrintersAsync;
