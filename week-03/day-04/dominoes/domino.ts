'use strict';

import Printable from '../../../week-04/day-02/printable';

class Domino implements Printable {
    values: number[];
    constructor(valueA: number, valueB: number) {
        this.values = [valueA, valueB];
    }

    printAllFields(): void {
        console.log(this.values);
    }
}

export { Domino };
