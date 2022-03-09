/**
 @public
 @constructor
 @param {string} printerName
 @param {string} jobId
 @param {number} status
 @param {string} statusMessage
 */
const PrintJobStatusInfo = function (
  printerName, jobId, status, statusMessage) {
  this.printerName = printerName
  this.jobId = jobId
  this.status = status
  this.statusMessage = statusMessage
}

/**
 Parses statusStr that contains status code abd status message separates by a space
 Returns an object with 'status' and 'statusMessage' properties
 @param {string} statusStr
 @return {{status: number, statusMessage: string}}
 */
PrintJobStatusInfo.parse = function (statusStr) {
  const result = {}
  const a = statusStr.split(' ')

  if (a.length >= 1) {
    result.status = parseInt(a[0], 10)
  }

  result.statusMessage = a.slice(1).join(' ')

  return result
};

export default PrintJobStatusInfo
