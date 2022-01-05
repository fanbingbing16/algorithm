function generateParenthesis(n: number): string[] {
    const res: string[] = []
  
    /**
     * @param cur 当前字符串
     * @param left 当前字符串中左括号的数量
     * @param right 当前字符串中右括号的数量
     */
    function recursive(cur: string, left: number, right: number): void {
      if (cur.length === 2 * n) {
        res.push(cur)
        return
      }
      if (left < n) { // 左括号的数量必须小于 n
        recursive(cur + '(', left + 1, right)
      }
      if (right < left) { // 右括号的数量必须小于左括号
        recursive(cur + ')', left, right + 1)
      }
    }
  
    recursive('', 0, 0)
  
    return res
  }
console.log(generateParenthesis(2),'x')
