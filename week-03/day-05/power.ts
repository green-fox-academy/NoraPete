'use strict';

function powerN(base: number, power: number): number {
    let out: number = base;
    if(power > 1) {
        out *= powerN(base, power - 1);
    }
    return out;
}

console.log(powerN(3, 3));
