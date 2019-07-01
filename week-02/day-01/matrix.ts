'use strict';

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let sizeOfMatrix: number = 7;
let matrixArray: any[] = [];

for (let j: number = 0; j < sizeOfMatrix; j ++) {
    let lineArray: number[] = [];
    for (let i: number = 0; i < sizeOfMatrix; i ++) {
        lineArray[i] = 0;
    }
    lineArray[lineArray.length - j - 1] = 1;
    matrixArray[j] = lineArray;
}

matrixArray.forEach(function (subArray) {
    console.log(subArray.join(' '));
})
