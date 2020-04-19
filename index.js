function nestedArray(row, col){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let res = [];
    for(let i = 0; i < row; i++){
        let temp = [];
        for(let j = 0; j < col; j++){
            let random = alphabet.charAt(Math.floor(Math.random() * alphabet.length))
            temp.push(random);
        }
        res.push(temp);
    }
    return res;
}

console.log(nestedArray(5,3))
console.log(nestedArray(4,2))
