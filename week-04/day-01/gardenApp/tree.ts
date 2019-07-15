'use strict';

import Plant from './plant';

class Tree extends Plant {
    waterLevelThreshold: number = 10;
    wateringCoefficient: number = 0.4;
    className: string = 'Tree';

    constructor(colour?: string) {
        super(colour);
    }
}

export default Tree;
