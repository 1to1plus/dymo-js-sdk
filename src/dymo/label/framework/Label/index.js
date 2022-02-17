// noinspection HtmlDeprecatedTag,HtmlUnknownAttribute

import xml from '../../../xml';
import {
  renderLabel,
  renderLabelAsync,
  printLabel,
  printLabelAndPollStatus, printLabelAndPollStatusAsync,
} from '../OneOffFunctions'
import printLabelAsync from '../printLabelAsync'
import printLabel2, { printLabel2Async } from '../PrintLabel2'
import AddressBarcodePosition from '../AddressBarcodePosition'

/**
 @private
 @constructor
 @implements {ILabel}
 @param {string} labelXml
 */
const Label = function (labelXml) {
  /**
   @private
   */
  this._doc = xml.parse(labelXml)
}

/**
 @inheritDoc
 */
Label.prototype.getLabelXml = function () {

  return xml.serialize(this._doc)
}

/**
 @inheritDoc
 */
Label.prototype.render = function (renderParamsXml, printerName) {
  return renderLabel(this.getLabelXml(), renderParamsXml, printerName)
}

/**
 @inheritDoc
 */
Label.prototype.renderAsync = function (renderParamsXml, printerName) {
  return renderLabelAsync(this.getLabelXml(), renderParamsXml, printerName)
}

/**
 @inheritDoc
 */
Label.prototype.print = function (printerName, printParamsXml, labelSetXml) {
  printLabel(printerName, printParamsXml, this.getLabelXml(), labelSetXml)
}

/**
 @inheritDoc
 */
Label.prototype.printAsync = function (
  printerName, printParamsXml, labelSetXml) {
  // noinspection JSValidateTypes
  return printLabelAsync(printerName, printParamsXml, this.getLabelXml(), labelSetXml)
}

// noinspection JSCheckFunctionSignatures
Label.prototype.print2 = function (printerName, printParamsXml, labelSetXml) {
  return printLabel2(printerName, printParamsXml, this.getLabelXml(),
    labelSetXml)
}

/**
 @inheritDoc
 */
Label.prototype.print2Async = function (
  printerName, printParamsXml, labelSetXml) {
  return printLabel2Async(printerName, printParamsXml, this.getLabelXml(),
    labelSetXml)
}

/**
 @inheritDoc
 */
Label.prototype.printAndPollStatus = function (
  printerName, printParamsXml, labelSetXml, statusCallback, pollInterval) {
  return printLabelAndPollStatus(printerName, printParamsXml,
    this.getLabelXml(), labelSetXml, statusCallback, pollInterval)
}

/**
 @inheritDoc
 */
Label.prototype.printAndPollStatusAsync = function (
  printerName, printParamsXml, labelSetXml, statusCallback, pollInterval) {
  return printLabelAndPollStatusAsync(printerName, printParamsXml,
    this.getLabelXml(), labelSetXml, statusCallback, pollInterval)
}

let _allObjectTypes = [
  'AddressObject',
  'TextObject',
  'BarcodeObject',
  'ShapeObject',
  'CounterObject',
  'ImageObject',
  'CircularTextObject',
  'DateTimeObject',
  'QRCodeObject']

/** returns all object elements on the label
 @private
 @param {Array.<string>=} opt_objectTypes optional array of object types to look for
 @return {(NodeList,Array.<Node>)}
 */
Label.prototype._getObjectElements = function (opt_objectTypes) {
  let objectTypes = opt_objectTypes || _allObjectTypes
  //return xml.getNodes(this._doc.documentElement, "//" + objectTypes.join("|//"));
  //let dh = new goog.dom.DomHelper(this._doc);

  //goog.array.reduce(objectTypes,
  return goog.dom.findNodes(this._doc.documentElement, function (n) {
    return n.nodeType == goog.dom.NodeType.ELEMENT &&
      goog.array.indexOf(objectTypes, n.tagName) >= 0
  })
}

/**
 @inheritDoc
 @return {Array.<string>}
 */
Label.prototype.getObjectNames = function () {
  let objects = this._getObjectElements()
  let result = []
  for (let i = 0; i < objects.length; i++)
    //result.push(xml.getElementText(xml.getNode(objects[i], "Name")));
    result.push(
      xml.getElementText(xml.getElement(objects[i], 'Name')))

  return result
}

/**
 returns all AddressObject elements
 @private
 @return {(NodeList,Array.<Node>)}
 */
Label.prototype._getAddressObjectElements = function () {
  //return xml.getNodes(this._doc, "//AddressObject");
  return this._getObjectElements(['AddressObject'])
}

/**
 @inheritDoc
 */
Label.prototype.getAddressObjectCount = function () {
  return this._getAddressObjectElements().length
}

/**
 returns address object element by index
 @param {number} addressIndex
 @return {Element}
 @private
 */
Label.prototype._getAddressObjectElementByIndex = function (addressIndex) {
  return this._getAddressObjectElements()[addressIndex]
  //TODO: add manual index checking ???

  //            let addressElements = _getAddressObjectElements();
  //            if (addressIndex < 0 || addressIndex >= addressElements.length)
  //                throw new Error("getAddressBarcodePosition(): index out of bounds");

  //            let elem = addressElements[addressIndex];
}

/**
 @inheritDoc
 */
Label.prototype.getAddressBarcodePosition = function (addressIndex) {
  if (!this.isDCDLabel())
    return xml.getElementText(
      xml.getElement(this._getAddressObjectElementByIndex(addressIndex),
        'BarcodePosition'))
  else
    return ''
}

/** check the value of passed barcodePosition string to be a valid position value
 // TODO: create universal _verifyEnum() (using for/in); check all values for all defined enums
 // TODO: check other values as well ???

 @private
 @param {string} barcodePosition
 @return {undefined}
 */
Label.prototype._verifyAddressBarcodePosition = function (barcodePosition) {
  if (barcodePosition == AddressBarcodePosition.AboveAddress
    || barcodePosition == AddressBarcodePosition.BelowAddress
    || barcodePosition == AddressBarcodePosition.Suppress)
    return

  throw new Error(
    'verifyAddressBarcodePosition(): barcode position \'' + barcodePosition +
    '\' is invalid value')
}

/**
 @inheritDoc
 */
Label.prototype.setAddressBarcodePosition = function (
  addressIndex, barcodePosition) {
  if (!this.isDCDLabel()) {
    this._verifyAddressBarcodePosition(barcodePosition)

    xml.setElementText(
      xml.getElement(this._getAddressObjectElementByIndex(addressIndex),
        'BarcodePosition'), barcodePosition)
  }
  return this

}

/**
 @inheritDoc
 */
Label.prototype.getAddressText = function (addressIndex) {
  return this._getAddressObjectText(
    this._getAddressObjectElementByIndex(addressIndex))
}

/**
 @inheritDoc
 */
Label.prototype.setAddressText = function (addressIndex, text) {
  return this._setAddressObjectText(
    this._getAddressObjectElementByIndex(addressIndex), text)
}

/** returns xml Element of corresponded label object with name objectName
 @private
 @param {string} objectName
 @return {Element}
 */
Label.prototype._getObjectByNameElement = function (objectName) {
  let objects = this._getObjectElements()

  // find object with name
  for (let i = 0; i < objects.length; i++) {
    let elem = objects[i]
    let name = xml.getElementText(xml.getElement(elem, 'Name'))
    if (name == objectName)
      return elem
  }

  throw new Error(
    'getObjectByNameElement(): no object with name \'' + objectName +
    '\' was found')
}

/** check if the current xml is a DYMO label
 // DYMO label or DieCutLabel

 @inheritDoc
 */
Label.prototype.isDCDLabel = function () {
  let result = false
  /** optionalProperty always contains an array or null
   * @type {string}
   */
  let labelXML = this.getLabelXml()
  if (labelXML) {
    result = labelXML.indexOf('</DYMO label>') !== -1
  }
  return result
}

/** check if the current xml is a DYMO label
 // DYMO label or DieCutLabel

 @inheritDoc
 */
Label.prototype.isDLSLabel = function () {
  let result = false
  /** optionalProperty always contains an array or null
   * @type {string}
   */
  let labelXML = this.getLabelXml()
  if (labelXML) {
    result = labelXML.indexOf('</DieCutLabel>') !== -1 ||
      labelXML.indexOf('</ContinuousLabel>') !== -1
  }
  return result
}

/** check if the current xml is a valid label
 // DYMO label or DieCutLabel

 @inheritDoc
 */
Label.prototype.isValidLabel = function () {
  return this.isDCDLabel() || this.isDLSLabel()
}

/** extracts text content of an Address object represented by xml element objectElem
 // the same function used to get Text object content

 @private
 @param {Element} objectElem
 */
Label.prototype._getAddressObjectText = function (objectElem) {
  //let textElems = xml.getNodes(objectElem, "StyledText/Element/String//text()");
  //let result = "";
  //for (let i = 0; i < textElems.length; i++)
  //    result = result + textElems[i].data;
  //return result;
  let result = ''

  if (!this.isDCDLabel()) {
    let styledTextElem = xml.getElement(objectElem, 'StyledText')
    let stringElems = xml.getElements(styledTextElem, 'String')

    result = goog.array.reduce(stringElems,
      function (acc, v) { return acc + xml.getElementText(v) }, '')
  } else {
    let FormattedText = xml.getElement(objectElem, 'FormattedText')
    let LineTextSpans = xml.getElements(FormattedText, 'LineTextSpan')
    for (let i = 0; i < LineTextSpans.length; i++) {
      let Spans = xml.getElements(LineTextSpans[i], 'TextSpan')
      for (let k = 0; k < Spans.length; k++) {
        let text = xml.getElement(Spans[k], 'Text')
        result = result + xml.getElementText(text)
      }
    }
  }
  return result
}

/** extracts text content of a Barcode object represented by xml element objectElem
 // the same function used to get Text object content

 @private
 @param {Element} objectElem
 */
Label.prototype._getBarcodeObjectText = function (objectElem) {
  let result = ''
  let nodeName = this.isDCDLabel() ? 'Data' : 'Text'
  let nodeElem = xml.getElement(objectElem, nodeName)

  if (nodeElem)
    result = xml.getElementText(nodeElem)

  return result
}

/** extracts text content of a QR code object represented by xml element objectElem
 // the same function used to get Text object content

 @private
 @param {Element} objectElem
 */
Label.prototype._getQRcodeObjectText = function (objectElem) {
  let result = ''
  if (this.isDCDLabel()) {
    let nodeElem = xml.getElement(objectElem, 'Data')
    if (nodeElem) {
      let dataString = xml.getElement(nodeElem, 'DataString')
      result = xml.getElementText(dataString)
    }
  }
  return result
}
/** extracts text content of an Image object represented by xml element objectElem
 // if image is embedded return it (base64 png stream)

 @private
 @param {Element} objectElem
 */
Label.prototype._getImageObjectText = function (objectElem) {
  let result = ''
  let nodeName = this.isDCDLabel() ? 'Data' : 'Image'
  let nodeElem = xml.getElement(objectElem, nodeName)

  if (nodeElem)
    result = xml.getElementText(nodeElem)

  return result
}

/** extracts text content of an DateTIme object represented by xml element objectElem
 // the same function used to get Text object content

 @private
 @param {Element} objectElem
 */
Label.prototype._getDateTimeCounterObjectText = function (objectElem) {
  let result = ''

  if (!this.isDCDLabel()) {
    result = xml.getElementText(
      xml.getElement(objectElem, 'PreText'))
  } else {
    let FormattedText = xml.getElement(objectElem, 'FormattedText')
    let LineTextSpans = xml.getElements(FormattedText, 'LineTextSpan')
    if (LineTextSpans) {
      let Spans = xml.getElements(LineTextSpans[0], 'TextSpan')
      let text = xml.getElement(Spans[0], 'Text')
      result = result + xml.getElementText(text)
    }
  }
  return result
}

/**
 @inheritDoc
 */
Label.prototype.getObjectText = function (objectName) {
  let objectElem = this._getObjectByNameElement(objectName)
  let objectType = objectElem.tagName
  let result = ''

  switch (objectType) {
    case 'AddressObject':
    case 'TextObject':
      result = this._getAddressObjectText(objectElem)
      break
    case 'BarcodeObject':
      //TODO: Implement method to get barcode text
      result = this._getBarcodeObjectText(objectElem) //xml.getElementText(xml.getElement(objectElem, "Text"));
      break
    case 'ImageObject':
      // if image is embedded return it (base64 png stream)
      result = this._getImageObjectText(objectElem)
      break
    case 'CircularTextObject':
      result = this.isDCDLabel()
        ? this._getAddressObjectText(objectElem)
        : xml.getElementText(xml.getElement(objectElem, 'Text'))
      break
    case 'QRCodeObject':
      result = this._getQRcodeObjectText(objectElem)
      break
    case 'DateTimeObject':
    case 'CounterObject':
      //TODO: probably we want to reimplement objects' behaviour and return
      // full text as rendered on a label
      result = this._getDateTimeCounterObjectText(objectElem)
      break
  }

  return result // default
}

/** returns line-by-line attributes (as xml Element) of the StyledText
 @private
 @param {Node} styledTextElem
 @return {Array.<Element>}
 */
Label.prototype._getStyledTextLineAttributes = function (styledTextElem) {
  let result = []
  let elems = xml.getElements(styledTextElem, 'Element')
  let isNewLine = true
  for (let i = 0; i < elems.length; i++) {
    let elem = elems[i]
    let str = xml.getElementText(xml.getElement(elem, 'String'))
    if (!str || !str.length) // should not be, just a safeguard
      continue

    let lines = str.split('\n')
    let linesCount = lines.length

    // no line separator in the middle of the line - ignore
    if (linesCount == 1 && !isNewLine)
      continue

    //if (i > 0)
    //    linesCount--; // don't count the 'first' line of second, and further element because it is a continuation of the line of the previous element

    let l = 0
    if (!isNewLine)
      l = 1

    let attributesElem = xml.getElement(elem, 'Attributes')
    for (; l < linesCount - 1; l++)
      result.push(attributesElem)

    // if the last line is not empty - add it as well
    if (lines[linesCount - 1].length > 0) {
      result.push(attributesElem)
      isNewLine = false
    } else {
      isNewLine = true
    }
  }

  return result
}

/*
Label.prototype._getStyledTextLineAttributes = function(styledTextElem)
{
    let result = new Array();
    let elems = xml.getElements(styledTextElem, "Element");
    for (let i = 0; i < elems.length; i++)
    {
        let elem = elems[i];
        let lines = xml.getElementText(xml.getElement(elem, "String")).split("\n");

        let linesCount = lines.length;
        if (i > 0)
            linesCount--; // don't count the 'first' line of second, and further element because it is a continuation of the line of the previous element

        let attributesElem = xml.getElement(elem, "Attributes");
        for (let l = 0; l < linesCount; l++)
            result.push(attributesElem);
    }

    return result;
}
*/

/** sets content for an Address object
 // Parameters:
 //      objectElem - Element corresponded to the address object
 //      text - plain text string of the address data
 // Note: text formatting is applied on line-by-line basis using object's <LineFonts> list

 @private
 @param {Element} objectElem
 @param {string} text
 @return {Label}
 */
Label.prototype._setAddressObjectText = function (objectElem, text) {
  if (!this.isDCDLabel()) {
    //get <StyledText>
    let styledTextElem = xml.getElement(objectElem, 'StyledText')
    let attributes = this._getStyledTextLineAttributes(styledTextElem)

    //let lineFonts = xml.getNodes(objectElem, "LineFonts/Font");
    let lineFontsElem = xml.getElement(objectElem, 'LineFonts')
    let lineFonts = []
    if (lineFontsElem)
      lineFonts = xml.getElements(lineFontsElem, 'Font')

    let defaultFont
    if (lineFonts.length == 0)
      defaultFont = xml.parse(
        '<Font Family="Arial" Size="12" Bold="False" Italic="False" Underline="False" Strikeout="False" />').documentElement
    let defaultColor = xml.parse(
      '<ForeColor Alpha="255" Red="0" Green="0" Blue="0" />').documentElement

    // clear all text
    xml.removeAllChildren(styledTextElem)

    let lines = text.split('\n')
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i].replace('\r', '')
      if (i < lines.length - 1)
        line = line + '\n'

      // use font from lineFonts or the last font.
      // If there is no lineFonts, try to use font from current styled text
      let font = defaultFont
      if (lineFonts.length > 0) {
        if (i < lineFonts.length)
          font = lineFonts[i]
        else
          font = lineFonts[lineFonts.length - 1]
      } else if (attributes.length > 0) {
        if (i < attributes.length)
          font = xml.getElement(attributes[i], 'Font')
        else
          font = xml.getElement(attributes[attributes.length - 1], 'Font')
      }

      // font color
      let fontColor = defaultColor
      //alert(Xml.serialize(fontColor));
      if (i < attributes.length)
        fontColor = xml.getElement(attributes[i], 'ForeColor')
      //alert(Xml.serialize(fontColor));
      // create styledText element for the line
      let elemElem = styledTextElem.ownerDocument.createElement('Element')
      let stringElem = styledTextElem.ownerDocument.createElement('String')
      xml.setElementText(stringElem, line)
      let attributesElem = styledTextElem.ownerDocument.createElement(
        'Attributes')
      attributesElem.appendChild(font.cloneNode(true))
      attributesElem.appendChild(fontColor.cloneNode(true))
      elemElem.appendChild(stringElem)
      elemElem.appendChild(attributesElem)
      styledTextElem.appendChild(elemElem)
    }
    //alert(Xml.serialize(styledTextElem));
  } else {
    let FormattedText = xml.getElement(objectElem, 'FormattedText')
    let LineTextSpans = xml.getElements(FormattedText, 'LineTextSpan')
    if (LineTextSpans) {
      let Spans = xml.getElements(LineTextSpans[0], 'TextSpan')
      if (Spans) {
        let textElem = xml.getElement(Spans[0], 'Text')
        xml.setElementText(textElem, text)
      }
    }
  }

  return this
}

/** sets content for an QRCode object
 // Parameters:
 //      objectElem - Element corresponded to the address object
 //      text - plain text string of the address data
 // Note: text formatting is applied on line-by-line basis using object's <LineFonts> list

 @private
 @param {Element} objectElem
 @param {string} text
 @return {Label}
 */
Label.prototype._setQRCodeObjectText = function (objectElem, text) {
  if (this.isDCDLabel()) {
    let dataElem = xml.getElement(objectElem, 'Data')
    if (dataElem) {
      let dataStringElem = xml.getElement(dataElem, 'DataString')
      xml.setElementText(dataStringElem, text)
    }
  }
  return this
}

/** sets content for a Barcode object
 // Parameters:
 //      objectElem - Element corresponded to the address object
 //      text - plain text string of the address data
 // Note: text formatting is applied on line-by-line basis using object's <LineFonts> list

 @private
 @param {Element} objectElem
 @param {string} text
 @return {Label}
 */
Label.prototype._setBarcodeObjectText = function (objectElem, text) {
  let nodeName = this.isDCDLabel() ? 'Data' : 'Text'
  let nodeElem = xml.getElement(objectElem, nodeName)

  if (nodeElem)
    xml.setElementText(nodeElem, text)

  return this
}

/** sets content for a Barcode object
 // Parameters:
 //      objectElem - Element corresponded to the address object
 //      text - plain text string of the address data
 // Note: text formatting is applied on line-by-line basis using object's <LineFonts> list

 @private
 @param {Element} objectElem
 @param {string} text
 @return {Label}
 */
Label.prototype._setImageObjectText = function (objectElem, text) {
  if (!this.isDCDLabel()) {
    let imageElem = xml.getElement(objectElem, 'Image')
    if (imageElem)
      xml.setElementText(imageElem, text)
    else {
      // if there is no <Image> tag then there should be <ImageLocation>
      // so replace <ImageLocation> with <Image>
      let imageLocationElem = xml.getElement(objectElem, 'ImageLocation')
      if (!imageLocationElem)
        throw new Error(
          'setObjectText(): <ImageLocation> is expected but not found: ' +
          xml.serialize(imageElem))

      // create <Image> elem
      imageElem = imageLocationElem.ownerDocument.createElement('Image')
      xml.setElementText(imageElem, text)
      objectElem.replaceChild(imageElem, imageLocationElem)
    }
  } else {
    let nodeElem = xml.getElement(objectElem, 'Data')
    if (nodeElem)
      xml.setElementText(nodeElem, text)
  }

  return this
}

/** sets content for an DateTime or Counter object
 // Parameters:
 //      objectElem - Element corresponded to the address object
 //      text - plain text string of the address data
 // Note: text formatting is applied on line-by-line basis using object's <LineFonts> list

 @private
 @param {Element} objectElem
 @param {string} text
 @return {Label}
 */
Label.prototype._setDateTimeCounterObjectText = function (objectElem, text) {
  if (!this.isDCDLabel()) {
    xml.setElementText(xml.getElement(objectElem, 'PreText'), text)
  } else {
    let FormattedText = xml.getElement(objectElem, 'FormattedText')
    let LineTextSpans = xml.getElements(FormattedText, 'LineTextSpan')
    if (LineTextSpans) {
      let Spans = xml.getElements(LineTextSpans[0], 'TextSpan')
      let textElem = xml.getElement(Spans[0], 'Text')
      xml.setElementText(textElem, text)
    }
  }

  return this
}
/**
 @inheritDoc
 */
Label.prototype.setObjectText = function (objectName, text) {

  let objectElem = this._getObjectByNameElement(objectName)
  let objectType = objectElem.tagName

  switch (objectType) {
    case 'AddressObject':
      this._setAddressObjectText(objectElem, text)
      break

    case 'TextObject':
      this._setAddressObjectText(objectElem, text)
      break

    case 'QRCodeObject':
      this._setQRCodeObjectText(objectElem, text)
      break

    case 'BarcodeObject':
      this._setBarcodeObjectText(objectElem, text)
      break

    case 'ImageObject':
      this._setImageObjectText(objectElem, text)
      break

    case 'CircularTextObject':
      this.isDCDLabel()
        ? this._setAddressObjectText(objectElem, text)
        : xml.setElementText(xml.getElement(objectElem, 'Text'),
          text)
      break

    case 'DateTimeObject':
    case 'CounterObject':
      this._setDateTimeCounterObjectText(objectElem, text)
      break
  }

  return this
}

/**
 @inheritDoc
 */
Label.prototype.setLabelLength = function (newLength) {
  let labelElm = this._doc.documentElement
  if (labelElm.nodeName != 'ContinuousLabel')
    throw new Error('Cannot set length on non-continuous label.')

  let lengthMode = (newLength == 0) ? 'Auto' : 'Fixed'
  let lengthValue = (newLength == 0) ? 7200 : newLength

  xml.setElementText(xml.getElement(labelElm, 'LengthMode'),
    lengthMode)
  xml.setElementText(xml.getElement(labelElm, 'LabelLength'),
    lengthValue)

  let rootCellElm = xml.getElement(labelElm, 'RootCell')
  xml.setElementText(xml.getElement(rootCellElm, 'Length'),
    lengthValue)
  xml.setElementText(xml.getElement(rootCellElm, 'LengthMode'),
    lengthMode)

  return this
}

/**
 @override
 */
Label.prototype.toString = function () {
  return this.getLabelXml()
}

export default Label;
