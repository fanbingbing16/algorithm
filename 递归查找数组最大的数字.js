function maxArr(arr, max, i) {
    max = max || 0
    i = i || 0
    if (arr.length > 0) {
        if (max < arr[0]) {
            max = arr[0]
        }
        return maxArr(arr.slice(1), max, ++i)
    } else {
        return max
    }
}
console.log(maxArr([1, 12, 58, 3,13,1]));