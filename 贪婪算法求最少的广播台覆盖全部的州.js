// let a=new Set([1,2,3])
// let b=new Set([4,3,2])

// // 并集
// let union=new Set([...a,...b])
// // 交集
// let intersect=new Set([...a].filter(x=>b.has(x)))
// // 差集
// let difference=new Set([...a].filter(x=>!b.has(x)))

/*假设你办了个广播节目，要让全美50个州的听众都收听得到。为此，你需要决定在哪些广播台播出。在每个广播台播出都需要支付费用，
因此你力图在尽可能少的广播台播出。每个广播台都覆盖特定的区域，不同广播台的覆盖区域可能重叠。如何找出覆盖全美50
个州的最小广播台集合呢？听起来很容易，但其实非常难。
(1)选出这样一个广播台，即它覆盖了最多的未覆盖州。即便这个广播台覆盖了一些已覆盖的州，也没有关系。
(2)重复第一步，直到覆盖了所有的州。这是一种近似算法（approximation algorithm）。
在获得精确解需要的时间太长时，可使用近似算法。*/
let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca"])//州
//广播台
let stations = {}
stations["kone"] = new Set(["id", "nv", "ut"])
stations["ktwo"] = new Set(["wa", "id", "mt"])
stations["kthree"] = new Set(["or", "nv", "ca"])
stations["kfour"] = new Set(["nv", "ca"])
stations["kfive"] = new Set(["ca", "az"])
let already = new Set()//当前广播台已覆盖的州
let stationsAlready = new Set()//已经选中的广播台
while (already.size<statesNeeded.size) {
    let bestStations = new Set()//覆盖了最多的未覆盖州的广播台
    let difference = new Set([...statesNeeded].filter(x => !already.has(x)))//未覆盖州
    for (let key in stations) {
        let intersect = new Set([...stations[key]].filter(x => difference.has(x)))//这个广播台包含的未覆盖州
        if (intersect.size > bestStations.size && !stationsAlready.has(key)) {
            bestStations = key
        }
    }
    if(stations[bestStations]!==undefined)
    already=new Set([...stations[bestStations],...already])
    stationsAlready.add(bestStations)
    
}
console.log(already, 'x', stationsAlready);