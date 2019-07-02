'use strict';

// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

function reverser (inputString: string): string {
    let stringAsArray: string[] = inputString.split('');
    let reversedArray: string[] = stringAsArray.reverse();
    let reversedString: string = reversedArray.join('');
    return reversedString;
}

console.log(reverser(reversed));

export = reverser;