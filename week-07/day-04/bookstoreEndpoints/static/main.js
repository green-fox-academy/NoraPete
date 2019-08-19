'use strict';


function sendGetRequest(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if(xhr.status === 200) {
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
    let listElement = document.createElement('li');
    let title = document.createElement('p');
    title.innerText = book.book_name;
    let author = document.createElement('p');
    author.innerText= book.aut_name;
    let category = document.createElement('p');
    category.innerText = book.cate_descrip;
    let publisher = document.createElement('p');
    publisher.innerText = book.pub_name;
    let price = document.createElement('p');
    price.innerText = book.book_price;
    listElement.appendChild(title);
    listElement.appendChild(author);
    listElement.appendChild(category);
    listElement.appendChild(publisher);
    listElement.appendChild(price);
    listOfBooks.appendChild(listElement);
  });
  document.querySelector('main').appendChild(listOfBooks);
}


window.onload = () => {
  sendGetRequest('http://localhost:3000/books', renderSearchResults);
}
