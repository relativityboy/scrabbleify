const scrabbleify = (str='', separator=[' ']) => {
  if(separator.length === 0) {
    const letters = str.split('')
    const n = letters.length
    for(let i = n - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let tmp = letters[i];
      letters[i] = letters[j];
      letters[j] = tmp;
    }
    return letters.join("");
  }
  const separatorClone = separator.concat()
  const sep = separatorClone.shift()
  const segments = str.split(sep).map(segment => scrabbleify(segment, separatorClone))

  return segments.join(sep)
}

const numbers = '1234567890'.split()
const punctuation = ',\'".;:'.split()
const symbols = '~!@#$%^&*()_+{}[]|\\'.split()
const all = numbers.concat(punctuation).concat((symbols))

module.exports = {
  scrabbleify: (str='', separator=[' '], inviolates=true) => {
    let sep = (separator.constructor !== Array)? [separator] : separator
    if(!inviolates) {
      return scrabbleify(str, separator)

    } else if(inviolates === true) {
      return scrabbleify(str, separator.concat(all))
    } else {
      return scrabbleify(str, separator.concat(inviolates))
    }
  },
  numbers: numbers.concat(),
  punctuation: punctuation.concat(),
  symbols: symbols.concat(),
}