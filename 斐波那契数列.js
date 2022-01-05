function getNumber(n){
    if(typeof n !== 'number') return false
    var i, a, b, c;
        a = 0;
        b = 1;
        for (i = 0; i < n - 1; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return a;
}
// 1 1 2 3 5 8 13 21 34 55 89 144
console.log(getNumber(1));