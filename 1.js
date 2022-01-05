// function add(a, b, c) {
//     let x = 0
//     function add2(a, b) {
//         if (x>c) {
//             return x
//         }
//         if (a<c) {
//             console.log(a,'a',x)
//             x = x + a + b
//             add2(a+1, b)
//         }
//         if(b<a){
//             console.log(b,'b',x)
//             x = x + a + b
//             add2(a, b+1)
//         }
//     }
//     add2(a, b)
//     return x
// }
// console.log(add(8, 8, 17))
let parents = {}
let graph = {start:{a:6,b:2},a:{fin:1},b:{a:3,fin:5},fin:{}}

for (let key in graph) {
    for (let key2 in graph[key]) {
        console.log(key ,key2,parents[key2]);
        if (parents[key2] === undefined) {
            parents[key2] = key
        } else if(parents[key2]&&parents[key2]!=="start") {
            parents[key2] = null
            console.log(parents);
        }
    }
}
console.log(parents);