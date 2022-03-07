import _createFramework from '../createFramework';

/** Loads an image from url/file and returns it as base64-encoded png stream.
 // Note: the same comments as for openLabelFile() is applied to this function as well

 @param {string} imageUri
 @return {string}
 @export
 */
const loadImageAsPngBase64 = function (imageUri) {
  return _createFramework().loadImageAsPngBase64(imageUri);
};

export default loadImageAsPngBase64;
