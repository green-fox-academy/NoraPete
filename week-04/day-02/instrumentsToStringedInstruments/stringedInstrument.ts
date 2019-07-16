'use strict';

import Instrument from './instrument';

abstract class StringedInstrument extends Instrument {
    numberOfStrings: number;

    constructor(name: string, numOfStrg: number) {
        super(name);
        this.numberOfStrings = numOfStrg;
    }

    abstract sound(): string

    play(): void {
        console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}.`)
    }
}

export default StringedInstrument;