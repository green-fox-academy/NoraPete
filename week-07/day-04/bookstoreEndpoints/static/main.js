'use strict';

const form = document.querySelector('form');
const category = document.querySelector('#category');
const publisher = document.querySelector('#publisher');
const minPrice = document.querySelector('#pgt');
const maxPrice = document.querySelector('#plt');

function getFilterParameters() {
  let cat = '';
  let pub = '';
  let min = '';
  let max = '';
  if (category.value) {
    cat = `?category=${category.value}`;
  }
  if (publisher.value) {
    if (cat) {
      pub = `&publisher=${publisher.value}`;
    } else {
      pub = `?publisher=${publisher.value}`;
    }
  }
  if (minPrice.value) {
    if (cat || pub) {
      min = `&pgt=${minPrice.value}`;
    } else {
      min = `?pgt=${minPrice.value}`;
    }
  }
  if (maxPrice.value) {
    if (cat || pub || min) {
      max = `&pgt=${maxPrice.value}`;
    } else {
      max = `?pgt=${maxPrice.value}`;
    }
  }
  return `http://localhost:3000/books${cat}${pub}${min}${max}`;
}

function sendGetRequest(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        callback(JSON.parse(xhr.responseText));
      } else {
        console.log('something went wrong');
      }
    }
  }
  xhr.open('GET', url);
  xhr.send();
}

function renderSearchResults(response) {
  if (document.querySelector('ul')) {
    document.querySelector('main').removeChild(document.querySelector('ul'));
  }
  let listOfBooks = document.createElement('ul');
  response.forEach(function (book) {
    listOfBooks.appendChild(collectBookInfo(book));
  });
  document.querySelector('main').appendChild(listOfBooks);
}

function collectBookInfo(book) {
  let listElement = document.createElement('li');
  listElement.appendChild(getBookInfo(book, 'book_name'));
  listElement.appendChild(getBookInfo(book, 'aut_name'));
  listElement.appendChild(getBookInfo(book, 'cate_descrip'));
  listElement.appendChild(getBookInfo(book, 'pub_name'));
  listElement.appendChild(getBookInfo(book, 'book_price'));
  return listElement;
}

function getBookInfo(book, infoType) {
  let info = document.createElement('p');
  info.innerText = book[infoType];
  return info;
}


window.onload = () => {
  sendGetRequest('http://localhost:3000/books', renderSearchResults);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  sendGetRequest(getFilterParameters(), renderSearchResults);
});
