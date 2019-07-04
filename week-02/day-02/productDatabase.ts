'use strict';

let productPrices: any = {
    'Eggs': 200,
    'Milk': 200,
    'Fish': 400,
    'Apples': 150,
    'Bread': 50,
    'Chicken': 550
}

function findsPriceOfItem(priceList: any, product: string): string {
    let itemsPrice: number;
    let keys: string[] = Object.keys(priceList);
    let productList: string[] = [];
    keys.forEach(function (item) {
        item = item.toLowerCase()
        productList.push(item);
    })
    if (productList.indexOf(product.toLowerCase()) > -1) {
       itemsPrice = priceList[keys[productList.indexOf(product.toLowerCase())]];
        return product + ' costs ' + itemsPrice;
    } else {
        return 'There is no such product on the list.';
    }
}

console.log(findsPriceOfItem(productPrices, 'fish'))

function findsHighestPrice(productList: any): string {
    let prices: number[] = [];
    Object.keys(productList).forEach(function (item) {
        prices.push(productList[item]);
    })
    let max: number;
    prices.forEach(function (item) {
        if (prices.indexOf(item) == 0) {
            max = item;
        } else if (item > max) {
            max = item;
        }
    })
    let mostExp: string = Object.keys(productList)[prices.indexOf(max)];
    return 'The most expensive product is ' + mostExp;
}

console.log(findsHighestPrice(productPrices));

function findsLowestPrice(productList: any): string {
    let prices: number[] = [];
    Object.keys(productList).forEach(function (item) {
        prices.push(productList[item]);
    })
    let min: number;
    prices.forEach(function (item) {
        if (prices.indexOf(item) == 0) {
            min = item;
        } else if (item < min) {
            min = item;
        }
    })
    let leastExp: string = Object.keys(productList)[prices.indexOf(min)];
    return 'The cheapest product is ' + leastExp;
}

console.log(findsLowestPrice(productPrices));

