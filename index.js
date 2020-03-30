function createNestedArr(jumlahRow, jumlahCol){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let result = []
    for(let i = 0; i < jumlahRow; i++){
        let temp = []
        for(let j = 0; j < jumlahCol; j++){
            let random = alphabet.charAt(Math.floor(Math.random() * alphabet.length))
            temp.push(random)
        }
        result.push(temp)
    }
    return result
}

console.log(createNestedArr(5,3))
console.log(createNestedArr(4,2))
