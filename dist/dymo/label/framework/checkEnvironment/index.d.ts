/**
 Checks is browser environment suitable for the framework
 */
declare const checkEnvironment: (onEnvironmentCheckedCallback: any, checkWebService: any) => Promise<{
    isBrowserSupported: boolean;
    isFrameworkInstalled: boolean;
    isWebServicePresent: boolean;
    errorDetails: string;
}>;
export default checkEnvironment;
