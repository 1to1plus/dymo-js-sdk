/*
 * These tests rely on the fact that, despite specs, Node will keep the order of the JSON properties.
*/

const expect = require('chai').expect
const jsonxml = require('../jsonxml')

describe('Comversion structure tests', () => {
    it('should output unnamed elements as-is and ignore unknown ones', () => {
        expect(jsonxml([1, 'abc', ()=>{}, null, undefined, [1], {}, false])).to.equal('1abcnull1false')
    })

    it('should convert objects props and values to tags and values', () => {
        expect(jsonxml({
            "Tag1": {
                "Tag2": { "key2": "value 2" },
                "Tag3": { "key3": "value 3" }
            },
            "Tag4": { "key4": "value 4" }
        })).to.equal('<Tag1><Tag2><key2>value 2</key2></Tag2><Tag3><key3>value 3</key3></Tag3></Tag1><Tag4><key4>value 4</key4></Tag4>')
    })

    it('should convert arrays by wrapping their elements by default', () => {
        expect(jsonxml({
            "ListOfItems": {
                "NumberItem": [1, 2, 3],
                "ObjectItem": [
                    { "key1": "value 1" },
                    { "key2": "value 2" }
                ]
            }
        })).to.equal('<ListOfItems><NumberItem>1</NumberItem><NumberItem>2</NumberItem><NumberItem>3</NumberItem><ObjectItem><key1>value 1</key1></ObjectItem><ObjectItem><key2>value 2</key2></ObjectItem></ListOfItems>')
    })

    it('should convert properly the typical case', () => {
        expect(jsonxml({
            "ListOfItems": {
                "Item": [
                    {
                        "a_key": "a string value",
                        "b_key": 42
                    },
                    {
                        "a_key": null,
                        "RepeatItem": [
                            { "b_key": "another value" },
                            { "c_key": "" }
                        ],
                        "SubItem": {
                            "d_key": "last value"
                        }
                    }
                ]
            }
        })).to.equal('<ListOfItems><Item><a_key>a string value</a_key><b_key>42</b_key></Item><Item><a_key>null</a_key><RepeatItem><b_key>another value</b_key></RepeatItem><RepeatItem><c_key></c_key></RepeatItem><SubItem><d_key>last value</d_key></SubItem></Item></ListOfItems>')
    })
})

describe('Options tests', () => {
    it('should output the default XML header if told so with options.header', () => {
        expect(jsonxml({
            "Tag1": {
                "Tag2": { "key2": "value 2" }
            }
        }, { header: true }))
        .to.equal(jsonxml.DEFAULT_XML_HEADER + '<Tag1><Tag2><key2>value 2</key2></Tag2></Tag1>')
    })

    it('should output a custom header if told so with options.header', () => {
        let custom_header = '<?xml version="42.0" encoding="ISO-8859-1" standalone="yes" ?>'
        expect(jsonxml({
            "Tag1": {
                "Tag2": { "key2": "value 2" }
            }
        }, { header: custom_header }))
        .to.equal(`${custom_header}<Tag1><Tag2><key2>value 2</key2></Tag2></Tag1>`)
    })

    it('should wrap the output with a custom element if told so with options.root', () => {
        let custom_root = 'NewRootElement'
        expect(jsonxml({
            "Tag1": {
                "Tag2": { "key2": "value 2" }
            }
        }, { root: custom_root }))
        .to.equal(`<${custom_root}><Tag1><Tag2><key2>value 2</key2></Tag2></Tag1></${custom_root}>`)
    })

    it('should format the output properly if told so with options.indent', () => {
        let custom_header = '<?xml version="42.0" encoding="ISO-8859-1" standalone="yes" ?>'
        let custom_root = 'NewRootElement'
        let tab = '  '
        expect(jsonxml({
            "ListOfItems": {
                "Item": [
                    {
                        "a_key": "a string value",
                        "b_key": 42
                    },
                    {
                        "a_key": null,
                        "RepeatItem": [
                            { "b_key": "another value" },
                            { "c_key": "" }
                        ],
                        "SubItem": {
                            "d_key": "last value"
                        }
                    }
                ]
            }
        }, { header: custom_header, root: custom_root, indent: tab }))
        .to.equal(`${custom_header}\n` +
                  `<${custom_root}>\n` +
                  `${tab}<ListOfItems>\n` +
                  `${tab}${tab}<Item>\n` +
                  `${tab}${tab}${tab}<a_key>a string value</a_key>\n` +
                  `${tab}${tab}${tab}<b_key>42</b_key>\n` +
                  `${tab}${tab}</Item>\n` +
                  `${tab}${tab}<Item>\n` +
                  `${tab}${tab}${tab}<a_key>null</a_key>\n` +
                  `${tab}${tab}${tab}<RepeatItem>\n` +
                  `${tab}${tab}${tab}${tab}<b_key>another value</b_key>\n` +
                  `${tab}${tab}${tab}</RepeatItem>\n` +
                  `${tab}${tab}${tab}<RepeatItem>\n` +
                  `${tab}${tab}${tab}${tab}<c_key></c_key>\n` +
                  `${tab}${tab}${tab}</RepeatItem>\n` +
                  `${tab}${tab}${tab}<SubItem>\n` +
                  `${tab}${tab}${tab}${tab}<d_key>last value</d_key>\n` +
                  `${tab}${tab}${tab}</SubItem>\n` +
                  `${tab}${tab}</Item>\n` +
                  `${tab}</ListOfItems>\n` +
                  `</${custom_root}>\n`)})

    it('should indent with tab by default with options.indent', () => {
        let custom_root = 'NewRootElement'
        expect(jsonxml({
            "Tag1": {
                "Tag2": { "key2": "value 2" }
            }
        }, { indent: true }))
        .to.equal(`<Tag1>\n\t<Tag2>\n\t\t<key2>value 2</key2>\n\t</Tag2>\n</Tag1>\n`)
    })
})


