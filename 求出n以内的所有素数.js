function prime(n) {
    // Write your code here
    let s=[]
    for(let i = 1; i < n ;i ++){
        let o = true
        for(let j = 2; j < i; j++){
            if(i%j===0){
                o = true
                j = i
            }else{
                o = false
            }
        }
        if(!o){
            s.push(i)
        }
    }
    return s
  }
  console.log(prime(100));