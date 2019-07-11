'use strict';

import {Domino} from "./domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2 ,4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value.values);
    });
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

print(dominoes);

function arrangesDominoes(inputDominoArray: Domino[]): Domino[] {
    let arrangedDominoes: Domino[] = [];
    arrangedDominoes.push(inputDominoArray[0]);
    for (let i: number = 1; i < inputDominoArray.length; i ++) {
        inputDominoArray.forEach(function(domino) {
            if (domino.values[0] === arrangedDominoes[i - 1].values[1]){
                arrangedDominoes.push(domino);
            }
        })
    }
    return arrangedDominoes;
}
print(arrangesDominoes(dominoes));
