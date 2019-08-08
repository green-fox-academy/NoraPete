'use strict';

let database = [
{header: 'Danny Davis', description: 'Danny Davis turning himself into a tripod', link: '/1.jpg'}, 
{header: 'Eero Ettala', description: 'Eero Ettala flexing his ass off', link: '/2.jpg'}, 
{header: `Haeckel's octopuses`, description: 'A bunch of mindblowing drawings from Erns Haeckel about mollusci', link: '/3.jpg'}, 
{header: `Haeckel's plankton`, description: 'A bunch of mindblowing drawings from Erns Haeckel about planctonic cells', link: '/4.jpg'}, 
{header: `Haeckel's corals`, description: 'A bunch of mindblowing drawings from Erns Haeckel about corals', link: '/5.jpg'}, 
{header: 'Hair', description: 'A SEM picture of a knot on human hair', link: '/6.jpg'}, 
{header: 'Handplant', description: 'Handplant captured by the master himself, who is mr Lorenz Holder', link: '/7.jpg'}, 
{header: `Haeckel's corals`, description: 'A bunch of mindblowing drawings from Erns Haeckel about corals', link: '/8.jpg'}, 
{header: 'Lofoten', description: 'Sunset in Lofoten during the Nitro team week', link: '/9.jpg'}, 
{header: 'Bonk', description: 'Marc Swoboda nose bonking the trunk', link: '/10.jpg'}, 
{header: 'Early take-off', description: 'A plane taking off on a foggy sunrise', link: '/11.jpg'}, 
{header: 'Bernstal', description: 'Sven Thorgren having fun at his backyard captured by Danial Bernstal', link: '/12.jpg'}, 
{header: 'Laax', description: 'Sven Thorgren flying over the swiss Alps', link: '/13.jpg'}, 
{header: 'Handplant', description: 'Johan Nordhag planting that hand', link: '/14.jpg'}
];

let counter = 0;

let imageDiv = document.querySelector('.image');
let thumbnailsDiv = document.querySelector('.thumbnails');

function getPosition(num, list) {
  if (num < 0) {
    return num % list.length + list.length;
  } else {
    return num % list.length;
  }
}

function createImage(image, parent) {
  let pic = document.createElement('img');
  pic.setAttribute('src', image.link);
  parent.appendChild(pic);
}

function createTitle(image, parent) {
  let title = document.createElement('h2');
  title.innerText = image.header;
  parent.appendChild(title);
}

function createDescription(image, parent) {
  let description = document.createElement('p');
  description.innerText = image.description;
  parent.appendChild(description);
}

function changeStateOnThumbnail(list, position) {
  list[position].toggleAttribute('selected');
}

function createDisplayBlock(data, numOfClicks, parent) {
  let selectedPic = data[getPosition(numOfClicks, database)];
  createImage(selectedPic, parent);
  let textArea = document.createElement('div');
  createTitle(selectedPic, textArea);
  createDescription(selectedPic, textArea);
  parent.appendChild(textArea);
}

createDisplayBlock(database, counter, imageDiv);

database.forEach(function (pic) {
  createImage(pic, thumbnailsDiv);
});
