'use strict';

export function returnsFibonacciNumberByIndex(index: number): number {
    if (Math.abs(index) === 1) {
        return 1
    } else if (index === 0) {
        return 0
    } else {
        if(index < 0 && index % 2 === 0) {
            return -1 * (returnsFibonacciNumberByIndex(Math.abs(index) - 1) + returnsFibonacciNumberByIndex(Math.abs(index) - 2));
        } else {
            return returnsFibonacciNumberByIndex(Math.abs(index) - 1) + returnsFibonacciNumberByIndex(Math.abs(index) - 2);
        }
    }

}