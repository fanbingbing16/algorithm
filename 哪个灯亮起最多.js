function longestLightingTime(operation) {
    // write your code here
    let s = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'i', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let a = {}
    let time = 0

    operation.map(element => {
        if (a[element[0]] !== undefined) {
            if (a[element[0]] < element[1] - time) {
                a[element[0]] = element[1] - time
            }
        } else {
            a[element[0]] = element[1] - time
        }
        time = element[1]
    })
    console.log(Object.values(a))
    for(let key in a){
        if(a[key]===Math.max(...Object.values(a))){
            return s[+key]
        }
    }
    // return s
}
console.log(longestLightingTime([[0, 2], [1, 5], [0, 9], [2, 15]]
));