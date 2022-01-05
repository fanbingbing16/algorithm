// let graph = {}
// graph["start"] = {}
// graph["start"]["a"] = 6
// graph["start"]["b"] = 2
// graph["a"] = {}
// graph["a"]["fin"] = 1
// graph["b"] = {}
// graph["b"]["a"] = 3
// graph["b"]["fin"] = 5
// graph["fin"] = {}
// let costs = {}
// costs["a"] = 6
// costs["b"] = 2
// costs["fin"] = 999999
// let parents = {}
// parents["a"] = "start"
// parents["b"] = "start"
// parents["fin"] = null
//图一
// let graph = {}
// graph.start = {}
// graph.start.a = 3
// graph.a = {}
// graph.a.b = 2
// graph.a.c = 6
// graph.b = {}
// graph.b.c = 5
// graph.c ={}
// graph.c.fin = 4
// graph.fin = {}
// let costs = {}
// costs.a = 3
// costs.b = 9999999
// costs.c = 9999999
// costs.fin = 99999999
// let parents = {}
// parents.a = 'start'
// parents.b = 'a'
// parents.c = null
// parents.fin = null
//图二
//只需要提供graph，自动生成costs和parents
// let graph = {start:{a:6,b:2},a:{fin:1},b:{a:3,fin:5},fin:{}}
// let graph = {start:{a:3},a:{b:2,c:6},b:{c:5},c:{fin:4},fin:{}}
// let graph = {start:{a:5,b:2},a:{c:4,d:2},b:{a:8,d:7},c:{fin:3,d:6},d:{fin:1},fin:{}}
// let graph = {start:{a:10},a:{b:1,c:20},b:{c:1},c:{fin:30},fin:{}}
let graph = {start:{a:2,b:2},a:{c:2,fin:2},b:{a:2},c:{b:-1,fin:2},fin:{}}

let costs = {}
let parents = {}
for(let key in graph["start"]){
    costs[key] = graph["start"][key]
}
for(let key in graph){
    if(key!=='start'&&!(key in costs)){
        costs[key] = 9999999
    }
}
for (let key in graph) {
    for (let key2 in graph[key]) {
        if (parents[key2] === undefined) {
            parents[key2] = key
        } else if(parents[key2]&&parents[key2]!=="start") {
            parents[key2] = null
        }
    }
}
let processed = []
function findLowestCostNode(costs) {
    let lowestCost = 999999
    let lowesrcostNode = null
    for (let node in costs) {
        let cost = costs[node]
        if (cost < lowestCost && !(processed.includes(node))) {
            lowestCost = cost
            lowesrcostNode = node
        }
    }
    return lowesrcostNode
}
let node = findLowestCostNode(costs)
while (node) {
    let cost = costs[node]
    let neighbors = graph[node]
    for (let n in neighbors) {
        let newcost = cost + neighbors[n]
        if (costs[n] > newcost) {
            costs[n] = newcost
            // if(Object.keys(parents).includes(node)){
            //     for(let key in parents){
            //         if(parents[key]===node){
            //             parents[key] = undefined
            //             delete parents[key]
            //         }
            //     }
            //      console.log(parents,node);
            // }
            parents[n] = node
        }
    }
    processed.push(node)
    node = findLowestCostNode(costs)
}
console.log(costs.fin,parents);
