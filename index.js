function createNestedArr(jumlahRow, jumlahCol){

    let alfabet = 'abcdefghijklmnopqrstuvwxyz'
    let col = []
    for(let i=0; i<jumlahRow; i++){
        let row = []
        for(let j=0; j<jumlahCol; j++){
            let random = Math.floor(Math.random() * 25)
            row.push(alfabet[random])
        }
        col.push(row)
    }

    return col
}

console.log(createNestedArr(5,3))
/**
 * [ ['p', 's', 'w']
 *   ['r', 'a', 'i']
 *   ['q', 'x', 'c']
 *   ['r', 'q', 'w']
 *   ['m', 'o', 'y'] ]
 */

 console.log(createNestedArr(4,2))
 /**
  * [['b', 'r']
  *  ['h', 'u']
  *  ['c', 'v]
  *  ['i', 'i']]
  */