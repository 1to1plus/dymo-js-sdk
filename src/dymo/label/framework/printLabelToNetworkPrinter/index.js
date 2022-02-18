/** Prints a label to a network/mobile printer

 @param {dymo.label.framework.PrinterInfo} printerInfo
 @param {string} printParamsXml
 @param {string} labelXml
 @param {string} labelSetXml
 @return {dymo.label.framework.PrintJob} jobId of the submitted printJob
 */
import uuid from '../../../uuid';

function printLabelToNetworkPrinter(printerInfo, printParamsXml, labelXml, labelSetXml) {
  // send print data
  const jobId = uuid();

  // use jsonp and pl verb

  // create payload
  const payload = {
    printerName: printerInfo.originalPrinterName,
    labelXml,
    printParamsXml,
    labelSetXml,
  };
  const uri = goog.Uri.resolve(printerInfo.printerUri, 'pl');

  const payloadJson = goog.json.serialize(payload);
  const CHUNK_SIZE = 4000;
  const LAST_CHUNK_ID = -1;
  const MAX_RETRY_COUNT = 10;
  const STATUS_ACK = 0;
  const STATUS_INVALID_CHUNK_ID = -5;

  const sendOneChunk = function (chunkId, retryCount) {
    const offset = chunkId * CHUNK_SIZE;

    let chunk = '';
    if (offset >= payloadJson.length) chunkId = LAST_CHUNK_ID;
    else chunk = payloadJson.substr(offset, CHUNK_SIZE);

    // send chunk
    const jsonp = new goog.net.Jsonp(uri, 'c');

    jsonp.send(
      {
        j: jobId,
        cid: chunkId,
        pl: chunk,
      },
      function (printLabelResult) {
        // verify result
        const { status } = printLabelResult;
        const logger = new goog.debug.Logger('dymo.label.framework');
        logger.setLevel(goog.debug.Logger.Level.INFO);
        if (status == STATUS_ACK) {
          // send next chunk if any
          if (chunkId != LAST_CHUNK_ID) {
            sendOneChunk(++chunkId, 0);
          } else {
            logger.info(`Finished sending job payload for ${jobId}`);
          }
        } else if (status == STATUS_INVALID_CHUNK_ID) {
          // send last accepted chunk
          if (retryCount < MAX_RETRY_COUNT)
            sendOneChunk(++printLabelResult.lastAckChunkId, ++retryCount);
          else
            logger.warning(
              `Unable to send print job data for "${jobId}": STATUS_INVALID_CHUNK_ID: Max retry count reached`,
            );
        } else {
          // send current chunk
          if (retryCount < MAX_RETRY_COUNT) sendOneChunk(chunkId, ++retryCount);
          else
            logger.warning(`Unable to send print job data for "${jobId}": Max retry count reached`);
        }
      },
      function () {
        const logger = new goog.debug.Logger('dymo.label.framework');
        logger.setLevel(goog.debug.Logger.Level.INFO);
        if (retryCount < MAX_RETRY_COUNT) sendOneChunk(chunkId, ++retryCount);
        else
          logger.warning(
            `Unable to send print job data for "${jobId}": error: Max retry count reached`,
          );
      },
    );
  };

  sendOneChunk(0, 0);

  return new dymo.label.framework.PrintJob(printerInfo, jobId);
}

export default printLabelToNetworkPrinter;
