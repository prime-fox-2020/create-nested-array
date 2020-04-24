function createNested(row, col) {
    let res = [];
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for (var i = 0; i < row; i++) {
        var temp = []
        for (var j = 0; j < col; j++) {
            let random = Math.floor(Math.random() * alphabet.length)
            temp.push(alphabet[random])
        }
        res.push(temp)
    }
    return res
}
console.log(createNested(3, 5))