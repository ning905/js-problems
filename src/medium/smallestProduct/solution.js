const lower = 1
const upper = 20

const getAllDivisors = (lower, upper) => {
    allDivisors = []
    for (let i = lower; i <= upper; i++) {
        allDivisors.push(i)
    }
    return allDivisors
}

const isNotMultiple = (num1, num2) => {
    if (num1 % num2 === 0) {
        return false
    }
    return true
}

const getSmallestProduct = (lower, upper) => {
    let product = upper

    const thisAllDivisors = getAllDivisors(lower, upper)

    for (let i = 0; i < thisAllDivisors.length; i++) {
        while (isNotMultiple(product, thisAllDivisors[i])) {
            product += upper
            i = 0
        }
    }
    return product
}


console.log('Smallest Product', getSmallestProduct(lower, upper))