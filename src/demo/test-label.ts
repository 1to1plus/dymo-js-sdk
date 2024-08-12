import LabelSetBuilder from '../dymo/label/framework/LabelSetBuilder';
import initFramework, { sampleSingleLabel } from '../dymo-js-sdk';

const handler = async (settings: {
  printerToUse: string;
  labelXmlFromFile: any;
  labelSet: LabelSetBuilder;
}) => {
  const { printerToUse, labelXmlFromFile, labelSet } = settings;

  // init the framework
  const framework = await initFramework();

  // build label template values
  const record = labelSet.addRecord();
  record.setText('Line1', 'This is a test label');
  record.setText('Line2', 'This is another test');
  record.setText('Line3', 'This is another test');
  record.setText('ItemCode', '100a');

  // send off the label
  try {
    // labelSet implements toString so it will automatically convert to
    // xml format that the application is looking for
    // @ts-expect-error
    this.printLabelResponse = await framework.printLabel(
      printerToUse, // printer name
      '', // printer configs
      labelXmlFromFile, // label template
      `${labelSet}`, // label values to pop into the template
    );
  } catch (err) {
    console.log('Something went wrong: ', err);
    throw err; // re-throw the error so the consuming application can catch it
  }
};

// these are sample settings that could come from local storage or database settings
const printerToUse = 'DYMO LabelWriter 550';
const labelXmlFromFile = sampleSingleLabel;
const labelSet = new LabelSetBuilder();

console.log('Demo is starting');
console.log('----------------');
handler({ printerToUse, labelXmlFromFile, labelSet })
  .then(() => {
    console.log('----------------');
    console.log('Demos all done');
  })
  .catch((err) => {
    console.log('Demo ended with error:', err);
  });
