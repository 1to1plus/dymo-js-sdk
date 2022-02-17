import dymo from '../dymo'

const handler = async () => {
  let labelSet = new dymo.label.framework.LabelSetBuilder()
  console.log('welcome', JSON.stringify(labelSet, null, 2))
}

handler().then(() => {
  console.log('Demos all done')
})
