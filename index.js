function createNestedArr(jumlahRow,jumlahCol){
    var pertama='ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'
    var kali=jumlahCol*jumlahRow
    var random=''
    for (let i = 0; i < kali; i++) {
        var rnum=Math.floor(Math.random()*pertama.length)
        random+=pertama.substring(rnum,rnum+1)
        
    }
    var res=[]
    var index=0
    for (let i = 0; i < jumlahRow; i++) {
        var arr=[]
        for (let j = 0; j < jumlahCol; j++) {
           arr.push(random[index]) 
           index++
        }
        res.push(arr)
    }
    return res
}

console.log(createNestedArr(5,3))
console.log(createNestedArr(4,2))