import { default as GeneralRecord } from '../../../../types/generalRecord';

/** Specifies on whitch roll to print when printing on Twin Turbo printers
 // Left - print on left roll only
 // Right - print on right roll only
 // Auto - continue printing on a different roll when current roll is out of paper. Note: it does not guarantee on whitch roll it will start printing. it can be both left or right.
 @enum {string}
 @export
 */
declare const TwinTurboRoll: GeneralRecord;
export default TwinTurboRoll;
