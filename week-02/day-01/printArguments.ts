'use strict';

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams(...inputs: any[]): any {
    inputs.forEach(function (item) {
        console.log(item);
    })
}

printParams('Viktor', 4, true);
