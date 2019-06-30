'use strict';

//Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid

let aSide: number = 20.7;
let bSide: number = 10.8;
let cSide: number = 5.3;

let surfaceArea: number = (aSide * bSide * 2) + (aSide * cSide * 2) + (bSide * cSide * 2);
let volume: number = aSide * bSide * cSide;

console.log('Surface Area: ' + surfaceArea);
console.log('Volume: ' + volume);