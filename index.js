function createNestedArr(jumlahRow, jumlahCol){
  const  kotak = []
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  
  for(let i = 0; i < jumlahRow; i++){
    kotak.push([])
  }

  for(let i = 0; i < kotak.length; i++){
   for(let j = 0; j < jumlahCol; j++){
     kotak[i].push(alpha[Math.floor(Math.random() * alpha.length)])
   }
  }
  return kotak
}


console.log(createNestedArr(5,3))

console.log(createNestedArr(4,2))