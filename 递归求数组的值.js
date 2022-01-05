function addArr(arr,sum,i){
    sum = sum||0
    i = i ||0
    if(i>=arr.length){
        return sum
    }else{
        return addArr(arr,sum+arr[i],++i)
    }
}
console.log(addArr([1,1,2,3,8]));