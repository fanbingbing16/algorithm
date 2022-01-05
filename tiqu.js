var str = 'sqrt(55)+sqrt(5)+negate(6)+3+5-6'
var reg = /[+-*/][0-9]+/
console.log(reg.exec(str))