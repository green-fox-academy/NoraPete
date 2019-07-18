'use strict';

export function checksIfTheyAreAnagrams(wordOne: string, wordTwo: string): boolean {
    let characterArrayOfWordOne: string[] = wordOne.toLowerCase().replace(/\s/g, '').split('').sort();
    let characterArrayOfWordTwo: string[] = wordTwo.toLowerCase().replace(/\s/g, '').split('').sort();
    if (characterArrayOfWordOne.length != characterArrayOfWordTwo.length) {
        return false;
    }else {
        for (let i: number = 0; i < characterArrayOfWordOne.length; i ++) {
            if (characterArrayOfWordOne[i] != characterArrayOfWordTwo[i]) {
                return false;
            }
        }
    }
    return true;
}
