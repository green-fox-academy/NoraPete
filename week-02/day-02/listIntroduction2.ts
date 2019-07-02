'use strict';

let ListA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];
let ListB: string[] = [...ListA];

if (ListB.indexOf('Durian') < 0) {
    console.log('ListB doesn\'t contain "Durian".');
} else {
    console.log('ListB contains "Durian".')
}

ListB.splice(ListB.indexOf('Durian'), 1);
ListA.splice(4, 0, 'Kiwifruit');

if (ListA.length > ListB.length) {
    console.log('ListA is longer than ListB');
} else {
    console.log('ListA isn\'t longer than ListB.');
}

let indexOfAvocadoInListA: number = ListA.indexOf('Avocado');
let indexOfDurianInListB: number = ListB.indexOf('Durian');

ListB.push('Passion Fruit', 'Pomelo')

console.log(ListA[2]);
