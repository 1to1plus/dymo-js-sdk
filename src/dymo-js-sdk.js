import { setSetting } from './settings'
import { createFramework } from './dymo/label/framework/createFramework'

/**
 *
 * @param config
 * @param callback
 * @return {Promise<undefined>|_createFramework}
 */
const initApp = (config = {}, callback) => {
  Object.keys(config).forEach((key) => {
    setSetting(key, config[key])
  })

  return new createFramework(callback)
}

const dymoJsSdk = initApp()

dymoJsSdk.initApp = initApp
dymoJsSdk.createFramework = createFramework

export default dymoJsSdk
