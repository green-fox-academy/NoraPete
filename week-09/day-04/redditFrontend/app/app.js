const express = require('express');
const app = express();
const fetch = require('node-fetch');
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static('./assets'));

app.get('/posts', function(req, res) {
  res.sendFile(path.resolve('views/index.html'));
});

app.get('/add', function(req, res) {
  res.sendFile(path.resolve('views/addForm.html'))
});

app.get('/reddit', (req, res) => {
  fetch('http://secure-reddit.herokuapp.com/simple/posts', {
    headers: { 'Accepts': 'application/json' }
  })
  .then(response => {
      if(response.status < 200 || response.status >= 300) {
        return new Error('Something went wrong');
      }
      return response;
    })
    .then(response => response.json())
    .then(json => res.render('posts', { parsed: json }))
    .catch(console.log);
});

module.exports = app;