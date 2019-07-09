

declare function require(path: string): any;

const fs = require('fs');

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

function countsLinesInAFile(inputFile: string) : number {
    let numOfLineBrakes: number = 0;
    let fileContent: string;
    try{
        fileContent = fs.readFileSync(inputFile, 'utf-8');
    } catch (e) {
        fileContent = '';
    }
    for (let i: number = 0; i < fileContent.length; i ++) {
        if (fileContent.charAt(i) == '\n') {
            numOfLineBrakes ++;
        }
    }
    return numOfLineBrakes;
}

console.log(countsLinesInAFile('printEachLine.ts'));