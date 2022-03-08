import LabelSetBuilder from '../dymo/label/framework/LabelSetBuilder'
import initFramework from '../dymo-js-sdk'
import {
  sampleSingleLabel,
} from '../dymo/label/framework/createFramework/__tests__/data/singleLabel'

const handler = async (settings) => {
  const { printerToUse, labelXmlFromFile, labelSet } = settings

  let loading = false

  // init the framework
  const framework = await initFramework()

  // build label template values
  const record = labelSet.addRecord()
  record.setText('Line1', 'This is a test label')
  record.setText('Line2', 'This is another test')
  record.setText('Line3', 'This is another test')
  record.setText('ItemCode', '100a')

  // send off the label
  try {
    // sample loading state
    loading = true

    // labelSet implements toString so it will automatically convert to
    // xml format that the application is looking for
    this.printLabelResponse = await framework.printLabel(
      printerToUse, // printer name
      '', // printer configs
      labelXmlFromFile, // label template
      `${labelSet}`, // label values to pop into the template
    )
  } catch (err) {
    console.log('Something went wrong: ', err)
    throw err // re-throw the error so the consuming applciation can catch it
  } finally {
    // end sample loading state
    loading = false
  }
};

// these are sample settings that could come from local storage or database settings
const printerToUse = 'DYMO LabelWriter 550'
const labelXmlFromFile = sampleSingleLabel
const labelSet = new LabelSetBuilder()

console.log('Demo is starting')
console.log('----------------')
handler({ printerToUse, labelXmlFromFile, labelSet }).then(() => {
  console.log('----------------')
  console.log('Demos all done')
}).catch((err) => {
  console.log('Demo ended with error:', err)
})
