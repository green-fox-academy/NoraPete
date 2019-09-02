'use strict';

let promise = new Promise(function(fulfill, reject) {
  setTimeout(() => {
    fulfill('FULFILLED!');
  }, 300);
}).then(console.log)