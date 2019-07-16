'use strict';

import Printable from '../../../week-04/day-02/printable';

class Thing implements Printable {
    private name: string;
    private completed: boolean;
  
    constructor(name: string) {
      this.name = name;
    }
  
    public complete(): void {
      this.completed = true;
    }
  
    getName(): string {
      return this.name;
    }
  
    getCompleted(): boolean {
      return this.completed;
    }

    printAllFields(): void {
      console.log(this.name);
      console.log(this.completed);
    }
  }
  
  export { Thing };