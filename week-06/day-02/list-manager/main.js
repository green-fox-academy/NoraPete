'use strict';

let itemList = ['bread', 'milk', 'orange', 'tomato'];

let body = document.querySelector('body');
let leftBlock = document.createElement('div');
let rightBlock = document.createElement('div');
let buttonBlock = document.createElement('div');

let upButton = document.createElement('button');
let downButton = document.createElement('button');
let removeButton = document.createElement('button');
let moveButton = document.createElement('button');

upButton.textContent = 'Up';
downButton.textContent = 'Down';
removeButton.textContent = 'X';
moveButton.textContent = '>';

buttonBlock.appendChild(upButton);
buttonBlock.appendChild(moveButton);
buttonBlock.appendChild(removeButton);
buttonBlock.appendChild(downButton);

function addList(itemList, block) {
  let listToAdd = document.createElement('ul');
  itemList.forEach(function (item) {
    let elementToAdd = document.createElement('li');
    elementToAdd.textContent = item;
    listToAdd.appendChild(elementToAdd);
  })
  block.appendChild(listToAdd);
}


//body.appendChild(leftBlock);
//body.appendChild(buttonBlock);
//body.appendChild(rightBlock);


