function sameFrequency(a, b) {
    let strA = a.toString();
    let strB = b.toString();

    if (strA.length !== strB.length) {
        return false;
    }

    const temp = {};

    for (let i = 0; i < strA.length; i++) {
        let currentValue = strA[i];
        temp[currentValue] ? temp[currentValue] += 1 : temp[currentValue] = 1
    }

    for (let i = 0; i < strB.length; i++) {
        let currentValue = strB[i];

        if (!temp[currentValue]) {
            return false;
        }

        temp[currentValue] -= 1;
    }

    return true;
}

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false


console.log(sameFrequency(182,281))
console.log(sameFrequency(34,14))
console.log(sameFrequency(3589578, 5879385))
console.log(sameFrequency(22,222))