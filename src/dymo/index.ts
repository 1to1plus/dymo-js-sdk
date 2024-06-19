import xml from './xml';
import PrinterInfo from './label/framework/PrinterInfo';
import AddressBarcodePosition from './label/framework/AddressBarcodePosition';
import TapeCutMode from './label/framework/TapeCutMode';
import TapePrinterInfo from './label/framework/TapePrinterInfo';
import PrintJob from './label/framework/PrintJob';
import Label from './label/framework/Label';
import FlowDirection from './label/framework/FlowDirection';
import PrintJobStatusInfo from './label/framework/PrintJobStatusInfo';
import LabelWriterPrintQuality from './label/framework/LabelWriterPrintQuality';
import LabelWriterPrinterInfo from './label/framework/LabelWriterPrinterInfo';
import ILabelSetRecord from './label/framework/ILabelSetRecord';
import DZPrinterInfo from './label/framework/DZPrinterInfo';
import LabelSetRecord from './label/framework/LabelSetRecord';
import TapeAlignment from './label/framework/TapeAlignment';
import TwinTurboRoll from './label/framework/TwinTurboRoll';
import CheckEnvironmentResult from './label/framework/CheckEnvironmentResult';
import createLabelWriterPrintParamsXml from './label/framework/createLabelWriterPrintParamsXml';
import {
  getConsumableInfoIn550Printer,
  getConsumableInfoIn550PrinterAsync,
  is550Printer,
  is550PrinterAsync,
} from './label/framework/SpecialPrinterLogic';

const dymo = {
  xml,
  label: {
    framework: {
      trace: false,

      PrinterInfo,
      AddressBarcodePosition,
      TapeCutMode,
      TapePrinterInfo,
      PrintJob,
      Label,
      FlowDirection,
      PrintJobStatusInfo,
      LabelWriterPrintQuality,
      LabelWriterPrinterInfo,
      ILabelSetRecord,
      createLabelWriterPrintParamsXml,
      DZPrinterInfo,
      LabelSetRecord,
      TapeAlignment,
      TwinTurboRoll,
      CheckEnvironmentResult,

      is550Printer,
      is550PrinterAsync,
      getConsumableInfoIn550Printer,
      getConsumableInfoIn550PrinterAsync,
    },
  },
};

export default dymo;
