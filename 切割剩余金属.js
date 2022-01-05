function maxProfit(costPerCut, salePrice, lengths) {
    // write your code here

        let min = lengths.sort((a, b) => a - b)[0]
        let max = lengths.sort((a, b) => b - a)[0]
        //求数组的最大最小值
        let maxA = 0
        for(let i = 1; i<=max;i++){
            let totalUniformRods =0
            let profit
            let totalCuts =0
            for(let j = 0; j < lengths.length;j++){
                console.log(totalCuts,totalUniformRods,i,j)

                totalUniformRods +=Math.floor(lengths[j]/i)
                if(lengths[j]%i===0){
                    totalCuts+=parseInt((lengths[j]-1)/i)
                }else{
                    totalCuts +=Math.floor(lengths[j]/i)
                }
                console.log(totalCuts,totalUniformRods,i,j,lengths[j])
            }
            profit = totalUniformRods*i*salePrice-totalCuts*costPerCut
            
            maxA = profit>maxA?profit:maxA
            console.log(profit,maxA,i);
        }
        return maxA
}
console.log(maxProfit(5,4,[15,13,24,5,9]));