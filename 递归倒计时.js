function countjianjian(i, n) {
    if (i <= n) {
        return n
    } else {
        return countjianjian(--i, n)
    }
}
console.log(countjianjian(10, 0),11111111);