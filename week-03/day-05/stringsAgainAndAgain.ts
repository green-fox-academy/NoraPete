'use strict';

function separatesCharsWithAsterix(inputStr: string): string {
    let editedStr: string = '';
    if (inputStr.length === 1) {
        return inputStr;
    } else if (inputStr.charAt(0).search(/\w/) >= 0 && inputStr.charAt(1).search(/\s/) >= 0 || inputStr.charAt(1).search(/\w/) >= 0 && inputStr.charAt(0).search(/\s/) >= 0) {
        editedStr += inputStr.charAt(0);
    } else {
        editedStr += inputStr.charAt(0) + '*';
    }
    return editedStr += separatesCharsWithAsterix(inputStr.slice(1));
}

console.log(separatesCharsWithAsterix('axolotl es csupaszturkalo'));
