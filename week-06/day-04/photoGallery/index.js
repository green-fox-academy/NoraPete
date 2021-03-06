'use strict';

const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile('/main.html', { root: __dirname });
})

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
})
