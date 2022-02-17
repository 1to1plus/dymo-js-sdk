# JSONXML

A small and simple JSON to XML converter.

## Why?

Because I needed one small library, without any dependency and I needed it to treat arrays as repeating elements.

## How to use

```npm install jsonxml```

Then, in your code:

```
const jsonxml = require('jsonxml')

let XMLstring = jsonxml(JSONObject, options)
```

JSONXML will transform this object

```
{
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
}
```
into this XML string
```
<ListOfItems>
  <Item>
    <a_key>a string value</a_key>
    <b_key>42</b_key>
  </Item>
  <Item>
    <a_key>null</a_key>
    <RepeatItem>
      <b_key>another value</b_key>
    </RepeatItem>
    <RepeatItem>
      <c_key></c_key>
    </RepeatItem>
    <SubItem>
      <d_key>last value</d_key>
    </SubItem>
  </Item>
</ListOfItems>
```
- As of now, only JSON-compatible types are supported. Those are: object, array, string, number, boolean and null.
- Literals are outputted as-is.
- The options object supports the following properties:
    - header: if ```true```, will output a standard XML header; if a string, will be used as header.
    - root: a string to be used as a root tag.
    - indent: if ```true```, will prettyprint the output with tabs; if a string, will be used to indent the prettyprinted  output.


## TODO
- Parse tag attributes.
- Handle CDATA.
- Handle more JS types such as Date or Map.
- Optionally Escape strings.
- Optionally use arrays as ordered objects.
- Optionally output empty tags.
- Optionally change the way null is outputted.
- Validate XML tag names.
- Some leftover error checking.
