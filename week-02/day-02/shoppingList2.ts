'use strict';

let productDatabese = {
    'Milk': 1.07,
    'Rice': 1.59,
    'Eggs': 3.14,
    'Cheese': 12.60,
    'Chicken Breasts': 9.40,
    'Apples': 2.31,
    'Tomato': 2.58,
    'Potato': 1.75,
    'Onion': 1.10
}

let bobsShoppingList = {
    'Milk': 3,
    'Rice': 2,
    'Eggs': 2,
    'Cheese': 1,
    'Chicken Breasts': 4,
    'Apples': 1,
    'Tomato': 2,
    'Potato': 1
}

let alicesShoppingList = {
    'Rice': 1,
    'Eggs': 5,
    'Chicken Breasts': 2,
    'Apples': 1,
    'Tomato': 10
}

let shoppingListsDataBase = {
    'Alice': alicesShoppingList,
    'Bob': bobsShoppingList,
}

function howMuchDoTheyPay(shoppingList: object): number {
    let sum: number = 0;
    Object.keys(shoppingList).forEach(function (product) {
        sum += shoppingList[product] * productDatabese[product];
    })
    return sum;
}

function whoBuysMore(product: string): string {
    let personWhoBuysTheMost: string;
    Object.keys(shoppingListsDataBase).forEach(function (person) {
        if (shoppingListsDataBase[person].hasOwnProperty(product) && !personWhoBuysTheMost) {
            personWhoBuysTheMost = person;
        } else if (shoppingListsDataBase[person].hasOwnProperty(product) && shoppingListsDataBase[person][product] > shoppingListsDataBase[personWhoBuysTheMost][product]) {
            personWhoBuysTheMost = person;
        }
    })
    if (personWhoBuysTheMost) {
        return personWhoBuysTheMost;
    } else {
        return 'nobody buys this product';
    }
}

function whoBuysMoreDifferentProduct(): string {
    let personWithLongestShoppingList: string;
    Object.keys(shoppingListsDataBase).forEach(function (person) {
        if (Object.keys(shoppingListsDataBase).indexOf(person) === 0) {
            personWithLongestShoppingList = person;
        } else if (Object.keys(shoppingListsDataBase[person]).length > Object.keys(shoppingListsDataBase[personWithLongestShoppingList]).length) {
            personWithLongestShoppingList = person;
        }
    })
    return personWithLongestShoppingList;
}

function whoBuysMoreProduct(): string {
    let personWithMostProduct: string;
    let peopleWithNumOfProducts = {};
    Object.keys(shoppingListsDataBase).forEach(function (person) {
        let sumOfProducts: number = 0;
        Object.keys(shoppingListsDataBase[person]).forEach(function (product) {
            sumOfProducts += shoppingListsDataBase[person][product];
        })
        peopleWithNumOfProducts[person] = sumOfProducts;
    })
    Object.keys(peopleWithNumOfProducts).forEach(function (person) {
        if (Object.keys(peopleWithNumOfProducts).indexOf(person) === 0) {
            personWithMostProduct = person;
        } else if (peopleWithNumOfProducts[person] > peopleWithNumOfProducts[personWithMostProduct]) {
            personWithMostProduct = person;
        }
    })
    return personWithMostProduct;
}

console.log(howMuchDoTheyPay(bobsShoppingList));
console.log(howMuchDoTheyPay(alicesShoppingList));
console.log(whoBuysMore('Potato'));
console.log(whoBuysMore('Rice'));
console.log(whoBuysMore('Onion'));
console.log(whoBuysMoreDifferentProduct());
console.log(whoBuysMoreProduct());
