import goog from 'google-closure-library';
import PrintJobStatus from '../PrintJobStatus';
import _createFramework from '../createFramework';
import PrintJobStatusInfo from '../PrintJobStatusInfo';

/**
 Provides 'print job' abstraction
 @public
 @constructor
 @param {PrinterInfo} printerInfo printer the print job has been created for
 @param {string} jobId print job Id
 */

const PrintJob = function (printerInfo, jobId) {
  /**
   @private
   */
  this._printerInfo = printerInfo;

  /**
   @private
   */
  this._jobId = jobId;
};

/**
 Gets printer name the print job has been created for
 @return {string}
 */
PrintJob.prototype.getPrinterName = function () {
  return this._printerInfo.name;
};

/**
 Gets print job id
 @return {string}
 */
PrintJob.prototype.getJobId = function () {
  return this._jobId;
};

/**
 Gets a status of the print job
 @public
 @param {function(PrintJobStatusInfo)} replyCallback a function call when the status is available
 @return {undefined}
 */
PrintJob.prototype.getStatus = function (replyCallback) {
  if (!this._printerInfo.isNetworkPrinter()) {
    let statusInfo;
    try {
      statusInfo = _createFramework().getJobStatus(this._printerInfo.name, this._jobId);
    } catch (e) {
      statusInfo = new PrintJobStatusInfo(
        this.getPrinterName(),
        this._jobId,
        PrintJobStatus.ProcessingError,
        e.message || e,
      );
    }

    replyCallback(statusInfo);
  } else this.getStatusForNetworkPrinter(replyCallback);
};

// noinspection JSCheckFunctionSignatures
/**
 Gets a status of the print job
 @private
 @param {function(PrintJobStatusInfo)} replyCallback a function call when the status is available
 */
PrintJob.prototype.getStatusForNetworkPrinter = function (replyCallback) {
  const printerName = this.getPrinterName();
  const jobId = this._jobId;

  // let networkPrinterName = splitNetworkPrinterName(printerName);

  // try to get data
  const { printerUri } = this._printerInfo;
  // noinspection JSCheckFunctionSignatures
  const jsonp2 = new goog.net.Jsonp(goog.Uri.resolve(printerUri, 'getPrintJobStatus'), 'callback');
  jsonp2.send(
    { jobId, printerName: this._printerInfo.originalPrinterName },
    function (pjs) {
      const jobStatusInfo = new PrintJobStatusInfo(
        printerName,
        jobId,
        pjs.status,
        pjs.statusMessage,
      );

      replyCallback(jobStatusInfo);
    },
    function () {
      const jobStatusInfo = new PrintJobStatusInfo(
        printerName,
        jobId,
        PrintJobStatus.ProcessingError,
        `Error processing getPrintJobStatus(): Unable to contact "${printerUri}"`,
      );

      replyCallback(jobStatusInfo);
    },
  );
};

export default PrintJob;
