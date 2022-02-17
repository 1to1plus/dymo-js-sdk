/** Specifies tape's leader and trailer on a label when printing on Tape printer
 // Center - 10mm leader and trailer
 // Left - 6mm leader, 10mm trailer
 // Right - 10mm leader, 6mm trailer
 @enum {string}
 @export
 */
const TapeAlignment = {}
/** @export */
TapeAlignment.Center = 'Center'
/** @export */
TapeAlignment.Left = 'Left'
/** @export */
TapeAlignment.Right = 'Right'

export default TapeAlignment
