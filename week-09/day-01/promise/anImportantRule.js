'use strict';


function alwaysThrows() {
  throw new Error('OH NOES');
}

function iterate(inputInt) {
  console.log(inputInt);
  return inputInt += 1;
}

Promise.resolve(iterate(1))
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrows)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .catch(error => console.log(error.message))