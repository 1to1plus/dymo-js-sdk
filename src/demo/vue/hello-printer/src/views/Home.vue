<template>
  <div class="container clearfix">
    <button class="btn btn-primary" @click="printLabel">Print test label</button>
    <button class="btn btn-secondary ms-3" @click="loadPrinters">Get Printers</button>
    <div class="container mt-3">
      <div class="row">
        <div class="col-md-6">
          <h3>printers</h3>
          <pre v-html="printers"></pre>
        </div>
        <div class="col-md-6">
          <h3>
            printLabelResponse
          </h3>
          <pre v-html="printLabelResponse"></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { createFramework } from '../../../../../dymo/label/framework/createFramework'
import { sampleSingleLabel } from '../../../../../dymo/label/framework/createFramework/__tests__/data/singleLabel'
import LabelSetBuilder from '../../../../../dymo/label/framework/LabelSetBuilder'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data () {
    return {
      labelSet: '',
      printers: '',
      framework: null,
      labelTemplate: null,
      printLabelResponse: 'n/a',
    }
  },
  methods: {
    async loadPrinters () {
      this.printers = await this.framework.getPrinters()
    },
    async printLabel () {
      const printerToUse = 'DYMO LabelWriter 550'
      const labelXmlFromFile = sampleSingleLabel
      const labelSet = new LabelSetBuilder()

      const record = labelSet.addRecord()
      record.setText('Line1', 'This is a test label')
      record.setText('Line2', 'This is another test')
      record.setText('Line3', 'This is another test')
      record.setText('ItemCode', '100a')

      this.printLabelResponse = await this.framework.printLabel(printerToUse, '', labelXmlFromFile, labelSet + '')
    },
  },
  async mounted () {
    this.framework = await createFramework(undefined, true)
  },
}
</script>
