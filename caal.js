
var str = '1.1+2'
function strExpression2arrExpression(expression) {//字符串转换为数组
    var arr = [];
    var a = []
    var a2 = []
    var reg = /sqrt[(]([0-9]+)[)]/g
    var temp = ''
    while (res = reg.exec(expression)) {
        console.log(res, a);
        a.push(Math.sqrt(res[1]))
    }
    var reg2 = /negate[(]([0-9]+)[)]/g
    while (res = reg2.exec(expression)) {
        console.log(res, a2);
        a2.push(-(res[1]))
    }
    reg3 = /(?<![(])[0-9.]+|[-+*/][0-9.]+/g
    while (res = reg3.exec(expression)) {
        console.log(res, 'xy', temp, 'temp');
        temp = temp + res[0]
    }
    console.log(temp, 'jies');
    expression = temp
    for (var i = 0, s, t, l = expression.length; i < l; i++) {
        s = expression.charAt(i);
        if (/[)a-zA-Z(]/.exec(s)) {
            // a.push(s)
        }
        else if (isNaN(s) && s != '.') {
            arr.push(s);
        }
        else {
            t = s;
            while (i < l) {
                s = expression.charAt(i + 1);
                if (!isNaN(s) || s == '.') {
                    t += s;
                    i++;
                } else {
                    break;
                }
            }
            arr.push(parseFloat(t));
        }
    }
    // console.log(a, 'fa');


    if (a.length > 0) {
        a = a.reduce((a, b) => a + b)
    }
    if (a2.length > 0) {
        a2 = a2.reduce((a, b) => a + b)
        console.log(a2, 'a2', a);
        a = a + a2
    }
    console.log(arr, 'arr',a,'a',a2);
    if(a)
    arr.unshift(a)
    console.log(arr, 'arr',a,'a',a2);
    return arr;
}
function infixExpression2prefixExpression(str) { //将中缀表达式转换为前缀表达式
    var priority = {
        '*': 2,
        '/': 2,
        '+': 1,
        '-': 1
    }
    var s1 = [], s2 = [], operator = function (o) {
        var last = s1[s1.length - 1];
        if (s1.length == 0 || last == ')') {
            s1.push(o);
        } else if (priority[o] >= priority[last]) {
            s1.push(o);
        } else {
            s2.push(s1.pop());
            operator(o);
        }
    };
    var arrExpression = strExpression2arrExpression(str)
    arrExpression = arrExpression.filter(item=>{
        if(typeof item!=='object'){
            return item
        }
    })
    console.log(arrExpression,'expre');
    s1.length = 0;
    s2.length = 0;
    for (var i = arrExpression.length - 1, o; i >= 0; i--) {
        o = arrExpression[i]
        if (!isNaN(o)) {
            s2.push(o);
        } else {
            if (o == '+' || o == '-' || o == '*' || o == '/') {//运算符
                operator(o)
            } else {//括号
                if (o == ')') {//右括号
                    s1.push(o)
                } else {//左括号
                    var s = s1.pop();
                    while (s != ')') {
                        s2.push(s);
                        s = s1.pop();
                    }
                }
            }
        }
    }
    if (s1.length > 0) {
        while (s1[0] != undefined) {
            s2.push(s1.pop())
        }
    }
    // console.log(s1, s2,'s1,s2');
    s1.length = 0;

    return s2.slice();
}
function computePrefixExpression(str) {
    var s1 = [], result;
    var prefixExpression = infixExpression2prefixExpression(str)
    s1.length = 0;
    //计算
    while (prefixExpression.length > 0) {
        var o = prefixExpression.shift();
        if (!isNaN(o)) {
            s1.push(o);
        } else {
            switch (o) {
                case '+':
                    {
                        result = s1.pop() + s1.pop();
                        break;
                    }
                case '-':
                    {
                        result = s1.pop() - s1.pop();
                        break;
                    }
                case '*':
                    {
                        result = s1.pop() * s1.pop();
                        break;
                    }
                case '/':
                    {
                        result = s1.pop() / s1.pop();
                        break;
                    }
            }
            s1.push(result);
        }
    }
    return s1[0];

}
function compute(expression) {
    return computePrefixExpression(expression);
}
console.log(compute(str),'zuih')
