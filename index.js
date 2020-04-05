function createdNestedArr(jumlahRow, jumlahCol) {
  var characters = "abcdefghijklmnopqrstuvwxyz";

  let res = [];
  for (let i = 0; i < jumlahRow; i++) {
    let temp = [];
    for (let j = 0; j < jumlahCol; j++) {
      temp.push(characters.charAt(Math.random() * characters.length));
    }
    res.push(temp);
  }
  return res;
}

console.log(createdNestedArr(5, 3));
console.log(createdNestedArr(4, 2));