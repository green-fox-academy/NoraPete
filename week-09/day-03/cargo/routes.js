const express = require('express');
const getShipState = require('./ship');

const app = express();

app.get('/rocket', function(req, res) {
  let response;
  try{
    response = getShipState();
  } catch (e) {
    response = { error: e.message };
    res.status(500);
  }
  res.send(response);
});

app.get('/rocket/fill', function(req, res) {
  let response;
  let caliber;
  req.query.caliber ? caliber = req.query.caliber : caliber = '';
  let amount;
  req.query.amount? amount = parseInt(req.query.amount) : amount = -1;
  let shipState;
  try {
    shipState = getShipState(caliber, amount);
    response = { received: caliber, amount: amount, shipstatus: shipState.shipstatus, ready: shipState.ready };
  } catch (e) {
    response = { error: e.message };
    res.status(500);
  }
  res.send(response);
});

module.exports = app;