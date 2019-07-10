'use strict';

class Counter {
    initialValue: number = 0;
    value: number = this.initialValue;
    constructor(value?: number) {
        if (value) {
            this.initialValue = value;
            this.value = value;
        }
    }
    add(num?: number): void {
        if (num) {
            this.value += num;
        } else {
            this.value++;
        }
    }
    get(): string {
        return 'The current value is ' + this.value;
    }
    reset(): void {
        this.value = this.initialValue;
    }
}

let firstCounter: Counter = new Counter();
let secondCounter: Counter = new Counter(123);
console.log(firstCounter, secondCounter);
firstCounter.add();
secondCounter.add(67);
console.log(firstCounter.get(), secondCounter.get());
firstCounter.reset();
secondCounter.reset();
console.log(firstCounter, secondCounter);
