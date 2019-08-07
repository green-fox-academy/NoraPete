const express = require('express');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {name: req.query.name || 'Guest'})
})

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
});
