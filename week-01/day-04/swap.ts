'use strict';

// Swap the values of these variables

let a: number = 123;
let b: number = 526;
let c: number = b;

b = a;
a = c;

console.log(a);
console.log(b);