function sort(arr, a, b) {
    a = []
    b = []
    if (arr.length <= 1) return arr
    else {
        for (let i = 1; i < arr.length; i++) {
            console.log(a, b, arr,'x');
            if (arr[i] < arr[0]) {
                a.push(arr[i])
            } else {
                b.push(arr[i])
            }
        }
        return sort(a).concat([arr[0]], sort(b))
    }
}
console.log(sort([1, 2, 1, 35, 6, 1, 432, 3]),'yyyyy');