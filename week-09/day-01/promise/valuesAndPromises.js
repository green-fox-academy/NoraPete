'use strict';

  function attachTitle(inputStr) {
    return `DR. ${inputStr}`;
  }

  let promise = new Promise(function(fulfill, reject) {
    fulfill('MANHATTAN');
  });

  promise.then(attachTitle).then(console.log);