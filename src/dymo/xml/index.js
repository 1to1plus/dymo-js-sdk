import goog from 'google-closure-library'

const xml = {}

/**
 @param {string} text
 @return {Document}
 */
xml.parse = function (text) {
  return goog.dom.xml.loadXml(text)
}

/**
 * Serializes an XML document or subtree to string.
 * @param {Document|Element} node The document or the root node of the subtree.
 * @return {string} The serialized XML.
 */
xml.serialize = function (node) {
  function fix (node) {
    return node.replaceAll(/<Color (.+)\/>/g, '<Color $1> </Color>')
  }

  return fix(goog.dom.xml.serialize(node))

  /*
  if (typeof XMLSerializer != "undefined")
      return (new XMLSerializer()).serializeToString(node);
  else if (node.xml)
      return node.xml;
  else
      throw new Error("XML.serialize is not supported or can't serialize " + node);
*/
}

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
xml.getElementText = function (elem) {
  if (!elem)
    return ''

  return goog.dom.getRawTextContent(elem)

  /*
  let result = "";
  for (let i = 0; i < elem.childNodes.length; i++)
      if (elem.childNodes[i].nodeType == 3) //TEXT_NODE
      result = result + elem.childNodes[i].data;

  return result;
  */
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

export default xml
