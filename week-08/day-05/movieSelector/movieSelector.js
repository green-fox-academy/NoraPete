'use strict';

const genreDropDown = document.querySelector('#genre');
const movieDropDown = document.querySelector('#movie');
const selectedMovie= document.querySelector('span');

const movieDB = [
  {genre: 'sci-fi', value: '2001: A Space Odyssey'},
  {genre: 'sci-fi', value: 'Contact'},
  {genre: 'drama', value: 'Darkest Hour'},
  {genre: 'drama', value: 'There Will Be Blood'},
  {genre: 'drama', value: 'American Beauty'},
  {genre: 'comedy', value: 'Airplane!'},
  {genre: 'comedy', value: 'Deadpool'},
  {genre: 'comedy', value: 'Wayne\'s World'}
]

function displaySelectedMovie(movie) {
  selectedMovie.innerText = movie;
}

function renderMovieAsOption(movie) {
  let movieToAdd = document.createElement('option');
  movieToAdd.innerText = movie.value;
  movieToAdd.setAttribute('value', movie.value);
  movieDropDown.appendChild(movieToAdd);
}

function updateMovieOptions() {
  let optionList = document.querySelectorAll('#movie > option');
  optionList.forEach(function(option) {
      movieDropDown.removeChild(option);
  });
}

function filterMovies (genre) {
  movieDB.forEach(function(movie) {
    if(genre === movie.genre) {
      renderMovieAsOption(movie);
    }
  });
}

movieDropDown.addEventListener('change', function (e) {
  displaySelectedMovie(e.target.value);
});

genreDropDown.addEventListener('change', function (e) {
  updateMovieOptions();
  filterMovies(e.target.value);

});
