let sum = 0;

function sumMultiples(num) {
    for (let i = 0; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i
        }
    }
    return sum
}

console.log(sumMultiples(1000))