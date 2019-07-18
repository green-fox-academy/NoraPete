'use strict';

class Market {

    getApple(): string {
        return 'apples';
    }

    sum(numsToAdd: number[]): number {
        let sum: number = 0;
        numsToAdd.forEach(function (num) {
            sum += num;
        })
        return Math.round(sum);
    }
}

export default Market;
