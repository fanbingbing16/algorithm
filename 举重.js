function weightCapacity(weights, maxCapacity) {
    // Write your code here
    let max = 0
    for(let i = 0; i < weights.length;i++){
        let temp = 0
        for(let j = 0;j<i;j++){
            temp+=weights[j]+weights[i]
            console.log(temp,i,j)
        }
        console.log(temp,i)
        if(temp>max && temp <maxCapacity){
            max = temp
        }
    }
    return max
  }
console.log(weightCapacity([1,3,5],7));
