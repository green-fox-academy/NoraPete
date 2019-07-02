'use strict';

// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

function addsStringAtDefinedPosition (inputStr: string, strToAdd: string, endOfPrefix: string, startOfSuffix: string): string {
    let prefix: string = inputStr.slice(0, inputStr.indexOf(endOfPrefix) + endOfPrefix.length + 1);
    let suffix: string = inputStr.slice(inputStr.indexOf(startOfSuffix));
    let finalString: string = prefix.concat(' ', strToAdd, ' ', suffix);
    return finalString;
}

console.log(addsStringAtDefinedPosition(quote, 'always takes longer than', 'It', 'you'));
