'use strict';

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
