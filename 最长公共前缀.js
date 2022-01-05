function longCommon(arr){
    arr = arr.sort()
    let left = 0
    let right = 0
    let arr2 = []
    for(;left>arr.length&&right>arr[left].length;){
        if(right<arr[left].length){
            arr2.push(arr)
            right++
        }else{
            left++
            arr2 = arr.map(item=>{
                if(item.indexOf(arr2)!==-1){
                    return item
                }
            })
        }
        
    }
    return arr2
}
console.log(longCommon(['123','12','125645']))