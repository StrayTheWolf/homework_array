'use strict'

// сортировка массива

function sort (arr){
    for (let i = 0; i < arr.length;i++)
        for (let j = 0; j < i; j++)
            if (arr[i] < arr[j]){
                let tempArray = arr[i];
                arr[i] = arr[j];
                arr[j] = tempArray;
            }
    return arr;
}
let sortArray = sort([1,5,3,6,8,7,10,9,2,4])
console.log(sortArray)

// сортировка массива



// фильтрация массива

function filter(){

}