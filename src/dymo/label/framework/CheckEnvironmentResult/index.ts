/**
 @constructor
 @private
 @param {Object} result
 */
const CheckEnvironmentResult = function (result) {
  this.isWebServicePresent = result.isWebServicePresent;
  this.isBrowserSupported = result.isBrowserSupported;
  this.isFrameworkInstalled = result.isFrameworkInstalled;
  this.errorDetails = result.errorDetails;
};

export default CheckEnvironmentResult;
