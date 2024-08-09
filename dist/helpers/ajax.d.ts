export declare const GET = "get";
export declare const POST = "post";
export declare const setCachedService: (port: number, host: string) => void;
export declare const getAjaxPromise: (port: number, host: string) => Promise<any>;
export declare const _findWebService: (host: string, successFindWebService: any, errorFindWebService: any) => Promise<void>;
export declare const asyncFindWebService: (onSuccess: any, onError: any) => Promise<void>;
export declare const syncCheckWebService: (onSuccess: any, onError: any) => Promise<void>;
export declare const invokeWsCommandAsync: (method: string, command: string, params?: {}) => Promise<any>;
