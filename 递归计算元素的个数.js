
// 递归求对象的元素个数
function count(obj, num) {
    num = num || 0
    for (let key in obj) {
        if (obj[key]) {
            obj[key] = undefined
            delete obj[key]
            return count(obj, ++num)
        }
    }
    return num
}
//递归求数组对象的元素个数
function count2(arr, num) {
    num = num || 0
    for (let i = 0; i < arr.length; i++) {
        for (let key in arr[i]) {
            if (arr[i][key]) {
                arr[i][key] = undefined
                delete arr[i][key]
                return count2(arr.slice(i), ++num)
            }
        }
    }
    return num
}

console.log(count({ x: 1, y: 2, z: 3, 3333: 5, 332: 3 }));
console.log(count2([{ x: 1, y: 2, z: 3, 3333: 5, 332: 3 }, { y: 2, z: 3, 3333: 5, 332: 3 }]));
