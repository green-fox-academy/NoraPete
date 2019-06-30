'use strict';

// make it bigger by 10
let a: number = 3;
a += 10;

console.log(a);

// make it smaller by 7
let b: number = 100;
b -= 7;

console.log(b);

// double c's value
let c: number = 44;
c *= 2;

console.log(c);

// divide d's value by 5
let d: number = 125;
d /= 5;

console.log(d);

// what's the cube of e's value?
let e: number = 8;
e **= 3;

console.log(e);

// tell if f1 is bigger than f2 (as a boolean)
let f1: number = 123;
let f2: number = 345;

console.log(f1 > f2);

// tell if the double of g2 is bigger than g1 (pras a boolean)
let g1: number = 350;
let g2: number = 200;

console.log((g2 * 2) > g1);

// tell if 11 is a divisor of h (as a boolean)
let h: number = 1357988018575474;

console.log((h % 11) == 0);

// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
let i1: number = 10;
let i2: number = 3;

console.log(i1 > (i2 ** 2) && i1 < (i2 ** 3));

// tell if j is divisible by 3 or 5 (as a boolean)
let j: number = 1521;
console.log((j % 3) == 0 || (j % 5) == 0);

//console.log(k);
