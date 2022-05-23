const morseToEngRef = {
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
}


const reverseRef = (reference) => {
    const reversedRef = {}
    kayArr = Object.keys(reference)
    valueArr = Object.values(reference)
    for (i = 0; i < valueArr.length; i++) {
        reversedRef[valueArr[i]] = kayArr[i]
    }
    return reversedRef
}
const EngToMorseRef = reverseRef(morseToEngRef)
console.log('EngToMorseRef', EngToMorseRef)


const decode = (txtInMorse) => {
    const message = txtInMorse.split(' ')
    const charLength = message.length
    let translation = ''

    for (i = 0; i < charLength; i++) {
        key = message[i]
        if (morseToEngRef.hasOwnProperty(key)) {
            translation += morseToEngRef[key]
        } else if (key === '/') {
            translation += ' '
        }
    }
    return translation
}

const encode = (txtInEng) => {
    const message = txtInEng.split('')
    const codeLength = message.length
    console.log('MESSAGE', message)
    let translation = ''

    for (i = 0; i < codeLength; i++) {
        key = message[i].toLowerCase()
        if (EngToMorseRef.hasOwnProperty(key)) {
            translation += (EngToMorseRef[key] + ' ')
        } else if (key === ' ') {
            translation += '/ '
        }
    }
    return translation
}

const txtInMorse = '- .... .. ... / .. ... / ... --- / .... .- .-. -..'
const txtInEng = 'I have no idea'

console.log(decode(txtInMorse))
console.log(encode(txtInEng))