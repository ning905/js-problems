const toPigLatin = (EngTxt) => {
    let translation = ''
    const message = EngTxt.split(' ')

    for (let i = 0; i < message.length; i++) {
        let thisTranslation
        if (i === 0) {
            thisMessage = message[i].toLowerCase()
            thisTranslation = convertEngWordToPigLatin(thisMessage)
            thisTranslation = thisTranslation[0].toUpperCase() + thisTranslation.slice(1)
            translation += thisTranslation
        } else {
            thisTranslation = ' ' + convertEngWordToPigLatin(message[i])
            translation += thisTranslation
        }
    }
    return translation
}

const convertEngWordToPigLatin = (EngWord) => {
    return pigWord = EngWord.slice(1) + EngWord[0] + 'ay'
}

const EngTxt = 'The quick brown fox'
console.log('Pig Latin: ', toPigLatin(EngTxt))