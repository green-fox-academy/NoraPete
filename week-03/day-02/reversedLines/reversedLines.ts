'use strict';

declare function require(path: string): any;

const fs = require('fs');

// Create a method that decrypts reversed-lines.txt

function readsFile(path: string): string {
    if (!fs.existsSync(path)) {
        throw Error('File does not exist');
    }
    return fs.readFileSync(path, 'utf-8');
}

function getsSingleLinesAsAMatrix(inputStr: string): string[][] {
    let lines: string[] = inputStr.split('\r\n');
    let matrix: string[][] = [];
    for (let i: number = 0; i < lines.length; i++) {
        matrix.push(lines[i].split(''));
    }
    return matrix;
}

function correctsReversedLines(path: string): void {
    let fileContent: string;
    try {
        fileContent = readsFile(path);
    } catch (e) {
        console.log(e);
        fileContent = '';
    }
    let contentMatrix: string[][] = getsSingleLinesAsAMatrix(fileContent);
    let correctLines: string[] = [];
    for (let i: number = 0; i < contentMatrix.length; i++) {
        correctLines.push(contentMatrix[i].reverse().join(''));
    }
    let correctText: string = correctLines.join('\r\n');
    fs.writeFileSync(path, correctText);
}

correctsReversedLines('./reversedLines.txt');