'use strict';

const express = require('express');
const path = require('path');

const PORT = 8080;
const app = express();

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/doubling', (req, res) => {
  let doubled = {
    'received': req.query.input * 1,
    'result': req.query.input * 2
  }
  let error = {
    'error': 'Please provide an input!'
  }
  if (req.query.input) {
    res.send(doubled);
  } else {
    res.send(error);
  }
})

app.listen(PORT, () => {
  console.log(`App is up and running on port ${PORT}`);
});
