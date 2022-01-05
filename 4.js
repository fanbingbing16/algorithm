function pre(root) {
    if(!root) return
    console.log(root.val)
    pre(root.left)
    pre(root.right)
  }
  
  // 迭代
  function pre(root) {
    if(!root) return []
    const res = []
    const stack = [root]
    
    while(stack.length) {
      const node = stack.pop()
      res.push(node.val)
      node.right && stack.push(node.right)
      node.left && stack.push(node.left)
    }
    
    return res
  }
  console.log(pre([{val:1,left:2,right:3}]))