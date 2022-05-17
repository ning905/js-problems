const punctuations = ['.', '?', '!']

function makeSentence(sentence) {
    sentence = sentence[0].toUpperCase() + sentence.slice(1)

    if (!punctuations.includes(sentence[sentence.length - 1])) {
        sentence = sentence + '.'
    }

    return sentence
}

console.log(makeSentence('how are you'))
console.log(makeSentence('terrible!'))