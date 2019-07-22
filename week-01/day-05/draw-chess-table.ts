'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

function drawsChessTable(): void {
    for (let i: number = 0; i < 8; i++) {
        let lineToPrint: string = '';
        if (i % 2 === 0) {
            for (let j: number = 0; j < 4; j++) {
                lineToPrint += ' %';
            }
        } else {
            for (let k: number = 0; k < 4; k++) {
                lineToPrint += '% ';
            }
        }
        console.log(lineToPrint);
    }
}

drawsChessTable();
