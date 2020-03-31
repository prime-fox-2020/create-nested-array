let getAlphabeth = () => {
    let num = Math.floor(Math.random()*26)

    var huruf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return huruf[num]
}

let createNestedArr = (row,column) => {
    let arr=[],temp=[]
    for (let i = 0; i < row; i++) {
        temp=[]
        for (let j = 0; j < column; j++) {
            temp.push(getAlphabeth())
        }
        arr.push(temp)
    }
    return arr
}

console.log(createNestedArr(5,3))