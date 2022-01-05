// 如果整个整数 X 本身是完全平方数，同时它的每一位数字也都是完全平方数，我们就称 X 是完美平方数。

// 前几个完美平方数是 0、1、4、9、49、100、144……

// 即第 1 个完美平方数是 0，第 2 个是 1，第 3 个是 4，……

// 请你计算第 2020 个完美平方数是多少？
// 因为程序浏览器最大只能计算这么多位，所以没有算出2020的准确数字，前面93个可以
function qiuSqrt(num) {
    let a = []
    for (let i = 0; i < 1000000000; i++) {
        if (Math.floor(Math.sqrt(i)) - Math.sqrt(i) === 0) {
            let o
            for (let j = 0; j < String(i).length; j++) {
                if (Math.floor(Math.sqrt(String(i).charAt(j))) === Math.sqrt(String(i).charAt(j))) {
                    o = true
                } else {
                    j = String(i).length
                    o = false
                }
            }
            if (o)
                a.push(i)
            if(a.length === 2020)
            i = 100000000
        }
    }
    return [a,a.length]
}
console.log(qiuSqrt(1));