'use strict';

let database = [
  { header: 'Danny Davis', description: 'Danny Davis turning himself into a tripod', link: '/1.jpg' },
  { header: 'Eero Ettala', description: 'Eero Ettala flexing his ass out', link: '/2.jpg' },
  { header: `Haeckel's octopuses`, description: 'A bunch of mindblowing drawings from Erns Haeckel about mollusci', link: '/3.jpg' },
  { header: `Haeckel's plankton`, description: 'A bunch of mindblowing drawings from Erns Haeckel about planctonic cells', link: '/4.jpg' },
  { header: `Haeckel's corals`, description: 'A bunch of mindblowing drawings from Erns Haeckel about corals', link: '/5.jpg' },
  { header: 'Hair', description: 'A SEM picture of a knot on human hair', link: '/6.jpg' },
  { header: 'Handplant', description: 'Handplant captured by the master himself, who is mr Lorenz Holder', link: '/7.jpg' },
  { header: `Haeckel's corals`, description: 'A bunch of mindblowing drawings from Erns Haeckel about corals', link: '/8.jpg' },
  { header: 'Lofoten', description: 'Sunset in Lofoten during the Nitro team week', link: '/9.jpg' },
  { header: 'Bonk', description: 'Marc Swoboda nose bonking the trunk', link: '/10.jpg' },
  { header: 'Early take-off', description: 'A plane taking off on a foggy sunrise', link: '/11.jpg' },
  { header: 'Bernstal', description: 'Sven Thorgren having fun at his backyard captured by Danial Bernstal', link: '/12.jpg' },
  { header: 'Laax', description: 'Sven Thorgren flying over the swiss Alps', link: '/13.jpg' },
  { header: 'Handplant', description: 'Johan Nordhag planting that hand', link: '/14.jpg' }
];

let counter = 0;

let displayImage = document.querySelector('.image > img');
let imageTitle = document.querySelector('h1');
let imageDescription = document.querySelector('p');
let thumbnailsDiv = document.querySelector('.thumbnails');
let leftArrow = document.querySelectorAll('button')[0];
let rightArrow = document.querySelectorAll('button')[1];

function getPosition(num, list) {
  return ((num % list.length) + list.length) % list.length;
}

function createImage(image, parent, onclick) {
  let pic = document.createElement('img');
  pic.setAttribute('src', image.link);
  parent.appendChild(pic);
  if (onclick) {
    pic.onclick = function() {
      counter = database.indexOf(image);
      changeDisplayBlock(database, counter);
      changeStateOnThumbnail(thumbnailList, counter);
    }
  }
}

function changeStateOnThumbnail(list, numOfClicks) {
  let position = getPosition(numOfClicks, database);
  for (let i = 0; i < list.length; i ++) {
    list[i].classList.remove('selected');
  }
  list[position].classList.add('selected');
}

function changeDisplayBlock(data, numOfClicks) {
  let selectedPic = data[getPosition(numOfClicks, data)];
  displayImage.setAttribute('src', selectedPic.link);
  imageTitle.textContent = selectedPic.header;
  imageDescription.textContent = selectedPic.description;
}

function arrowClick(isRight) {
  if (isRight) {
    counter++;
  } else {
    counter--;
  }
  changeDisplayBlock(database, counter);
  changeStateOnThumbnail(thumbnailList, counter);
}

database.forEach(function (pic) {
  createImage(pic, thumbnailsDiv, true);
});

let thumbnailList = document.querySelector('.thumbnails').children;

changeDisplayBlock(database, counter);
changeStateOnThumbnail(thumbnailList, counter);

leftArrow.onclick = () => { arrowClick(false) };
rightArrow.onclick = () => { arrowClick(true) };
