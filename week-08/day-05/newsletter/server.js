'use strict';

const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/signup', (req, res) => {
  res.sendFile('/index.html', { root: __dirname });
});

app.post('/signup', (req, res) => {
  res.send(`<h1>Thanks ${req.body.username}, we will send updates to ${req.body.email}</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});