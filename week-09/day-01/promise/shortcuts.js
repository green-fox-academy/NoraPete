'use strict';

function onReject(error) {
  console.log(error.message);
}

let rejectedPromise = new Promise(function(fulfill, reject) {
  reject(new Error('REJECTED!'));
}).catch(onReject);

let fulfilledPromise = Promise.resolve('FULFILLED!');

fulfilledPromise.then(console.log);