function createNestedArr(Row, Col) {
    // YOUR CODE HERE...
    const kamus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    // console.log('jumlahRow: ', jumlahRow);
    // console.log('jumlahCol: ', jumlahCol);
    let hasil = []
    for (let i = 0; i < Row; i++) {
        let row = []
        for (let j = 0; j < Col; j++) {
            let isi = Math.round(Math.random() * 25)
            row.push(kamus[isi].toLowerCase())

        }
        hasil.push(row)
    }
    return hasil

}

console.log(createNestedArr(5, 3))

console.log(createNestedArr(4,2))