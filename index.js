
function createNestedArr(jumlahRow, jumlahCol) {
    
    var random=''
    var alph = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < (jumlahRow * jumlahCol); i++) {
    var rnum=Math.floor(Math.random()* alph.length)
        random += alph[rnum]
    }
    
    let answer = []
    let up = 0
    for (let i = 0; i < jumlahRow; i++) {
        let temp = []
        for (let j = 0; j < jumlahCol; j++) {
            temp.push(random[up])
            up++
        }
        answer.push(temp)
    }
    return answer

}
console.log(createNestedArr(5,3))
console.log(createNestedArr(4,2))