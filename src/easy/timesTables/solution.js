// const table = new Array(5).fill([])

// const timesTable = () => {
//     for (let i = 1; i <= 5; i++) {
//         for (let j = 1; j <= 5; j++) {
//             table[i - 1].push(i * j)
//         }
//     }
//     return table
// }

// console.log(timesTable())


const createTimesTable = (numArrays, maxTimes) => {
    const timesTable = []

    for (let i = 1; i <= numArrays; i++) {
        const thisTimesTable = []
        for (let j = 1; j <= maxTimes; j++) {
            thisTimesTable.push(j * i)
        }
        timesTable.push(thisTimesTable)
    }
    return timesTable
}

const numArrays = 12
const maxTimes = 12
console.log(createTimesTable(numArrays, maxTimes))