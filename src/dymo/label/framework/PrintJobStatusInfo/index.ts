import GeneralRecord from '../../../types/generalRecord';

/**
 @public
 @constructor
 @param {string} printerName
 @param {string} jobId
 @param {number} status
 @param {string} statusMessage
 */
const PrintJobStatusInfo = function (printerName, jobId, status, statusMessage): void {
  this.printerName = printerName;
  this.jobId = jobId;
  this.status = status;
  this.statusMessage = statusMessage;
};

/**
 Parses statusStr that contains status code abd status message separates by a space
 Returns an object with 'status' and 'statusMessage' properties
 */
PrintJobStatusInfo.parse = (statusStr: string) => {
  const result: GeneralRecord = {};
  const a = statusStr.split(' ');

  if (a.length >= 1) {
    result.status = parseInt(a[0], 10);
  }

  result.statusMessage = a.slice(1).join(' ');

  return result as { status: number; statusMessage: string } & GeneralRecord;
};

export default PrintJobStatusInfo;
