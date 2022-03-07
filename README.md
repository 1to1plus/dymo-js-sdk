# Dymo JS framework

## Install

```shell
yarn add dymo-js-sdk
# or
npm install --save dymo-js-sdk
```

## Usage

Can be seen in the [./src/demo/test-label.js](./src/demo/test-label.js) or in the sample [./src/demo/vue/hello-printer](./src/demo/vue/hello-printer) application

But, initialize the framework and print the label. The code might look like this

```vue
// init the framework
const framework = await createFramework(undefined, true)

// build label template values
const record = labelSet.addRecord()
record.setText('Line1', 'This is a test label')
record.setText('Line2', 'This is another test')
record.setText('Line3', 'This is another test')
record.setText('ItemCode', '100a')
```

## Demo vue application

in your terminal navigate to ./src/demo/vue/hello-printer

* install packages `yarn install`
* start the dev server `yarn start`
* it should display a link when building is done
* click the link to open in your browser
* on the "Home" page you'll have get printers and print label buttons they should be functional assuming the printer is setup correctly

## Developer notes

* clone the repo `git clone git@github.com:1to1plus/dymo-js-sdk.git`
* install dev dependencies `yarn install`
* run tests with `yarn test`

## PLEASE NOTE

This project is not complete yet. I'm creating test and tweaking the code to do what it needs to do still.

My adoption of https://github.com/dymosoftware/dymo-connect-framework

## Roadmap

* re-build the dymo object in ./src/dymo/index.js from the updated structure
* test the framework
* build examples
