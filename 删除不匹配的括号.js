function removeParentheses(s) {
    // s = s.replace(/[a-z]/g, '')
    // for (let i = 0; i < s.length; i++) {
    //     if (s.indexOf(')') < s.indexOf('(') && s.indexOf(')') > -1) {
    //         s = s.substr(0, s.indexOf(')')) + s.substr(s.indexOf(')') + 1, s.length)
    //     }
    // }
    let i
    if (s.indexOf('(') > s.indexOf(')') && s.indexOf(')') !== -1) {
        i = s.indexOf(')')
    } else if (s.indexOf('(') <= s.indexOf(')') && s.indexOf('(') !== -1) {
        i = s.indexOf('(')
    } else if (s.indexOf(')') === -1 && s.indexOf('(') !== -1) {
        i = s.indexOf('(')

    } else if (s.indexOf('(') === -1 && s.indexOf(')') !== -1) {
        i = s.indexOf(')')
    }
    let re = s
    let j = 0
    let a = 0
    for (; i < s.length;) {
        if (re.charAt(i) === '(') {
            if (re.indexOf(')', a) === -1) {
                re = re.substr(0, i) + re.substr(i+1)
            } else {
                a = re.indexOf(')', a) +1
                i++
            }
        } else if (re.charAt(i) === ')') {
            let temp = re.substr(j, i)
            if (temp.indexOf('(') === -1) {
                if(i<s.length-1){
                  re = re.substr(0,i) + re.substr(i+1)  
                }
                else{
                    re = re.substr(0,i-1)
                }
            } else {
                j =temp.indexOf('(')+1
                i++
            }
        }else {
            i++
        }
    }
    console.log(s,re);
    if(s===re){
        return 'It is a correct answer.'
    }else
    return re
    
}
console.log(removeParentheses('a)(((cfggg))'));