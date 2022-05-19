const sum1ToNum = (num) => {
    let sum = 0
    for (i = 1; i <= num; i++) {
        sum += i
    }
    return sum
}

console.log(sum1ToNum(5))
console.log(sum1ToNum(100))