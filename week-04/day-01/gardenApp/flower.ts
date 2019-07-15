'use strict';

import Plant from './plant';

class Flower extends Plant {
    waterLevelThreshold: number = 5;
    wateringCoefficient: number = 0.75;
    className: string = 'Flower';

    constructor(colour?: string) {
        super(colour);
    }
}

export default Flower;
