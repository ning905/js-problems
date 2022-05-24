const romanToArabicRef = {
    I: 1,
    X: 10,
    C: 100,
    M: 1000,
    V: 5,
    L: 50,
    D: 500
}

const romanNum1 = 'DCXLIX' //649
const romanNum2 = 'MDLXXXIII' //1583
const romanNum3 = 'XLVI' //46
const romanNum4 = 'XXXVIII' //38

const convertRomanToArabic = (romanNum) => {
    let arabicNum = 0

    for (i = romanNum.length - 1; i >= 0; i--) {
        thisArabicNum = romanToArabicRef[romanNum[i]]
        followingArabicNum = romanToArabicRef[romanNum[i + 1]]

        if (thisArabicNum < followingArabicNum) {
            arabicNum -= romanToArabicRef[romanNum[i]]
        } else {
            arabicNum += romanToArabicRef[romanNum[i]]
        }
    }
    return arabicNum
}

console.log(convertRomanToArabic(romanNum1))
console.log(convertRomanToArabic(romanNum2))
console.log(convertRomanToArabic(romanNum3))
console.log(convertRomanToArabic(romanNum4))