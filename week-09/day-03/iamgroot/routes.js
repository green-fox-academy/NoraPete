const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  let message = req.query.message;
  if(message) {
    res.json({ received: message, translated: 'I am Groot!' });
  } else {
    res.status(404);
    res.json({ error: 'I am Groot!' });
  }
});

module.exports = app;
