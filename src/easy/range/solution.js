const myArray = [1, 12, 27, 48, 56, 63, 103, 105, 112, 119, 134]

const difference = (...array) => {
    const max = Math.max(...array)
    const min = Math.min(...array)

    return diff = max - min
}

console.log(difference(...myArray))

const anotherDiff = (array) => {
    let min = array[0]
    let max = array[0]
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i]
        } else if (max < array[i]) {
            max = array[i]
        }
    }
    return max - min
}

console.log('difference', anotherDiff(myArray))