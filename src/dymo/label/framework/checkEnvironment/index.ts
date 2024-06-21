import { traceMsg } from '../../../../helpers/debug';
import { getSetting } from '../../../../settings';
import { asyncFindWebService, syncCheckWebService } from '../../../../helpers/ajax';

/**
 Checks is browser environment suitable for the framework
 */
const checkEnvironment = async function(onEnvironmentCheckedCallback: any, checkWebService: any) {
  const result = {
    isBrowserSupported: false,
    isFrameworkInstalled: false,
    isWebServicePresent: false,
    errorDetails: '',
  };

  const onWebServiceFound = async function() {
    result.isBrowserSupported = true;
    result.isFrameworkInstalled = true;
    result.isWebServicePresent = true;

    onEnvironmentCheckedCallback && (await onEnvironmentCheckedCallback(result));
  };

  const onLegacyPluginFound = async function() {
    result.isBrowserSupported = true;
    result.isFrameworkInstalled = true;
    result.isWebServicePresent = false;

    onEnvironmentCheckedCallback && (await onEnvironmentCheckedCallback(result));
  };

  const checkLegacyPlugins = function() {
    traceMsg('checkLegacyPlugins');
    result.isWebServicePresent = false;
    result.isBrowserSupported = true;
  };

  const errorFindWebService = function(e) {
    checkLegacyPlugins();
    onEnvironmentCheckedCallback && onEnvironmentCheckedCallback({ ...result, error: e });
  };

  if (getSetting('dymo.label.framework.currentFramework')) {
    traceMsg('checkEnvironment > return existing instance of framework');
    if (getSetting('dymo.label.framework.currentFramework') == 2) {
      await onWebServiceFound();
    } else {
      await onLegacyPluginFound();
    }

    return result;
  }

  if (checkWebService) {
    await asyncFindWebService(onWebServiceFound, errorFindWebService);
  } else {
    await syncCheckWebService(onWebServiceFound, errorFindWebService);
  }

  return result;
};
export default checkEnvironment;
