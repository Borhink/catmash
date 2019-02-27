const express = require('express');
const bodyParser = require('body-parser');
Promise = require('bluebird');
fs = Promise.promisifyAll(require('fs'));
log = require('./lib/log');
database = require('./lib/database');
app = express();
cats = database.load('database.json');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routing
require('./routing/home');

app.listen(8080);