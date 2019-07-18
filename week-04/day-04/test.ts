'use strict';

import { test } from 'tape';

import Market from './apples';
import { checksIfTheyAreAnagrams } from './anagram'

let myMarket: Market = new Market();

test(t => {
    t.equals(myMarket.getApple(), 'apples');
    t.end();
})

test(t => {
    let numArrayOne: number[] = [1, 2, 3];
    let numArrayTwo: number[] = [4];
    let numArrayThree: number[] = [];
    let numArrayFour: number[] = [5.6, 3.2, 4.8];
    t.equals(myMarket.sum(numArrayOne), 6);
    t.equals(myMarket.sum(numArrayTwo), 4);
    t.equals(myMarket.sum(numArrayThree), 0);
    t.equals(myMarket.sum(numArrayFour), 14);
    t.end();
})

test(t => {
    t.equals(checksIfTheyAreAnagrams('apple', 'seppa'), true);
    t.end();
})
