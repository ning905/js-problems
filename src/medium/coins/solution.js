const coinValue = [100, 25, 10, 5, 1]

function totalCoins(totalPrice) {
    const totalCoinsNeeded = []

    for (let i = 0; i < coinValue.length; i++) {
        const amount = Math.floor(totalPrice / coinValue[i])
        totalPrice -= amount * coinValue[i]

        if (amount > 0) {
            totalCoinsNeeded.push(amount + ' * ' + coinValue[i])
        }
    }
    return totalCoinsNeeded
}


console.log(totalCoins(107))
console.log(totalCoins(57))
console.log(totalCoins(34))
console.log(totalCoins(226))