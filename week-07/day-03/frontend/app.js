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
    for (let i = 0; i <= inputNum; i++) {
      outputNum += i;
    }
    response = { 'result': outputNum };
  }

  function getFactorial() {
    outputNum = 1;
    for (let i = 1; i <= inputNum; i++) {
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

app.post('/arrays', (req, res) => {
  let response = {};
  let nums;
  let what;
  if (!req.body.numbers || !req.body.what) {
    response = { 'error': 'Please provide what to do with the numbers!' };
    nums = [];
    what = '';
  } else {
    nums = req.body.numbers;
    what = req.body.what;
  }

  function addNums() {
    let outputNum = 0;
    for (let i = 0; i < nums.length; i++) {
      outputNum += nums[i];
    }
    response = { 'result': outputNum };
  }

  function multiplyNums() {
    let outputNum = 1;
    for (let i = 0; i < nums.length; i++) {
      outputNum *= nums[i];
    }
    response = { 'result': outputNum };
  }

  function doubleNums() {
    let output = [];
    for (let i = 0; i < nums.length; i++) {
      output.push(nums[i] * 2);
    }
    response = { 'result': output };
  }

  if (what === 'sum') {
    addNums();
  } else if (what === 'multiply') {
    multiplyNums();
  } else if (what === 'double') {
    doubleNums();
  }
  res.send(response);
});

app.post('/sith', function (req, res) {
  function parseBodyText(request) {
    let endOfSentence = /([.!?])\s/g;
    let bodyText = request.body.text += ' ';
    let sentences = bodyText.split(endOfSentence);
    let wordMatrix = sentences.map(function (sentence) {
      return sentence.split(' ');
    });
    return wordMatrix.slice(0, -1);
  }

  function getWordsOrGlyphs(forGlyphsInt, matrix) {
    let outputList = matrix.filter(function (list) {
      return matrix.indexOf(list) % 2 === forGlyphsInt;
    });
    return outputList;
  }

  function yodafySentence(sentence) {
    let yodafiedSentence = [];
    for (let i = 0; i < sentence.length; i += 2) {
      if (sentence[i + 1]) {
        yodafiedSentence.push(sentence[i + 1].toLowerCase());
      }
      yodafiedSentence.push(sentence[i].toLowerCase());
    }
    return yodafiedSentence;
  }

  function createSithText(request) {
    let randomYodaSounds = ['Hmmm.', 'Err..err.err.', 'Uhm.', 'Arrgh.'];
    let rawMatrix = parseBodyText(request);
    let words = getWordsOrGlyphs(0, rawMatrix);
    let glyphs = getWordsOrGlyphs(1, rawMatrix);
    let outputMessage = [];
    words.forEach(function (sentence) {
      let swapped = yodafySentence(sentence).join(' ');
      swapped = swapped.charAt(0).toUpperCase() + swapped.slice(1);
      swapped += glyphs[words.indexOf(sentence)][0];
      outputMessage.push(swapped);
      outputMessage.push(randomYodaSounds[Math.floor(Math.random() * randomYodaSounds.length)]);
    });
    return outputMessage.join(' ');
  }
  let response;
  req.body.text ? 
    response = { sith_text: createSithText(req) } : 
    response = { error: 'Feed me some text you have to, padawan young you are. Hmmm.' };
  res.status(200);
  res.send(response);
});

app.post('/translate', function(req, res) {
  function translateToTeve(inputStr) {
    let re = /([aáeéiíoóöőuúüű])/gi;
    let translated = inputStr.replace(re, '$1v$1');
    return translated;
  }

  function translateToGibberish(inputStr) {
    let re = /([aeiou]+)/gi;
    let translated = inputStr.replace(re, 'idig$1');
    return translated;
  }

  let response;

  if (!req.body.text || !req.body.lang) {
    response = { error: 'I can\'t translate that!' };
  } else if(req.body.lang === 'hu') {
    response = { translated: translateToTeve(req.body.text), lang: 'teve' };
  } else {
    response = { translated: translateToGibberish(req.body.text), lang: 'gibberish' };
  }
  
  res.status(200);
  res.send(response);
});

app.listen(PORT, () => {
  console.log(`App is up and running on port ${PORT}`);
});
