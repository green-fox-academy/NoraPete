'use strict';

const express = require('express');
const path = require('path');

const PORT = 8080;
const app = express();

app.use(express.static('static'));
app.use(express.json());

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
});

app.get('/greeter', (req, res) => {
  if (!req.query.name && !req.query.title) {
    res.send({ 'error': 'Please provide a name and a title!' });
  } else if (!req.query.name) {
    res.send({ 'error': 'Please provide a name!' });
  } else if (!req.query.title) {
    res.send({ 'error': 'Please provide a title!' });
  } else {
    res.send({
      'welcome_message': 'Oh, hi there ' + req.query.name + ', my dear ' + req.query.title + '!'
    });
  }
});

app.get('/appenda/:appendable', (req, res) => {
   res.send({
      'appended': req.params.appendable + 'a'
    });
});

app.post('/dountil/:action', (req, res) => {
  let inputNum = req.body.until * 1;
  let outputNum;
  let response = {};

  function addNumsUntil() {
    outputNum = 0;
    for (let i = 0; i <= inputNum; i ++) {
      outputNum += i;
    }
    response = { 'result': outputNum };
  }

  function getFactorial() {
    outputNum = 1;
    for (let i = 1; i <= inputNum; i ++) {
      outputNum *= i;
    }
    response = { 'result': outputNum };
  }

  if (isNaN(inputNum)) {
    response = { 'error': 'Please provide a number!' };
  } else if (req.params.action === 'sum') {
    addNumsUntil();
  } else if (req.params.action === 'factor') {
    getFactorial();
  }

  res.send(response);
});

app.listen(PORT, () => {
  console.log(`App is up and running on port ${PORT}`);
});
