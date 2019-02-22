Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const log = require('../lib/log');

const initializeCats = function (file) {
    const data = file.images;
    var cats = [];
    for (var i = 0, len = data.length; i < len; i++) {
        const cat = {
            id : data[i].id,
            url : data[i].url,
            votes : 0,
            voted : false,
        };
        cats.push(cat);
    }

    fs.writeFileAsync('./private/database.json', JSON.stringify(cats))
        .catch(log.throw)
        .done(log.debug('creating database ok !'))
    ;
};

fs.readFileAsync('./private/cats.json')
    .then(JSON.parse)
    .then(initializeCats)
    .catch(log.throw)
    .done(log.debug('setup success !'))
;