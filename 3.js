function decode(s) {
    return s
        .replace(/[a-zA-Z]/g, '')
        .split('')
        .filter((_, index) => !(index % 2))
        .reduce((pre, cur) => pre + +cur, 0);
}
console.log(decode('fert46576788'));
