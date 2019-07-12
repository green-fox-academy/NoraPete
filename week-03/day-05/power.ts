'use strict';

function powerN(base: number, power: number): number {
    let out: number = 1;
    out *= base;
    if(power > 0) {
        out *= powerN(base, power - 1);
    }
    return out;
}

console.log(powerN(3, 3));
