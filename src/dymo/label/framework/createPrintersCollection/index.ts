/**
 Create printer collection
 @private
 @return {Array}
 */
const createPrintersCollection = () => {
  const result = [];

  Object.defineProperty(result, 'byIndex', {
    enumerable: false,
    value: [],
  });

  return result;
};

export default createPrintersCollection;
