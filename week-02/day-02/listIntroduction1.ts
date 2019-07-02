'use strict';

let listToPlayWith: string[] = [];
console.log(listToPlayWith.length);

listToPlayWith.push('William');

if (listToPlayWith.length === 0) {
    console.log('The list is empty.');
} else {
    console.log('The list is NOT empty.');
}

listToPlayWith.push('John');
listToPlayWith.push('Amanda');

console.log(listToPlayWith.length);

console.log(listToPlayWith[2]);

listToPlayWith.forEach(function (item) {
    console.log(item);
})

listToPlayWith.forEach(function (item) {
    console.log(listToPlayWith.indexOf(item) + 1 + '. ' + item);
})

listToPlayWith.splice(1, 1);

listToPlayWith.reverse().forEach(function (item) {
    console.log(item);
})

listToPlayWith.splice(0, listToPlayWith.length);
console.log(listToPlayWith.length);
