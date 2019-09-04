'use strict';

const capacity = 12500;

let caliber25 = 0;
let caliber30 = 0;
let caliber50 = 0;
let shipstatus;
let ready;

function setCargo(caliber, amount) {
  if(amount >= 0) {
    if (caliber === '.25') {
      caliber25 += amount;
    } else if (caliber === '.30') {
      caliber30 += amount;
    } else if (caliber === '.50') {
      caliber50 += amount;
    } else {
      throw new Error('Please provide a valid caliber!');
    }
  } else {
    throw new Error('Please provide a valid amount!');
  }
  
}

  function setStatus() {
    let status = ((caliber25 + caliber30 + caliber50) / capacity) * 100;
    if(status === 0) {
      shipstatus = 'empty';
    } else if (status > 0 && status < 100) {
      shipstatus = status + '%';
    } else if (status === 100) {
      shipstatus = 'full';
    } else {
      shipstatus = 'overloaded';
    }
  }

  function checkIfReady() {
    ready = shipstatus === 'full';
  }

  function getShipState(caliber = '.25', amount = 0) {
    setCargo(caliber, amount);
    setStatus();
    checkIfReady();
    return { 
      caliber25: caliber25,
      caliber30: caliber30,
      caliber50: caliber50,
      shipstatus: shipstatus,
      ready: ready
     }
  }

  module.exports = getShipState;
