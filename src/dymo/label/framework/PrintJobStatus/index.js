/** Specifies print job status
 @export
 */
const PrintJobStatus = {}
// real job status (when a job has been successfully created on the host machine / network printer)

/// Unknown/unexpected status, see statusMessage for more details
/** @export */
PrintJobStatus.Unknown = 0
/** @export */
PrintJobStatus.Printing = 1
/** @export */
PrintJobStatus.Finished = 2
/** @export */
PrintJobStatus.Error = 3
/** @export */
PrintJobStatus.PaperOut = 4
/** @export */
PrintJobStatus.InQueue = 5

// surrogate statuses

/** @export */
PrintJobStatus.ProcessingError = -1
/** @export */
PrintJobStatus.PrinterBusy = -2
/** @export */
PrintJobStatus.InvalidJobId = -3
/** @export */
PrintJobStatus.NotSpooled = -4

export default PrintJobStatus
