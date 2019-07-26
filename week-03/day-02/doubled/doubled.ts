'use strict';

declare function require(path: string): any;

const fs = require('fs');

// Create a method that decrypts duplicated-chars.txt

function readsFile(path: string): string {
    if (!fs.existsSync(path)) {
        throw Error('File does not exist');
    }
    return fs.readFileSync(path, 'utf-8');
}

function correctsDoubledChars(path: string): void {
    let fileContent: string = readsFile(path);
    let charArray: string[] = fileContent.split('');
    let half: string[] = [];
    for (let i: number = 0; i < charArray.length; i++) {
        if (i % 2 === 0) {
            half.push(charArray[i]);
        }
    }
    let correctText: string = half.join('');
    fs.writeFileSync(path, correctText);
}

correctsDoubledChars('./duplicatedChars.txt')
