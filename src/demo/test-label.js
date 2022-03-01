import LabelSetBuilder from '../dymo/label/framework/LabelSetBuilder'
import { openLabelXml } from '../dymo/label/framework/OneOffFunctions'
import {
  sampleSingleLabel,
} from '../dymo/label/framework/createFramework/__tests__/data/singleLabel'

const handler = async () => {
  console.log('handler')

  const labelTemplate = openLabelXml(sampleSingleLabel)

  const labelSet = new LabelSetBuilder()
  const record = labelSet.addRecord()
  record.setText('Line1', 'This is a test label')
  record.setText('Line2', 'This is another test')

  console.log('labelTemplate', labelTemplate)
  console.log('welcome', JSON.stringify(labelSet, null, 2))
}

handler().then(() => {
  console.log('Demos all done');
});
