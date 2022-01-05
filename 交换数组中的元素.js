function swapIntegers(A, index1, index2) {
    // write your code here
    [A[index1], A[index2]] = [A[index2], A[index1]]

    return A
}
console.log(swapIntegers([1, 2, 3, 4,6,7,44,56], 2,3));