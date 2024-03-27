function graduates(students){
    if (students[0]===undefined){
        // empty
        return students;
    }

    let listClass = []
    function isElementExist (arr, data){
        let isExist = false;
        for (let elmt of arr){
            isExist = isExist||(elmt===data)
        }
        return isExist;
    }

    function whereIsElement (arr, data){
        let addr =-1;
        for (let idx in arr){
            if(arr[idx]===data){
                addr = idx;
            }
        }
        return addr;
    }
    
    
    let newList= {}
    for (let item of students){
        let isExist = isElementExist(listClass, item.class)
        if (item.score>75){
            if (!isExist){
                listClass.push(item.class)
                newList[item.class]=[]
            }
            newList[item.class].push({
                name: item.name,
                score: item.score
            })
        }
    }
    return newList;
}

let students = [
    {
        name:'Dimitri',
        class: 'wow1',
        score: 85,
    },
    {
        name:'Dimitri2',
        class: 'wow',
        score: 100,
    }
    ,
    {
        name:'Dimitri2',
        class: 'wow1',
        score: 78,
    },
    {
        name:'Dimitri2',
        class: 'wow',
        score: 56,
    },
    {
        name:'Dimitri2',
        class: 'meow',
        score: 23,
    }
    ];


let x =graduates(students)
console.log(x)