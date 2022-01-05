
function binarySearch(list, item) {
    let low = 0
    let high = list.length-1
    list = list.sort((a,b)=>a-b)
    let count = 0
    let start = new Date()
    while (low <= high) {
       count++
        let mid = Math.floor((low + high)/2)
        let guess = list[mid]
        if (guess === item) {
            console.log(new Date()-start,start,new Date(),'no.1',count)
            return mid
        }
        else if (guess > item) {
            high = mid - 1
        }
        else {
            low = mid + 1
        }
        
    }
    console.log(new Date()-start)
    return null
}

function binarySearch2(list, item) {
    
    list = list.sort((a,b)=>a-b)
    let start = new Date()
    for(let i = 0; i < list.length;i++){
        if(list[i]===item){
            console.log(new Date()-start,start,new Date(),'no.2')
            return i
        }
        
    }    
    console.log(new Date()-start)
    return null
}
let my_list = [...new Array(16).keys()];


console.log(binarySearch(my_list,my_list[my_list.length-1]));
console.log(binarySearch2(my_list,my_list[my_list.length-1]));