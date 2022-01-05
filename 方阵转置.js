/*问题描述

给定一个n×m矩阵相乘，求它的转置。其中1≤n≤20，1≤m≤20，矩阵中的每个元素都在整数类型（4字节）的表示范围内。

输入格式

第一行两个整数n和m；

第二行起，每行m个整数，共n行，表示n×m的矩阵。数据之间都用一个空格分隔。

输出格式

共m行，每行n个整数，数据间用一个空格分隔，表示转置后的矩阵。

样例输入

2 4
34 76 -54 7
-4 5 23 9

样例输出

34 -4
76 5
-54 23
7 9*/
str = `2 4\n
34 76 -54 7\n
-4 5 23 9`
str2 = `2 5\n
34 76 -54 7 9\n
-4 5 23 9 10`
str3 = `3 5\n
34 76 -54 7 9\n
34 76 -100 7 9\n
-4 5 23 10 10`
str4 = `10 5\n
34 76 -54 7 9\n
34 76 -66 7 9\n
77 34 -123 7 78\n
34 76 -100 -5 9\n
34 45 -7 7 9\n
89 76 -100 7 9\n
34 76 -100 7 9\n
34 -55 -100 7 88\n
34 8 -100 7 3\n
-4 5 23 10 10`
function rotato(str) {
    let a
    let b = []
    str.split(/[\n]/).slice(1).map((item, index) => {
        b.push(item.split(' '))
        return item.split(' ')
    })
    b = b.map(item => {
        return item.map(element => {
            return +element
        })
    })

    b = b.filter(item => {
        if (item.length > str[str.indexOf('\n') - 1] - 1) {
            return item
        }
    })
    var newArray = b[1].map(function (col, i) {
        return b.map(function (row) {
            return row[i];
        })
    });

    newArray.map((item, index) => {
        if (a) {
            a = a + '\n' + item.join(',')
        } else {
            a = item.join(',')
        }
    })
    a = a.replace(/,/g, ' ')
    // a = str.substr(0, str.indexOf('\n')) + '\n' + a//加上第一行的两个数字
    return a
}
console.log(rotato(str))
console.log(2, '\n', rotato(str2))
console.log(3, '\n', rotato(str3))
console.log(4, '\n', rotato(str4))