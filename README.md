# scrabbleify
Scrabbleify words (mix letters within words and output the result)

### Version history
#### 0.1.1
Supports mixing characters within words. 
Respects the position of *inviolates* like basic punctuation and numbers. (customizable)
`1234567890`, `,'".;:` and `\~!@#$%^&*()_+{}[]|`

By default separator is a ' ' but can use one or more custom separators.

**Simple case:**
```javascript
const {scrabbleify} = require('@hyggedyne/scrabbleify')

const loremIpsum = `Lorem Ipsum is simply ....  of Lorem Ipsum.`

const output = scrabbleify(loremIpsum)

//output is like 'oeLmr Ispum si mipsly ... fo omLre psuIm'

``` 

**Keep 'I' and 'L' in the same position:**
```javascript
scrabbleify(loremIpsum, [' ', 'L','I'])

//output is like 'Lmoer Ipusm si psmliy ydmmu'
```

Exports the following
* `scrabbleify(inputString, [separator, [inviolates]]` *separator* can be a char or array of chars. *inviolates* can be a boolean or an array of chars.
* `numbers`
* `punctuation`
* `symbols`