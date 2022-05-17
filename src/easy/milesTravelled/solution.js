function milesTravelled(mins, speed) {
    return Math.round(mins / 60 * speed)
}

console.log(milesTravelled(120, 30))

console.log(milesTravelled(180, 20))

console.log(milesTravelled(180, 20.3333))