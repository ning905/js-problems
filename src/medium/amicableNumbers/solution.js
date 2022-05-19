function d(n) {
    let sum = 0;
    const myArray = []

    for (let i = n; i > 1; i--) {
        divisor = n / i
        if (Number.isInteger(divisor)) {
            if (!myArray.includes(divisor)) {
                myArray.push(divisor)
            }
        }
    }

    for (let j = 0; j < myArray.length; j++) {
        sum += myArray[j]
    }

    return sum
}

const allAmicableNumber = []

function calculateAmicable(n) {
    for (let k = 0; k < n; k++) {
        const sum1 = d(k)

        if (k === d(sum1) && k !== sum1) {
            allAmicableNumber.push(k)
        }
    }
    return allAmicableNumber
}

console.log(calculateAmicable(10000))