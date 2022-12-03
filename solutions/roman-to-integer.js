
let s = "MCMXCIV"
var romanToInt = function (s) {
    let queue = []
    let compoundedNumber  = ["IX", "IV", "XL", "XC", "CD", "CM"]
    let specialNumber = ["I", "X", "C"]
    let romanNumberDict = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
        "IX": 9,
        "IV": 4,
        "XL": 40,
        "XC": 90,
        "CD": 400,
        "CM": 900
    }
    // console.log({ stringArray })

    let i = 0
    while (i < s.length) {
        if (specialNumber.includes(s[i]) && compoundedNumber.includes(s[i] + s[i + 1])) {
            queue.push(s[i] + s[i + 1])
            i = i + 2

        }
        else {
            queue.push(s[i])
            i = i + 1
        }
    }

    return queue.reduce((acc, pre) => acc + romanNumberDict[pre], 0)

};

console.log(romanToInt(s))