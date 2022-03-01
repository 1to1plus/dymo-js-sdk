import { parseString } from 'xml2js'
import { DOMParser, XMLSerializer } from '@xmldom/xmldom'
import { xml2json } from 'xml-js'

const xml = {}

export const xmlToJson = (xmlData) => {
  let newJson

  parseString(xmlData, function (err, results) {
    // parsing to json
    newJson = JSON.stringify(results)
  }, undefined);

  return newJson;
}

/**
 @param {string} text
 @return {Document}
 */
xml.parse = function (text) {
  const parser = new DOMParser()
  return parser.parseFromString(text, 'application/xml')
}

/**
 * Serializes an XML document or subtree to string.
 * @param {Document|Element} node The document or the root node of the subtree.
 * @return {string} The serialized XML.
 */
xml.serialize = function (node) {
  function fix (node) {
    try {
      return node.replaceAll(/<Color (.+)\/>/g, '<Color $1> </Color>')
    } catch (e) {

    }

    return node
  }

  const test = new XMLSerializer().serializeToString(node)
  console.log({ test })

  return fix(test)
}

export const xmlSerialize = xml.serialize;

// appends a new element to DOM tree as child of parent and set it content to text
// parent - parent Element
// tagName - the element's tagName
// text - the element's content
// attributes - tag attibutes, specified as an associative-array
// returns - new added element
/**
 @param {*} parentElement
 @param {string} tagName
 @param {string=} text
 @param {*=} attributes
 */
xml.appendElement = function (parentElement, tagName, text, attributes) {
  let result = parentElement.ownerDocument.createElement(tagName)

  if (text)
    result.appendChild(parentElement.ownerDocument.createTextNode(text))

  if (attributes) {
    for (let a in attributes)
      result.setAttribute(a, attributes[a])
  }

  parentElement.appendChild(result)

  return result
}

// returns text content of the element, e.g. for tag <Name>address123</Name>, 'address123' will be returned
/**
 */
xml.getElementText = function (elem, defaultValue = '') {
  if (!elem) {
    return defaultValue
  }

  let result = ''
  for (let i = 0; i < elem.childNodes.length; i++)
    if (elem.childNodes[i].nodeType == 3) //TEXT_NODE
      result = result + elem.childNodes[i].data

  return result
}

// returns child element of parent with tag name "elemName"
xml.getElement = function (parent, elemName) {
  let children = parent.getElementsByTagName(elemName)
  if (children.length > 0)
    return children[0]

  return undefined
}

// returns all children elements of parent with tag name "elemName"
xml.getElements = function (parent, elemName) {
  return parent.getElementsByTagName(elemName)
}

/**
 * set text content of the elem. Note: all other children of the element will be deleted
 * @param element element to set text
 * @param text string to set
 */
xml.setElementText = function (element, text) {
  // first, remove all children...
  xml.removeAllChildren(element)
  // ...then add text
  element.appendChild(element.ownerDocument.createTextNode(text))
}

// removes all children nodes of the specified node
xml.removeAllChildren = function (node) {
  while (node.firstChild)
    node.removeChild(node.firstChild)
}

xml.xmlToJson = xmlToJson

export const convertJsonToXml = async (json) => {
  return new Promise(resolve => {
    let convert

    convert = xml2json(json, { compact: true })
    resolve(convert)
  })
}

export default xml
