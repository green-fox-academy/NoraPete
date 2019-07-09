'use strict';

declare function require(path: string): any;

const fs = require('fs');

// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

function writesMyNameInAFile(targetFile: string): void {
    let myName: string = 'Nora Pete';
    try {
        fs.writeFileSync(targetFile, myName);
    } catch (e) {
        console.log('Unable to write file: ' + targetFile);
    }
}

writesMyNameInAFile('../day-03/my-file.txt');
