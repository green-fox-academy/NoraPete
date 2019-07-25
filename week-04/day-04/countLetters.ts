'use strict';

export function countsLettersInAWord(word: string): object {
    let dictionaryOfLetters = {};
    for (let i: number = 0; i < word.length; i ++) {
        if (dictionaryOfLetters.hasOwnProperty(word.charAt(i))) {
            dictionaryOfLetters[word.charAt(i)] ++;
        } else {
            dictionaryOfLetters[word.charAt(i)] = 1;
        }
    }
    return dictionaryOfLetters;
}