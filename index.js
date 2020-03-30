let createNestedArr = (rows, cols) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let res = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            res.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
        }
    }
    return res;
}

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));