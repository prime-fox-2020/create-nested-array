function createNestedArr(jumlahRow, jumlahCol) {
    let res = []
    let huruf = 'abcdefghijklmnopqrstuvwxyz'

    for(let i = 0; i < jumlahRow; i++) {
        let temp = []
        for(let j = 0; j < jumlahCol; j++) {
            temp.push(huruf.charAt(Math.round(Math.random() * huruf.length)))
        }
        res.push(temp)
    }
    return res
}

console.log(createNestedArr(5, 3));
console.log(createNestedArr(4, 2));