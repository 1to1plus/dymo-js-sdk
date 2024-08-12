import { default as LabelSetRecord } from '../LabelSetRecord';

declare class LabelSetBuilder {
    _records: any[];
    _recordLength: number;
    length: number;
    constructor();
    addRecord(): LabelSetRecord;
    /** Converts the builder to an xml string
     @override
     */
    toString(): any;
    /** Convert record objects into xml format defined in LabelSet.xsd
     // Returned xml can be passed to dymo.label.framework.printLabel() as labelSetXml parameter.
     // Parameters:
     // records - records to convert to xml.
     // records should be array-like object of associative-arrays with object names as keys and object text as values.
     // Return string contains xml data
     // Note:
     // this function can be used independent of other LabelSetBuilder methods
     // if records data is generated by other functions
     */
    static toXml(records: any[]): any;
}
export default LabelSetBuilder;
