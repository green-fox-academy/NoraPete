const express = require('express');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/helloworld', (req, res) => {
  res.render('home', {title: 'Hello World!',})
})

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
})