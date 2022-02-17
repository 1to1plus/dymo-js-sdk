import ml from './xml'
import uuid from './uuid'
import PrinterInfo from './label/framework/PrinterInfo'
import currentFramework from './label/framework/currentFramework'
import AddressBarcodePosition from './label/framework/AddressBarcodePosition'
import TapeCutMode from './label/framework/TapeCutMode'
import TapePrinterInfo from './label/framework/TapePrinterInfo'
import PrintJob from './label/framework/PrintJob'
import Label from './label/framework/Label'
import FlowDirection from './label/framework/FlowDirection'
import PrintJobStatusInfo from './label/framework/PrintJobStatusInfo'
import LabelWriterPrintQuality from './label/framework/LabelWriterPrintQuality'
import LabelWriterPrinterInfo from './label/framework/LabelWriterPrinterInfo'
import ILabelSetRecord from './label/framework/ILabelSetRecord'
import ILabel from './label/framework/ILabel'
import LabelSetBuilder from './label/framework/LabelSetBuilder'
import NetworkPrinter from './label/framework/NetworkPrinter'
import DZPrinterInfo from './label/framework/DZPrinterInfo'
import LabelSetRecord from './label/framework/LabelSetRecord'
import TapeAlignment from './label/framework/TapeAlignment'
import TwinTurboRoll from './label/framework/TwinTurboRoll'
import CheckEnvironmentResult from './label/framework/CheckEnvironmentResult'

const dymo = {
  xml: {
    ml,
  },
  uuid,
  label: {
    framework: {
      trace: false,

      PrinterInfo,
      currentFramework,
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
      ILabel,
      LabelSetBuilder,
      NetworkPrinter,
      DZPrinterInfo,
      LabelSetRecord,
      TapeAlignment,
      TwinTurboRoll,
      CheckEnvironmentResult,
    },
  },
}

export default dymo
