'use strict'

function createNestedArray(baris,kolom){
    const huruf = 'abcdefghijklmnopqrstuvwxyz'

    let data =[];
    //Buat Array Of Array (baris x kolom)
    for (let i = 0; i <baris; i++) {
        for (let j = 0; j < kolom; j++) {
            //Mendenifisikan Random untuk di Input di data
            let hurufRandom=huruf[Math.floor(Math.random()*huruf.length)]

            //Input Data Random
            if(data[i]==undefined){
                data[i]=[];
                data[i].push(hurufRandom);
            }else{
                data[i].push(hurufRandom);
            }        
        }
    }
    return data;
}

console.log(createNestedArray(5,3))
console.log(createNestedArray(4,2))
console.log(createNestedArray(5,4))