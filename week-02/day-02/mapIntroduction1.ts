'use strict';

let mapToPlayWith = {
    97: 'a', 
    98: 'b',
    99: 'c',
    65: 'A',
    66: 'B',
    67: 'C',
};

console.log(Object.keys(mapToPlayWith));

Object.keys(mapToPlayWith).forEach(function (key) {
    console.log(mapToPlayWith[key]);
})

mapToPlayWith[68] = 'D';

console.log(Object.keys(mapToPlayWith).length);

console.log(mapToPlayWith[99]);

delete mapToPlayWith[97];

console.log(Object.hasOwnProperty(mapToPlayWith[100]));

Object.keys(mapToPlayWith).forEach(function (key) {
    delete mapToPlayWith[key];
})
