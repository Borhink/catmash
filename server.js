Promise = require('bluebird');
fs = Promise.promisifyAll(require('fs'));
log = require('./lib/log');
database = require('./lib/database');
cats = database.load('database.json').done(data => console.log(data));