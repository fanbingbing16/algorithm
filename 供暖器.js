function minBig(houses, beats) {
    let max = maxArr(houses)
    return [max, Math.abs(beats[0] - max)]
}

function maxArr(arr) {
    let min = 0
    arr.forEach(element => {
        if (element > min) {
            min = element
        }
    });
    return min
}
console.log(minBig([1, 2, 3, 4], [2]));