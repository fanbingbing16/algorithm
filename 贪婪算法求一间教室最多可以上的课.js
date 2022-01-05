let a = { 1: { start: 9, end: 10 }, 2: { start: 9.5, end: 10.5 }, 3: { start: 10, end: 11 }, 4: { start: 10.5, end: 11.5 }, 5: { start: 11, end: 12 } }
//五门课，每门课的开始时间和结束时间

function minNumber2(a, str = "start") {

    let min = 99999
    let minNumber = 0
    for (let key in a) {
        if (min > a[key][str] && !processed.includes(key)) {
            min = a[key][str]
            minNumber = key
        }
    }
    return { min: min, minNumber: minNumber }
}
// console.log(minNumber2(a,"end"));
let processed = []
let r = []
let count = 0
// processed.push(r[0].minNumber)

while (Object.keys(a).length > processed.length) {
    if (minNumber2(a, "end").minNumber === minNumber2(a).minNumber) {
        if (r.length===0||minNumber2(a).min >= a[r[r.length-1]["minNumber"]]["end"]) {
            r.push(minNumber2(a))
            processed.push(r[count].minNumber)
            count++
        }else{
            processed.push(minNumber2(a).minNumber)
        }
    }
}
console.log(r,count);