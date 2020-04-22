function createNestedArr(jumlahRow, jumlahCol){
    let output = []
    let dict = 'abcdefghijklmnopqrstuvwxyz'
    for(var i = 0; i < jumlahRow; i++){
        var tmp = []
        for(var j = 0; j < jumlahCol; j++){
            tmp.push(dict[Math.floor(Math.random() * dict.length)])
        }
        output.push(tmp)
    }
    return output
}
console.log(createNestedArr(5, 3))
console.log(createNestedArr(4, 2))