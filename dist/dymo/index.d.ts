import { default as ILabelSetRecord } from './label/framework/ILabelSetRecord';
import { default as LabelSetRecord } from './label/framework/LabelSetRecord';

declare const dymo: {
    xml: any;
    label: {
        framework: {
            trace: boolean;
            PrinterInfo: (printerType: string, name: string, modelName: string, isConnected: boolean, isLocal: boolean) => void;
            AddressBarcodePosition: import('../types/generalRecord').default;
            TapeCutMode: {
                AutoCut: string;
                ChainMarks: string;
            };
            TapePrinterInfo: (name: any, modelName: any, isConnected: any, isLocal: any, isAutoCutSupported: any) => void;
            PrintJob: (printerInfo: any, jobId: any) => void;
            Label: (labelXml: string) => void;
            FlowDirection: import('../types/generalRecord').default;
            PrintJobStatusInfo: {
                (printerName: any, jobId: any, status: any, statusMessage: any): void;
                parse(statusStr: string): {
                    status: number;
                    statusMessage: string;
                } & import('../types/generalRecord').default;
            };
            LabelWriterPrintQuality: import('../types/generalRecord').default;
            LabelWriterPrinterInfo: (name: any, modelName: any, isConnected: any, isLocal: any, isTwinTurbo: any) => void;
            ILabelSetRecord: typeof ILabelSetRecord;
            createLabelWriterPrintParamsXml: (params: any) => any;
            DZPrinterInfo: (name: any, modelName: any, isConnected: any, isLocal: any, isAutoCutSupported: any) => void;
            LabelSetRecord: typeof LabelSetRecord;
            TapeAlignment: {
                Center: string;
                Left: string;
                Right: string;
            };
            TwinTurboRoll: import('../types/generalRecord').default;
            CheckEnvironmentResult: (result: any) => void;
            is550Printer: (printerName: string) => any;
            is550PrinterAsync: (printerName: string) => any;
            getConsumableInfoIn550Printer: (printerName: string) => any;
            getConsumableInfoIn550PrinterAsync: (printerName: string) => any;
        };
    };
};
export default dymo;
