function createNestedArray (row, col){
  const dict  = 'abcdefghijklmnopqrstuvwxyz'
  const arr   = []
  for(let i = 0; i < row; i++){
    const temp = []
    for(let j = 0; j < col; j++){
      temp.push(dict[Math.floor(Math.random() * 26)])
    }
    arr.push(temp)
  }
  return arr
}

console.log(createNestedArray(5,3))
console.log(createNestedArray(4,2))