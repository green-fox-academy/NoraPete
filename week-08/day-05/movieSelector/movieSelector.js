'use strict';

const genreDropDown = document.querySelector('#genre');
const movieDropDown = document.querySelector('#movie');
const movieSpan = document.querySelector('span');

const movieDB = [
  { genre: 'sci-fi', value: '2001: A Space Odyssey' },
  { genre: 'sci-fi', value: 'Contact' },
  { genre: 'drama', value: 'Darkest Hour' },
  { genre: 'drama', value: 'There Will Be Blood' },
  { genre: 'drama', value: 'American Beauty' },
  { genre: 'comedy', value: 'Airplane!' },
  { genre: 'comedy', value: 'Deadpool' },
  { genre: 'comedy', value: 'Wayne\'s World' }
];

function displaySelectedMovie(movie) {
  movieSpan.innerText = movie;
}

function clearMovieOptions() {
  let optionList = document.querySelectorAll('#movie > option');
  for (let i = 1; i < optionList.length; i++) {
    movieDropDown.removeChild(optionList[i]);
  }
}

function renderMovieAsOption(movie) {
  let movieToAdd = document.createElement('option');
  movieToAdd.innerText = movie.value;
  movieToAdd.setAttribute('value', movie.value);
  movieDropDown.appendChild(movieToAdd);
}

function filterDatabase(filter) {
  return movieDB.filter(function (movie) {
    return movie.genre === filter;
  });
}

function updateMovieOptions(genre = '') {
  clearMovieOptions();
  let optionalMovies;
  genre ? optionalMovies = filterDatabase(genre) : optionalMovies = movieDB;
  optionalMovies.forEach(renderMovieAsOption);
}

movieDropDown.addEventListener('change', function (e) {
  displaySelectedMovie(e.target.value);
});

genreDropDown.addEventListener('change', function (e) {
  updateMovieOptions(e.target.value);
});

window.addEventListener('load', function () {
  updateMovieOptions();
});
