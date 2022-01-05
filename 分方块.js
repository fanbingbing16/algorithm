// 如何将一块地均匀地分成方块，
// 并确保分出的方块是最大的呢
function fenFangkuai(c, k, count) {

    count = count || 1
    if (c !== k) {
        console.log(c, k, count);
        return fenFangkuai(c - k > 0 ? c - k : c, k - c > 0 ? k - c : k, ++count)
    }
    else {
        return count
    }
}

console.log(fenFangkuai(111, 109));