const sumOfCubes = (array) => {
    let sum = 0
    for (i = 0; i < array.length; i++) {
        sum += Math.pow(array[i], 3)
    }
    return sum
}

console.log(sumOfCubes([1, 5, 9]))
console.log(sumOfCubes([3, 4, 5]))
console.log(sumOfCubes([2]))