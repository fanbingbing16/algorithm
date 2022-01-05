// 美国数学家维纳(N.Wiener)智力早熟，11岁就上了大学。他曾在1935~1936年应邀来中国清华大学讲学。

// 一次，他参加某个重要会议，年轻的脸孔引人注目。于是有人询问他的年龄，他回答说：“我年龄的立方是个4位数。我年龄的4次方是个6位数。这10个数字正好包含了从0到9这10个数字，每个都恰好出现1次。”
// 请你推算一下，他当时到底有多年轻。

let num = 4
let num2 = 6
let a = []
let b = []
var reg = /[0-9]{10}/
reg.exec(num)
for (let i = 1; i < 101; i++) {
    if (String(Math.pow(i, 3)).length === num && String(Math.pow(i, 4)).length === num2) {
        a.push(String(Math.pow(i, 3)) + String(Math.pow(i, 4)))
        b.push(i)
    }
    if (Math.pow(i, 4) > 1000000) {
        i = 101
    }
}
a.some((item,index) => {
    if (new Set(item).size === 10) {
        b = b[index]
        return true
    }

})
//最后的b就是结果
console.log(a,b);