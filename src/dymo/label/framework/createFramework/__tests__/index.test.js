// noinspection JSCheckFunctionSignatures

import mockAxios from 'jest-mock-axios'
import MockAdapter from 'axios-mock-adapter'
import { createFaultyFramework, createFramework } from '../index'
import axios from 'axios'

afterEach(() => {
  // cleaning up the mess left behind the previous test
  mockAxios.reset()
})

describe('getPrinters', () => {
  let mock

  beforeEach(() => {
    mock = new MockAdapter(axios)
  })

  test(`All should fail`, async () => {
    let catchFn = jest.fn()
    let thenFn = jest.fn()

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

  test(`Should be able to call getPrinters`, async () => {
    let catchFn = jest.fn()
    let thenFn = jest.fn()

    mock.onGet('/*').
      reply(200, {
        testing: 'this is working',
      }).
      onGet('https://127.0.0.1:41951/DYMO/DLS/Printing/StatusConnected').
      reply(200, 'true').
      onGet('https://127.0.0.1:41951/DYMO/DLS/Printing/GetPrinters').
      reply(200,
        '<Printers><LabelWriterPrinter><Name>DYMO LabelWriter 450 Turbo<\/Name><ModelName>DYMO LabelWriter 450 Turbo<\/ModelName><IsConnected>False<\/IsConnected><IsLocal>True<\/IsLocal><IsTwinTurbo>False<\/IsTwinTurbo><\/LabelWriterPrinter><\/Printers>')


    try {
      // const framework =  await _createFramework();
      //
      // expect(framework).toEqual('1');

      const createdFramework = await createFramework(undefined, true)
      const response = await createdFramework.getPrinters()
      thenFn(response)
    } catch (e) {
      console.log(JSON.stringify(e, null, 2))
      catchFn(e.message)
    }

    expect(catchFn).not.toBeCalled()
    expect(thenFn).toBeCalled()
  })
})
