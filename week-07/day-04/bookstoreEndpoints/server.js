'use strict';

const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password.',
  database: 'bookstore'
});

function filterBooks(books, key, value) {
  return books.filter(function (book) {
    return book[key] === value;
  });
}

function handleQueries(request, books) {
  let outputBookList = books;
  if (request.query.category) {
    outputBookList = filterBooks(outputBookList, 'cate_descrip', request.query.category);
  }
  if (request.query.publisher) {
    outputBookList = filterBooks(outputBookList, 'pub_name', request.query.publisher);
  }
  if (request.query.pgt) {
    outputBookList = outputBookList.filter(function (book) {
      return book.book_price > request.query.pgt;
    });
  }
  if (request.query.plt) {
    outputBookList = outputBookList.filter(function (book) {
      return book.book_price < request.query.plt;
    });
  }
  return outputBookList;
}

app.use(express.static('static'));

app.get('/', function (req, res) {
  res.sendFile('/index.html', { root: __dirname });
});

app.get('/books', function (req, res) {
  connection.query(
    `SELECT 
      book_name, 
      aut_name, 
      cate_descrip, 
      pub_name, 
      book_price 
    FROM 
      book_mast 
    INNER JOIN 
      author ON book_mast.aut_id = author.aut_id 
    INNER JOIN 
      category ON book_mast.cate_id = category.cate_id 
    INNER JOIN 
      newpublisher ON book_mast.pub_id = newpublisher.pub_id;`,
    function (err, rows) {
      if (err) {
        console.log(err);
        res.status(500);
      }
      console.log(handleQueries(req, rows));
      res.send(handleQueries(req, rows));
      connection.end();
    });
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
