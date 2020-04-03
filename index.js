function createNestedArray(row,col){
    var alphabet = 'abcdefghijlkmnopqrstuvwxyz'
    let count
    let array = []
    for (let i = 0; i<row; i++){
        let arrayRow = []
        for (let j = 0; j<col; j++){
            count = Math.round(Math.random()*alphabet.length-1)
            arrayRow.push(alphabet[count])
        }
        array.push(arrayRow)
    }
    return array
}

console.log(createNestedArray(5,3))
console.log(createNestedArray(4,2))