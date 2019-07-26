'use strict';

declare function require(path: string): any;

const fs = require('fs');

// Create a method that decrypts encoded-lines.txt

function readsFile(path: string): string {
    if (!fs.existsSync(path)) {
        throw Error('File does not exist');
    }
    return fs.readFileSync(path, 'utf-8');
}

function decryptsFile(path: string): void {
    let fileContent: string;
    try {
        fileContent = readsFile(path);
    } catch (e) {
        console.log(e);
        fileContent = '';
    }
    let chars: string[] = fileContent.split('');
    let correctChars: string[] = chars.map(function (character) {
        if (character.search(/\s/) < 0) {
            return String.fromCharCode(character.charCodeAt(0) - 1);
        } else {
            return character;
        }
    })
    let correctText: string = correctChars.join('');
    fs.writeFileSync(path, correctText);
}

decryptsFile('./encodedLines.txt');
