'use strict';

let phoneBook = {
    'William A. Lathan': '405-709-1865',
    'John K. Miller': '402-247-8568',
    'Hortensia E. Foster': '606-481-6467',
    'Amanda D. Newland': '319-243-5613',
    'Brooke P. Askew': '307-687-2982'
}
let searchForTheirNum: string;
let searchForTheName: string;
let areTheyPresent: string = 'Chris E. Myers';

function nameToNumber(dataBase: any, name: string): string {
    return dataBase[name];
}

function numberToName(dataBase: any, phoneNum: string): string {
    let outName: string = '';
    Object.keys(dataBase).forEach(function (person) {
        if (dataBase[person] === phoneNum) {
            outName = person;
        }
    })
    return outName;
}

function doIKnow(dataBase: any, stranger: string): string {
    if (dataBase.hasOwnProperty(stranger)) {
        return 'We know ' + stranger + '\'s phone number.';
    } else {
        return 'We don\'t know ' + stranger + '\'s phone number.';
    }
}

function personalAssistant(inputDataBase: any, inputName: string, inputPhoneNum: string, inputStranger: string): string {
    let returnMessage: string = '';
    if (inputName) {
        returnMessage += inputName + '\'s phone number is ' + nameToNumber(inputDataBase, inputName) + '\n';
    }
    if (inputPhoneNum) {
        returnMessage += inputPhoneNum + ' belongs to ' + numberToName(inputDataBase, inputPhoneNum) + '\n';
    }
    if (inputStranger) {
        returnMessage += doIKnow(inputDataBase, inputStranger);
    }
    return returnMessage;
}

console.log(personalAssistant(phoneBook, searchForTheirNum, searchForTheName, areTheyPresent));
