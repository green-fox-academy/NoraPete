const express = require('express');
const app = express();

app.get('/yondu', function (req, res) {
  let distance = parseInt(req.query.distance);
  let time = parseInt(req.query.time);
  let response;
  if(distance >= 0 && time > 0) {
    response = { distance: distance, time: time, speed: distance / time }
  } else {
    response = { error: 'Please provide some numbers!' };
    res.status(400);
  }
  res.send(response);
})

module.exports = app;
