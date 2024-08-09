import GeneralRecord from '../../../../types/generalRecord';

/** Specifies how objects and object text are laid down on the label. For Middle East labels/content specify RightToLeft, otherwise "LeftToRight" (default)
 @enum {string}
 @export
 */
const FlowDirection: GeneralRecord = {};
/** @export */
FlowDirection.LeftToRight = 'LeftToRight';
/** @export */
FlowDirection.RightToLeft = 'RightToLeft';

export default FlowDirection;
