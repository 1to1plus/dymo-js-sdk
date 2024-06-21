import { default as GeneralRecord } from '../../../../types/generalRecord';

/**
 @public
 @constructor
 @param {string} printerName
 @param {string} jobId
 @param {number} status
 @param {string} statusMessage
 */
declare const PrintJobStatusInfo: {
    (printerName: any, jobId: any, status: any, statusMessage: any): void;
    /**
     Parses statusStr that contains status code abd status message separates by a space
     Returns an object with 'status' and 'statusMessage' properties
     */
    parse(statusStr: string): {
        status: number;
        statusMessage: string;
    } & GeneralRecord;
};
export default PrintJobStatusInfo;
