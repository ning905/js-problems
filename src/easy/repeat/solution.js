const duplicate = (string) => {
    let newString = ''
    for (i = 0; i < string.length; i++) {
        newString += string[i].repeat(2)
    }
    return newString
}

console.log(duplicate('String'))
console.log(duplicate('Hello World!'))