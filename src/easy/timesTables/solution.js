// const table = [
//     [],
//     [],
//     [],
//     [],
//     []
// ]

// const timesTable = () => {
//     for (let i = 1; i <= 5; i++) {
//         for (let j = 1; j <= 5; j++) {
//             table[i - 1].push(i * j)
//         }
//     }
//     return table
// }

// console.log('my result:', timesTable())


const createTimesTable = (numArrays, maxTimes) => {
    const timesTable = []

    for (let i = 1; i <= numArrays; i++) {
        timesTable.push([])
        for (let j = 1; j <= maxTimes; j++) {
            timesTable[i - 1].push(j * i)
        }
    }
    return timesTable
}

const numArrays = 12
const maxTimes = 12
console.log('result', createTimesTable(numArrays, maxTimes))