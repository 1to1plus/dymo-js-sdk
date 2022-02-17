import { traceMsg } from '../../../../helpers/debug'

/**
 Checks is browser enviroment suitable for the framework
 @export
 */
const checkEnvironment = function (
  onEnvironmentCheckedCallback, checkWebService) {
  let result = {}

  result['isBrowserSupported'] = false
  result['isFrameworkInstalled'] = false
  result['isWebServicePresent'] = false
  result['errorDetails'] = ''

  let onWebServiceFound = function () {
    result['isBrowserSupported'] = true
    result['isFrameworkInstalled'] = true
    result['isWebServicePresent'] = true

    onEnvironmentCheckedCallback && onEnvironmentCheckedCallback(result)
  }

  let onLegacyPluginFound = function () {
    result['isBrowserSupported'] = true
    result['isFrameworkInstalled'] = true
    result['isWebServicePresent'] = false

    onEnvironmentCheckedCallback && onEnvironmentCheckedCallback(result)
  }

  let checkLegacyPlugins = function () {
    traceMsg('checkLegacyPlugins')
    result['isWebServicePresent'] = false
    let platform = window.navigator.platform

    if (platform.indexOf('Win') != -1) {
      traceMsg('checkLegacyPlugins > WIN platform ')
      // on Windows IE and Firefox are only supported
      if ('ActiveXObject' in window) //IE
      {
        traceMsg('checkLegacyPlugins > ActiveXObject')
        result['isBrowserSupported'] = true
        try {
          let framework = new ActiveXObject(
            'DYMOLabelFrameworkIEPlugin.Plugin')
          if (typeof framework != 'object')
            result['errorDetails'] = 'Unable to create DYMO.Label.Framework ActiveX object. Check that DYMO.Label.Framework is installed'
          else
            result['isFrameworkInstalled'] = true
        } catch (e) {
          result['errorDetails'] = 'Unable to create DYMO.Label.Framework ActiveX object. Check that DYMO.Label.Framework is installed. Exception details: ' +
            e
        }

      } else {
        traceMsg('checkLegacyPlugins > non-IE')
        // all other major browsers are supported using NSAPI plugin
        result['isBrowserSupported'] = true

        //enum installed plugin to find dymo one
        if (_findPlugin('application/x-dymolabel')) {
          traceMsg('checkLegacyPlugins > \'application/x-dymolabel\'')
          result['isFrameworkInstalled'] = true
        } else
          result['errorDetails'] = 'DYMO Label Framework Plugin is not installed'

      }
    } else if (platform.indexOf('Mac') != -1) {
      traceMsg('checkLegacyPlugins > Mac platform')

      // we support all the 'major' browsers on Mac
      result['isBrowserSupported'] = true

      // try to find Safari (WEbKit-style) plugin first
      let safariPluginFound = _findPlugin('application/x-dymolabel')

      if (safariPluginFound) {
        traceMsg('checkLegacyPlugins > safariPluginFound')
        // check version, should be at least 2.0
        let safariPlugin = _createSafariPlugin()
        if (safariPlugin.GetAPIVersion() >= '2.0')
          result['isFrameworkInstalled'] = true
        else
          result['errorDetails'] = 'DYMO Label Safari Plugin is installed but outdated. Install the latest version.'
      } else {
        // try to load NSAPI plugin
        if (_findPlugin('application/x-npapi-dymolabel')) {
          traceMsg('checkLegacyPlugins > \'application/x-npapi-dymolabel\'')
          // Safari 5.1 has a bug/feature when running in 32-bit mode (to set, right click on Safari Icon, select 'Info', check 'Open in 32-bit mode')
          // the plugin is loaded/regisered, but it does not export any functions to call
          let safariPlugin = _createMacNsapiPlugin()
          if (!safariPlugin || !safariPlugin.getPrinters)
            result['errorDetails'] = 'DYMO NSAPI plugin is loaded but no callable functions found. If running Safari, then run it in 64-bit mode (MacOS X >= 10.7) or set "Open using Rosetta" option'
          else
            result['isFrameworkInstalled'] = true
        } else
          result['errorDetails'] = 'DYMO Label Plugin is not installed.'
      }
    } else
      result['errorDetails'] = 'The operating system is not supported.'
  }

  let errorFindWebService = function () {
    checkLegacyPlugins()
    onEnvironmentCheckedCallback && onEnvironmentCheckedCallback(result)
  }

  if (currentFramework) {
    traceMsg('checkEnvironment > return existing instance of framework')
    if (currentFramework == 2) {
      onWebServiceFound()
    } else {
      onLegacyPluginFound()
    }

    return result
  }

  if (checkWebService) {
    asyncFindWebService(onWebServiceFound, errorFindWebService)
  } else {
    syncCheckWebService(onWebServiceFound, errorFindWebService)
  }

  return result
}
export default checkEnvironment
