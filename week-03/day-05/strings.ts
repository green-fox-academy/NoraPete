'use strict';

function changesXToY(inputStr: string): string {
    if (inputStr.indexOf('x') < 0) {
        return inputStr;
    } else {
        return changesXToY(inputStr.replace('x', 'y'));
    }
}

console.log(changesXToY('axolotl'));
