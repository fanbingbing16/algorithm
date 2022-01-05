
/**
 * printX
 *
 * @param n: An integer.
 * @return: A string list.
 */
function printX(n) {
    // write your code here
    let arr = []
    for (let i = 0; i < n; i++) {
        let temp = new Array(n).fill(' ') 
        temp[i] = temp[n - i - 1] = 'X'
        arr.push(temp.join(''))
    }
    return arr
}
console.log(printX(100));

