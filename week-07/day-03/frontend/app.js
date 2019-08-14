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
  try {
    res.send({
      'appended': req.params.appendable + 'a'
    });
  } catch (e) {
    res.status(404);
  }
  /*
  if (req.params.appendable) {
    res.send({
      'appended': req.params.appendable + 'a'
    });
  } else {
    res.status(404);
  }
  */
});
/*
*/
app.post('/dountil/:action', (req, res) => {
  let inputNum = req.body.until * 1;
  let outputNum;
  if (isNaN(inputNum)) {
    res.send({
      'error': 'Please provide a number!'
    });
  } else if (req.params.action === 'sum') {
    outputNum = 0;
    for (let i = 0; i <= inputNum; i ++) {
      outputNum += i;
    }
    res.send({
      'result': outputNum
    });
  } else if (req.params.action === 'factor') {
    outputNum = 1;
    for (let i = 1; i <= inputNum; i ++) {
      outputNum *= i;
    }
    res.send({
      'result': outputNum
    });
  }
});

app.listen(PORT, () => {
  console.log(`App is up and running on port ${PORT}`);
});
