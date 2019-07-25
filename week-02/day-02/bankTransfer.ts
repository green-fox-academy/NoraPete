'use strict';

const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

function getNameAndBalance(accountNumber: number): any[] {
    let clientsNameAndBalance: any[] = [];
    accounts.forEach(function (client) {
        if (client.accountNumber === accountNumber) {
            clientsNameAndBalance.push(client.clientName);
            clientsNameAndBalance.push(client.balance);
        }
    })
    return clientsNameAndBalance;
}

function transferAmount(accounts: any[], from: number, to: number, amount: number): void {
    let fromPresent: boolean = false;
    let toPresent: boolean = false;
    accounts.forEach(function (client) {
        if(client.accountNumber === from) {
            fromPresent = true;
        } else if (client.accountNumber === to) {
            toPresent = true;
        }
    })
    if (!fromPresent || !toPresent) {
        throw Error ('404 - account not found');
    } else {
        accounts.forEach(function (client) {
            if(client.accountNumber === from) {
                client.balance -= amount;
            } else if (client.accountNumber === to) {
                client.balance += amount;
            }
        })
    }
}

// Create function that returns the name and balance of cash on an account in a list
console.log(getNameAndBalance(11234543));
// should return: ['Igor', 203004099.2]

// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

try {
    transferAmount(accounts, 43546731, 2345631, 500.0);
} catch (e) {
    console.log(e);
}

console.log(accounts);
//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]

export = {
  getNameAndBalance,
  transferAmount,
  accounts
};