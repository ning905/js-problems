const PascalTriangle = (numOfRows) => {
    const triangle = []

    for (let i = 0; i < numOfRows; i++) {
        const thisRow = [1]

        if (i >= 1) {
            for (let j = 1; j < triangle[i - 1].length; j++) {
                thisRow.push(triangle[i - 1][j - 1] + triangle[i - 1][j])
            }
            thisRow.push(1)
        }
        triangle.push(thisRow)
    }
    return triangle
}

console.log('triangle', PascalTriangle(10))