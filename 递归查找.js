let start = new Date()
function findStr(str,s){
    for(let i = 0;i<str.length;i++){
        if(s===str[i]){
            return i
        }else{
            findStr(str.substr(i+1),s)
        }
    }
}
let str = 'sassadsdfuhn'
console.log(findStr(str,'f'));
console.log(new Date()-start);
