function result(n){
    if(n===1){
        return n
    }else{
        return n*result(n-1)
    }
}
console.log(result(150));