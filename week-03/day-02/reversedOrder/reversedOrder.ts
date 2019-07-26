'use strict';

declare function require(path: string): any;

const fs = require('fs');

// Create a method that decrypts reversed-order.txt

function readsFile(path: string): string {
    if (!fs.existsSync(path)) {
        throw Error('File does not exist');
    }
    return fs.readFileSync(path, 'utf-8');
}

function correctsReversedOrder(path: string): void {
    let fileContent: string;
    try {
        fileContent = readsFile(path);
    } catch (e) {
        console.log(e);
        fileContent = '';
    }
    let lines: string[] = fileContent.split('\r\n');
    let correctText: string = lines.reverse().join('\r\n');
    fs.writeFileSync(path, correctText);
}

correctsReversedOrder('./reversedOrder.txt');