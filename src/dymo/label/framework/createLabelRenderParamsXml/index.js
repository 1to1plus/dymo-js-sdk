/** Creates an xml stream suatable to pass to renderLabel() function as renderParamsXml parameter
 // Parameters:
 // - params - an JavaScript object with following properties (not all properties have to be defined, if a property is not defined a default value will be used)
 //      params.labelColor - color of the label. labelColor is an object with properties 'a' or 'alpha' to specify color's alpha channel, r/red, g/green, b/blue for red, green, blue channels
 //      params.shadowColor - color of label shadow
 //      params.shadowDepth -  shadow width in TWIPS. if '0' is specified no shadow is rendered
 //      params.flowDirection - prints label content as left-to-right or right-to-left use FlowDirection enum to specify values
 //      params.pngUseDisplayResolution - if true, the png will be generated using display resolution, othewise using printer resolution.
 //                                       If a display resolution is used the resulting png will be smaller.
 //                                       Use printer resolution if resulting image is going to be zoomed, so the zoomed preview will have better quality.

 @param {LabelRenderParams} params
 @return {string}
 @export
 */
const createLabelRenderParamsXml = function (params) {
  if (!params)
    return ''

  var doc = dymo.xml.parse('<LabelRenderParams/>')
  var root = doc.documentElement

  var addColor = function (tagName, color) {
    dymo.xml.appendElement(root, tagName, undefined,
      {
        'Alpha': color.a || color.alpha || 255, // opaque
        'Red': color.r || color.red || 0,
        'Green': color.g || color.green || 0,
        'Blue': color.b || color.blue || 0,
      })
  }

  if (params.labelColor)
    addColor('LabelColor', params.labelColor)

  if (params.shadowColor)
    addColor('ShadowColor', params.shadowColor)

  if (typeof params.shadowDepth != 'undefined')
    dymo.xml.appendElement(root, 'ShadowDepth', params.shadowDepth.toString())

  if (params.flowDirection)
    dymo.xml.appendElement(root, 'FlowDirection', params.flowDirection)

  if (typeof params.pngUseDisplayResolution != 'undefined')
    dymo.xml.appendElement(root, 'PngUseDisplayResolution',
      params.pngUseDisplayResolution ? 'True' : 'False')

  return dymo.xml.serialize(doc)
}
export default createLabelRenderParamsXml
