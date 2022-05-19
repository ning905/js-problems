function getRandomNumber(min, max) {
    gap = max - min
    randomWithinGap = Math.floor(Math.random() * gap)
    return randomNum = randomWithinGap + min
}

function isOddOrEven() {
    getRandomNumber(1, 100)

    if (randomNum % 2) {
        return 'Odd'
    }
    return 'even'
}