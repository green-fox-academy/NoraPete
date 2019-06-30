'use strict';

//Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

let lineCount: number = 4;
let changingLine: string = '*';

for (let i: number = 0; i < lineCount; i ++) {
     console.log(changingLine);
     changingLine += '*';
 }
