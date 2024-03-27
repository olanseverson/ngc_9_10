// SOAL 1
let arr = [1, 2, 3, 4, 7, 9]

function tentukanDeretGeometri(arr){
    // asumsi : jumlah element lebih dari 1 buah, jika tidak, secara logika tidak bisa menilai deret atau tidak

    const faktorPengali = arr[1]/arr[0];
    let isGeometri = true;
    let index = 1;
    while (arr[index+1]!== undefined && isGeometri==true){
        console.log(arr[index+1]/arr[index]!==faktorPengali)
        if(arr[index+1]/arr[index]!==faktorPengali){
            isGeometri= false;
        }
        index++;
    }
    return isGeometri;
}
console.log('ini ' + tentukanDeretGeometri(arr));

// END OF SOAL 1

// SOAL 2
function sittingArangement(person, column){
    if (column==0){
        return "Invalid number";
    }

    if (person[0]==undefined){
        //empty array
        return "empty array";
    }

    // check length
    let length = 0;
    let i=0; //counter
    while(person[length]!=undefined){
        length++;
    }
    
    let jlhKelompok=length/column;
    if (length%column!= 0){
        jlhKelompok = ~~(jlhKelompok)+1;
    }
    
    let result=[];
    for(i=0; i<jlhKelompok; i++){
        result[i]=[];
        for (let j=0;j<column;j++){
            let idx= j+i*column;
            if (person[idx]==undefined){
                person[idx]='bangku kosong'
            }
            result[i][j]=person[idx];
        }
    }

    return result;
}

console.log(sittingArangement(arr, 2))
// END OF SOAL 3

// SOAL 4
function ladder(word){
    let result = []
    let temp = word
    
    //string length
    let length=0;
    while(word[length]!=undefined){
        length++;
    }
    
    for (let i in word){
        result.push([])
        for (let j=0; j<length-i; j++){
            result[i].push(word[j])
        }
    }
    return result;
}

console.log(ladder('developer'))

// END OF SOAL 4

// SOAL 5
function targetTerdekat(arr){
    let position = []
    let xpos=0;
    for(let x in arr){
        if (arr[x]==='x'){
            position.push(x)
        }
        
        if (arr[x]==='o'){
            xpos=x;
        }
    }
    if (position[0]===undefined){
        return 0;
    }
    

    for(let i in position){
        let temp = position[i]-xpos;
        if (temp<0){
            temp= temp*(-1)
        }
        position[i] = temp;
    }
    
    let jarakMin=position[0]
    for(let i in position){
        if (jarakMin>position[i]){
            jarakMin=position[i]
        }
    }
    return jarakMin;
}

console.log(targetTerdekat(arr))
// END OF SOAL 5