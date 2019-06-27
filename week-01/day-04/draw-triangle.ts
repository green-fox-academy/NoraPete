'use strict';

let lineCount: number = 4;
let changingLine: string = '*';

for (let i: number = 0; i < lineCount; i ++) {
    console.log(changingLine);
    changingLine += '*';
}
