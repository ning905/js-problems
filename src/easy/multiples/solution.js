const multiplyArray = (num, len) => {
    const result = []

    for (let i = 1; i <= len; i++) {
        result.push(num * i)
    }

    return result
}

console.log(multiplyArray(7, 5))

console.log(multiplyArray(12, 10))

console.log(multiplyArray(17, 6))