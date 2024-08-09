# Dymo JS framework

## My main entrypoint and usage starts in

src/DlsWebService/index.ts

### Typical simple usage might look something like this

```typescript
import * as dymoJsSdk from 'dymo-js-sdk'
const { default: initFramework, LabelSetBuilder } = dymoJsSdk

const printerService = await initFramework()

const printers = await printerService.getPrinters()
const printerToUse = printers[0] // maybe look at the list and choose one

// Get the lap builder instance 
const labelSetBuilder = new LabelSetBuilder()
const record = labelSetBuilder.addRecord()

// code to build the label
label.setText('SomeCodeFromLabelTemplate', 'this is a test value')

const labelXmlFromFile = '<Label>...<SomeCodeFromLabelTemplate/>...</Label>' // this is the label template generated in the dymo code

printLabel(printerToUse, '', labelXmlFromFile, labelSetBuilder + '');
```
