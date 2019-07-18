'use strict';

import { test } from 'tape';

import Market from './apples';
import { checksIfTheyAreAnagrams } from './anagram'
import { countsLettersInAWord } from './countLetters';
import { returnsFibonacciNumberByIndex } from './fibonacci';

let myMarket: Market = new Market();

test('checks Market calss\' getApple method', t => {
    t.equals(myMarket.getApple(), 'apples');
    t.end();
})

test('checks Market class\' sum method', t => {
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

test('checks anagram', t => {
    t.equals(checksIfTheyAreAnagrams('apple', 'seppa'), false);
    t.equals(checksIfTheyAreAnagrams('apple', 'leppa'), true);
    t.equals(checksIfTheyAreAnagrams('Apple', 'leppa'), true);
    t.equals(checksIfTheyAreAnagrams('apple', 'Leppa'), true);
    t.equals(checksIfTheyAreAnagrams('apple', 'leppas'), false);
    t.equals(checksIfTheyAreAnagrams('ap ple', 'leppa'), true);
    t.end();
})

test('checks letter counter function', t => {
    t.equals(typeof countsLettersInAWord('cipofuzo'), 'object');
    t.equals(countsLettersInAWord('cipofuzo')['c'], 1);
    t.equals(countsLettersInAWord('cipofuzo')['o'], 2);
    t.false(countsLettersInAWord('cipofuzo').hasOwnProperty('h'));
    t.equals(Object.keys(countsLettersInAWord('cipofuzo')).length, 7);
    t.end()
})

test('tests fibonacci finder', t => {
    t.equals(returnsFibonacciNumberByIndex(0), 0);
    t.equals(returnsFibonacciNumberByIndex(1), 1);
    t.equals(returnsFibonacciNumberByIndex(8), 21);
    t.equals(returnsFibonacciNumberByIndex(-1), 1);
    t.equals(returnsFibonacciNumberByIndex(-4), -3);
    t.equals(returnsFibonacciNumberByIndex(-5), 5);
    t.end();
})