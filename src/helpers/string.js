export const isString = (testString) => {
  return typeof testString == 'string'
}

export const appendUrlPath = (baseUri, path) => {
  if (baseUri.endsWith('/')) {
    baseUri = baseUri.substr(0, baseUri.length - 1)
  }

  if (path.startsWith('/')) {
    path = path.substr(1)
  }

  return '' + baseUri + '/' + path
}
