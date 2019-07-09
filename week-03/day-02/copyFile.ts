'use strict';

declare function require(path: string): any;

const fs = require('fs');

// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

function copiesFileContentIntoAnother(pathOfSourceFile: string, pathOfTargetFile: string): boolean {
    try {
        fs.writeFileSync(pathOfTargetFile, fs.readFileSync(pathOfSourceFile, 'utf-8'));
        return true;
    } catch (e) {
        return false;
    }
}

console.log(copiesFileContentIntoAnother('printEachLine.ts', 'my-text.txt'));
