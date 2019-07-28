'use strict';

function removesX(inputStr: string): string {
    if (inputStr.toLowerCase().indexOf('x') < 0) {
        return inputStr;
    } else {
        return removesX(inputStr.replace(/x/i, ''));
    }
}

console.log(removesX('AXolotl'));
