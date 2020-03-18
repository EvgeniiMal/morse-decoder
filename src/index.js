const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    expr = expr.split(/\*+/gi);

    let result = [];

    const addMorse = arr => {
        let morse = [];
        while (arr.length > 0) {
            let chunk = arr.splice(0, 10).join('');
            chunk = chunk.replace(/10/g, '.');
            chunk = chunk.replace(/11/g, '-');
            morse.push(chunk);
        }
        return morse
    }

    const addWords = morse => {
        let str = '';
        morse.forEach(el => {
            el = el.replace(/0/g, '');
            str += MORSE_TABLE[el];
        });
        return str;
    }

    expr.forEach(element => {
        let morseCode = addMorse(Array.from(element));
        result.push(addWords(morseCode));
    });

    return result.join(' ');
}

module.exports = {
    decode
}