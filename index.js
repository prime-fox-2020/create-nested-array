function createNestedArr(jumlahRow, jumlahCol) {
    let words = 'abcdefghijklmnopqrstuvwxyz'
    let theBoard = []
    for (let i = 0; i < jumlahRow; i++) {
        let temp = []
        for (let j = 0; j < jumlahCol; j++) {
            let randomWord = Math.floor(Math.random() * 25)
            temp.push(words[randomWord])
        }
        theBoard.push(temp)
    }
    return theBoard
}

console.log(createNestedArr(5,3))
/*
output:
[ [ 'p', 's', 'w' ],
  [ 'r', 'a', 'i' ],
  [ 'q', 'x', 'c' ],
  [ 'r', 'q', 'w' ],
  [ 'm', 'o', 'y' ] ]
*/
console.log(createNestedArr(4,2))
/*
output:
[ [ 'b', 'r' ],
  [ 'h', 'u' ],
  [ 'c', 'v' ],
  [ 'i', 'i' ] ]
*/