function createNestedArr (row, col){
    let newArr = []
    let kamus = "abcdefghijklmnopqrstuvwxyz"
    for (let i = 0; i < row; i++) {
        let tempRow = []
        for (let j = 0; j < col; j++) {
            let random = Math.ceil(Math.random() * kamus.length)
            // console.log(random);
            tempRow.push(kamus[random-1])
        }
        newArr.push(tempRow)
    }
    return newArr
}

console.log(createNestedArr(5,3))
console.log('********************')
console.log(createNestedArr(4,2))