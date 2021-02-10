'use strict'

// sort

function sort (array){
    for (let i = 0; i < array.length;i++)
        for (let j = 0; j < i; j++)
            if (array[i] < array[j]){
                let tempArray = array[i];
                array[i] = array[j];
                array[j] = tempArray;
            }
    return array;
}
const sortArray = sort([1,5,3,6,8,7,10,9,2,4])
console.log(sortArray)


// map

function map (array, callback){
    for (let i = 0; i < array.length; i++){
        array[i] = callback(array[i]);
    }
    return array;
}
const mapArray = map([1,2,3,4,5,6,7,8,9,10],(value)=>{
    return value * 2;
})
console.log(mapArray);

//filter

function filter (array, callback) {
    let tempArray = [];
    let resultArray =[];
    for(let i = 0; i < array.length; i++){
        tempArray[i] = callback(array[i]);
    }
    for (let i = 0; i < array.length; i++){
        if(tempArray[i] !== undefined){
            resultArray.push(tempArray[i]);
        }
    }
    return resultArray;
}

const filteredArray = filter([2,15,5,7,16,20,1],(callback)=>{
    if(callback > 10){
        return callback;
    }
})
console.log(filteredArray);