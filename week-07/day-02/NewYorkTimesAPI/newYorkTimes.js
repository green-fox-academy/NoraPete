'use strict';

const xhr = new XMLHttpRequest();

function collectSearchResults(data) {
  let list = document.createElement('ul');
  data.response.docs.forEach(function(article) {
    displaySearchResult(article, list);
  });
  document.querySelector('body').appendChild(list);
}

function displaySearchResult(result, parent) {
  let listElement = document.createElement('li');
  getHeadline(result, listElement);
  getSnippet(result, listElement);
  getPublicationDate(result, listElement);
  parent.appendChild(listElement);
}

function getHeadline(result, parent) {
  let header = document.createElement('h2');
  header.innerText = result.headline.main;
  parent.appendChild(header);
}

function getSnippet(result, parent) {
  let snippet = document.createElement('p');
  snippet.innerText = result.snippet;
  parent.appendChild(snippet);
}

function getPublicationDate(result, parent) {
  let publicationDate = document.createElement('p');
  publicationDate.innerText = result.pub_date.slice(0, -14);
  parent.appendChild(publicationDate);
}

xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      collectSearchResults(JSON.parse(xhr.responseText));
    } else {
      console.log('Something went wrong');
    }
  }
}

xhr.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=moon-landing&api-key=pdrnR73UNeUKueFGdIFZNafoKSbYDuEr');
xhr.send();