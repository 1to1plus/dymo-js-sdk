import { DOMParser, XMLSerializer } from '@xmldom/xmldom';
import { XMLParser } from 'fast-xml-parser';

const xml: any = {};

export const xmlToJson = (xmlData: any) => {
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
    parseAttributeValue: true,
    parseTagValue: true,
  });

  return parser.parse(xmlData);
};

xml.parse = function (text: string) {
  const parser = new DOMParser();
  return parser.parseFromString(text, 'application/xml');
};

/**
 * Serializes an XML document or subtree to string.
 * @param node The document or the root node of the subtree.
 * @return The serialized XML.
 */
xml.serialize = function (node: any) {
  function fix(_node = node) {
    return _node.replaceAll(/<Color (.+)\/>/g, '<Color $1> </Color>') || _node;
  }

  const test = new XMLSerializer().serializeToString(node);

  return fix(test);
};

xml.appendElement = (parentElement: HTMLElement, tagName: any, text: any, attributes: any) => {
  const result = parentElement.ownerDocument.createElement(tagName);

  if (text) result.appendChild(parentElement.ownerDocument.createTextNode(text));

  if (attributes) {
    for (const a in attributes) result.setAttribute(a, attributes[a]);
  }

  parentElement.appendChild(result);

  return result;
};

// returns text content of the element, e.g., for tag <Name>address123</Name>, 'address123' will be returned
/**
 */
xml.getElementText = function (elem: any, defaultValue: string = '') {
  if (!elem) {
    return defaultValue;
  }

  let result = '';
  for (let i = 0; i < elem.childNodes.length; i++)
    if (elem.childNodes[i].nodeType == 3)
      // TEXT_NODE
      result += elem.childNodes[i].data;

  return result;
};

// returns child element of parent with tag name "elemName"
xml.getElement = function (parent: any, elemName: any) {
  const children = parent.getElementsByTagName(elemName);
  if (children.length > 0) return children[0];

  return undefined;
};

// returns all children elements of parent with tag name "elemName"
xml.getElements = function (parent: any, elemName: any) {
  return parent.getElementsByTagName(elemName);
};

/**
 * set text content of the elem. Note: all other children of the element will be deleted
 * @param element element to set text
 * @param text string to set
 */
xml.setElementText = function (element: any, text: any) {
  // first, remove all children...
  xml.removeAllChildren(element);
  // ...then add text
  element.appendChild(element.ownerDocument.createTextNode(text));
};

// removes all children nodes of the specified node
xml.removeAllChildren = function (node: any) {
  while (node.firstChild) node.removeChild(node.firstChild);
};

xml.xmlToJson = xmlToJson;

export default xml;
