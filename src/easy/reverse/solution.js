const reverse = (string) => {
    let newString = ''
    for (i = string.length - 1; i >= 0; i--) {
        newString += string[i]
    }
    return newString
}

console.log(reverse('String'))
console.log(reverse('Hello World!'))