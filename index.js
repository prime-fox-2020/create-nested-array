function createdNestedArr(jumlahRow, jumlahCol) {
  let result = []
  let str = 'abcdefghijklmnopqrstuvwxyz'
  
  for (let i = 0; i < jumlahRow; i++) {
    let temp = []

    for (let j = 0; j < jumlahCol; j++) {
      temp.push(str[Math.floor(Math.random()*26)])
    }
    result.push(temp)
  }
  return result
}

console.log(createdNestedArr(5,3));
console.log(createdNestedArr(4,2));
