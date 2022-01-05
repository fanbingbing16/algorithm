/*问题描述

编写一个程序，建立了一条单向链表，每个结点包含姓名、学号、英语成绩、数学成绩和C++成绩，并通过链表操作平均最高的学生和平均分最低的学生并且输出。

输入格式

输入n+1行，第一行输入一个正整数n，表示学生数量；接下来的n行每行输入5个数据，分别表示姓名、学号、英语成绩、数学成绩和C++成绩。注意成绩有可能会有小数。

输出格式

输出两行，第一行输出平均成绩最高的学生姓名。第二行输出平均成绩最低的学生姓名。

样例输入

2
yx1 1 45 67 87
yx2 2 88 90 99

样例输出

yx2
yx1*/
let str = `3\n
yx1 1 45 67 87\n
yx4 4 10 70 87\n
yx2 2 88 90 99`
function qiuMaxMin(str) {
    let b = []
    str.split(/[\n]/).slice(1).map((item, index) => {
        b.push(item.split(' '))
        return item.split(' ')
    })
    b = b.filter(item => {
        if (item.length > str[str.indexOf('\n') - 1] - 1) {
            return item
        }
    })
    b = b.map(item => {
        return item.map(element => {
            if (!isNaN(element)){

                return Number(element)
            }else {
                return element
            }
        })
    })
    let min = b[0][0]
    let mins = (b[0][2] + b[0][3] + b[0][4]) / 3
    let max = b[1][0]
    let maxs = (b[1][2] + b[1][3] + b[1][4]) / 3
    b.map(((item, index, arr) => {
        if ((arr[index][2] + arr[index][3] + arr[index][4]) / 3 > maxs) {
            max = arr[index][0]
            maxs = (arr[index][2] + arr[index][3] + arr[index][4]) / 3
        }
        if ((arr[index][2] + arr[index][3] + arr[index][4]) / 3 < mins) {
            min = arr[index][0]
            mins = (arr[index][2] + arr[index][3] + arr[index][4]) / 3
        }
    }))
    return `${max}\n${min}`
}
console.log(qiuMaxMin(str))


