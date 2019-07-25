'use strict';
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code

// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];

function quoteSwap(listOfWords: string[]): string {
    let correctList: string[] = listOfWords;
    correctList.splice(2, 0, listOfWords[5]);
    correctList.splice(6, 1, listOfWords[3]);
    correctList.splice(3, 1);
    return correctList.join(' ');
}

console.log(quoteSwap(words));
// Expected output: "What I cannot create I do not understand."

export = quoteSwap;