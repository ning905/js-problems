// To generate a random number between 0 and given number(exclusively).
const randomNum1 = (num) => Math.random() * num
console.log(randomNum1(4))

// To include the given number in the range.
const randomNum2 = (num) => Math.floor(Math.random() * (num + 1))
console.log(randomNum2(4))

// To generate a random number with a certain range. maxNum is not included.
function randomFromMinToMax(min, max) {
    const diffRange = (max - min)
    const numInDiffRange = diffRange * Math.random()
    return numInDiffRange + min
}
console.log(randomFromMinToMax(6, 9))

// To include maxNum
const randomMinMax = (min, max) => {
    const diff = max - min
    const numWithinDiff = Math.floor(Math.random() * (diff + 1))
    return numWithinDiff + min
}
console.log(randomMinMax(6, 9))