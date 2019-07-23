'use strict';

let productDatabase = {
    'Eggs': 200,
    'Milk': 200,
    'Fish': 400,
    'Apples': 150,
    'Bread': 50,
    'Chichken': 550,
}

function getsProductsCheaperThan(limit: number): string[] {
    let cheapProducts: string[] = Object.keys(productDatabase).filter(function (product) {
        return (productDatabase[product] < limit);
    })
    return cheapProducts;
}

function getsProductsForMoreThan(limit: number) {
    let expensiveProducts = [];
    Object.keys(productDatabase).forEach(function (product) {
        if (productDatabase[product] > limit) {
            expensiveProducts.push([product, productDatabase[product]]);
        }
    })
    return expensiveProducts;
}

console.log(getsProductsCheaperThan(201));
console.log(getsProductsForMoreThan(150));
