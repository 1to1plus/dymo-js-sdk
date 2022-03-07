// noinspection JSCheckFunctionSignatures

import mockAxios from 'jest-mock-axios'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import { createFaultyFramework, createFramework } from '../index'
import { getSetting } from '../../../../../settings'
import { sampleSingleLabel } from './data/singleLabel'
import { openLabelXml } from '../../OneOffFunctions'
import LabelSetBuilder from '../../LabelSetBuilder'

describe('getPrinters', () => {
  let mock
  const catchFn = jest.fn()
  const thenFn = jest.fn()
  const serviceHost = '127.0.0.1'
  const servicePort = 41951
  const serviceUrl = `https://${serviceHost}:${servicePort}`

  beforeEach(() => {
    mock = new MockAdapter(axios)

    /**
     * StatusConnected should only reply one time the rest of the StatusConnected calls should fail
     */
    mock.onOptions(`${serviceUrl}/.*`).
      timeout().
      onGet(`${serviceUrl}/DYMO/DLS/Printing/StatusConnected`).
      replyOnce(200, 'true').
      onGet(`${serviceUrl}/DYMO/DLS/Printing/StatusConnected`).
      timeout().
      onGet(`${serviceUrl}/DYMO/DLS/Printing/GetPrinters`).
      reply(
        200,
        '<Printers><LabelWriterPrinter><Name>DYMO LabelWriter 450 Turbo</Name><ModelName>DYMO LabelWriter 450 Turbo</ModelName><IsConnected>False</IsConnected><IsLocal>True</IsLocal><IsTwinTurbo>False</IsTwinTurbo></LabelWriterPrinter></Printers>',
      ).
      onPost(`${serviceUrl}/DYMO/DLS/Printing/PrintLabel`).
      reply(200, sampleSingleLabel)
  })

  afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset()
  })

  test(`All should fail`, async () => {
    try {
      const response = await createFaultyFramework().getPrinters()
    } catch (e) {
      catchFn(e.message)
    }

    expect(thenFn).not.toBeCalled()
    expect(catchFn).
      toBeCalledWith(
        'DYMO Label Framework Plugin or WebService are not installed')
  })

  test(`Should be able to call StatusConnected`, async () => {
    try {
      const createdFramework = await createFramework(undefined, true)
      const response = await createdFramework.getPrinters()
      thenFn(response)
    } catch (e) {
      catchFn(e.message)
    }

    expect(catchFn).not.toBeCalled()
    expect(thenFn).toBeCalled()
  })

  test(`Get list of printers as json`, async () => {
    const catchFn = jest.fn()
    const thenFn = jest.fn()

    try {
      const createdFramework = await createFramework(undefined, true)
      const response = await createdFramework.getPrinters()
      thenFn(response)
    } catch (e) {
      catchFn(e.message)
    }

    expect(catchFn).not.toBeCalled()
    expect(thenFn).toBeCalled()
    expect(getSetting('Port')).toEqual(41951) // make sure found the right service port and set the config value
  });

  test('Should be able to print a label', async () => {
    const printerToUse = 'DYMO LabelWriter 450 Turbo';

    try {
      const createdFramework = await createFramework(undefined, true)

      const labelTemplate = openLabelXml(sampleSingleLabel)
      const singleLabelSet = {
        asset: {
          label: null,
          labelSet: null,
        },
      }

      const labelSet = new LabelSetBuilder()
      const record = labelSet.addRecord()
      record.setText('Line1', 'This is a test label')
      record.setText('Line2', 'This is another test')

      singleLabelSet.asset.label = labelTemplate
      singleLabelSet.asset.labelSet = labelSet

      console.log(singleLabelSet)
      console.log(labelSet)

      const response = await createdFramework.printLabel(
        printerToUse,
        '',
        sampleSingleLabel,
        `${labelSet}`,
      )
      console.log({ response })

      // const testing1= 'here';
      // console.log(DesktopLabel + '');
      // const createdFramework = await createFramework(undefined, true)
      // const response = await createdFramework.printLabel(printerToUse, labelXml)

      // thenFn(response)
    } catch (e) {
      console.log(e)
      catchFn(e.message)
    }
  });
});
