let product = 1

function factorial(num) {
    for (let i = num; i > 0; i--) {
        product *= i
    }

    return product
}

console.log(factorial(5))