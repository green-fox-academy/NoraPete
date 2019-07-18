'use strict';

export function checksIfTheyAreAnagrams(wordOne: string, wordTwo: string): boolean {
    for (let i: number = 0; i < wordOne.length; i ++) {
        if (wordTwo.indexOf(wordOne.charAt(i)) < 0) {
            return false;
        }
    }
    return true;
}