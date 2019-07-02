'use strict';

let map2ToPlayWith = {
    '978-1-60309-452-8': 'A Letter to Jo',
    '978-1-60309-459-7': 'Lupus',
    '978-1-60309-444-3': 'Red Panda and Moon Bear',
    '978-1-60309-461-0': 'The Lab'
}

for (let idCode in map2ToPlayWith) {
    console.log(map2ToPlayWith[idCode] + ' (ISBN: ' + idCode + ')');
}

delete map2ToPlayWith['978-1-60309-444-3'];

Object.keys(map2ToPlayWith).forEach(function (key) {
    if (map2ToPlayWith[key] === 'The Lab') {
        delete map2ToPlayWith[key];
    }
})

map2ToPlayWith['978-1-60309-450-4'] = 'They Called Us Enemy';
map2ToPlayWith['978-1-60309-453-5'] = 'Why Did We Trust Him?';

if (Object.hasOwnProperty('478-0-61159-424-8')) {
    console.log('There is a book with the ISBN of 478-0-61159-424-8.');
} else {
    console.log('There isn\'t any book with the ISBN of 478-0-61159-424-8.');
}

console.log(map2ToPlayWith['978-1-60309-453-5']);
