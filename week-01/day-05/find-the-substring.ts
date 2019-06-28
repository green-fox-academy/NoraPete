'use strict';

function substr(str: string, keyword: string) : number {
    let ind: number = str.indexOf(keyword);
    return ind;
  }
  
console.log(substr("this is what I'm searching in", "searching"));
console.log(substr("this is what I'm searching in", "not"));




