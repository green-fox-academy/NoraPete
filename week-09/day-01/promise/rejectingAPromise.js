'use strict';

function onReject(error) {
  console.log(error.message);
}

let promise = new Promise(function(fulfill, reject) {
  setTimeout(() => {
    reject(new Error('REJECTED!'));
  }, 300);
})
.then(result => console.log(result), onReject);