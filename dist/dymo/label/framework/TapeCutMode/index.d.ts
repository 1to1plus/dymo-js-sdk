/** Specifies how tape is cut between label when printing multiple labels on Tape printers.
 // Note: it affects multiple pages print jobs only, if one page job is printed the tape is always cut.
 // AutoCut - cut tape between pages
 // ChainMarks - draw a mark between pages
 @enum {string}
 @export
 */
declare const TapeCutMode: {
    AutoCut: string;
    ChainMarks: string;
};
export default TapeCutMode;
