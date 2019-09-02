'use strict';

function onRejected(error) {
  console.log(error.message);
}

let promise = new Promise(function(fulfill, reject) {
  fulfill('I FIRED');
  reject(new Error('I DID NOT FIRE'));
}).then(console.log, onRejected);