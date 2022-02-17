/**
 Create printer collection
 @private
 @return {Array}
 */
const createPrintersCollection = () => {
  let result = []
  result['byIndex'] = []

  Object.defineProperty(result, 'byIndex', {
    enumerable: false,
    value: [],
  })

  return result
}

export default createPrintersCollection
