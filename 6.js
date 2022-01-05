function numIslands(grid) {
    const row = grid.length;
    if (row === 0)
        return 0;
    const col = grid[0].length;
    const parents = [];
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            parents[i * col + j] = i * col + j;
        }
    }
    function find(root) {
        if (root !== parents[root])
            parents[root] = find(parents[root]);
        return parents[root];
    }
    function union(x, y) {
        x = find(x);
        y = find(y);
        if (x !== y) {
            parents[x] = y;
        }
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === "1") {
                i < row - 1 &&
                    grid[i + 1][j] === "1" &&
                    union((i + 1) * col + j, i * col + j);
                j < col - 1 &&
                    grid[i][j + 1] === "1" &&
                    union(i * col + j + 1, i * col + j);
            }
            else {
                parents[i * col + j] = -parents[i * col + j];
            }
        }
    }
    return parents.filter((value, key) => key === value && Object.is(key, value))
        .length;
}


console.log(numIslands);
