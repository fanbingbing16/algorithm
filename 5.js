let parents = [2]
function find(root){
    let temp, son = root;
    while(root !== parents[root]){
        root = parents[root];
    }
    while(son !== root){	//路径压缩，其实就是个扁平化处理的过程
        temp = parents[son];
        parents[son] = root;
        son = temp;
    }
    return root;
}
console.log(find(2));