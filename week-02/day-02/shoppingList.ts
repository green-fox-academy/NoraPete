'use strict';

let shoppingList: string[] = ['Eggs', 'milk', 'fish', 'apples', 'bread', 'chicken'];

function findItemInList(list: string[], item: string): string {
    let returnMessage: string = 'We don\'t have ' + item + ' on the list.'
    list.forEach(function (element) {
        if (element.toLowerCase().indexOf(item) > -1) {
            returnMessage = 'We have ' + item + ' on the list.';
        }
    })
    return returnMessage;
}

console.log(findItemInList(shoppingList, 'egg'));
