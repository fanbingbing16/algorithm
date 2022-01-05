// const p = function () {
//     return new Promise((resolve, reject) => {
//         const p1 = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(1)
//                 console.log('q');
//             }, 0)
//             resolve(2)
//             console.log('p');
//         })
//         p1.then((res) => {
//             console.log(res,1);
//         })        
//         console.log(3);
//         resolve(4);
//     })
// }
// p().then((res) => {
//     console.log(res,2);
// })
// console.log('end');
//-----
// p
// 3
// end
// 2 1
// 4 2
// q
//-------
// async function async1() {
//     console.log('async1 start')
//     await async2()
//     console.log('async1 end')
// }
// async function async2() {
//     console.log('async2')
// }
// console.log('script start')
// setTimeout(function () {
//     console.log('setTimeout')
// }, 0)
// async1();
// new Promise(function (resolve) {
//     console.log('promise1')
//     resolve();
// }).then(function () {
//     console.log('promise2')
// })
// console.log('script end')
// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout
//----
let resolvePromise = new Promise(resolve => {
    let resolvedPromise = Promise.resolve()
    resolve(resolvedPromise);  // 提示：resolve(resolvedPromise) 等同于：  // Promise.resolve().then(() => resolvedPromise.then(resolve));})
    resolvePromise.then(() => {
        console.log('resolvePromise resolved')
    })
    let resolvedPromiseThen = Promise.resolve().then(res => {
        console.log('promise1')
    })
    resolvedPromiseThen.then(() => {
        console.log('promise2')
    }).then(() => {
        console.log('promise3')
    })
})
resolvePromise()
