const express = require('express');
const bodyParser = require('body-parser');
Promise = require('bluebird');
fs = Promise.promisifyAll(require('fs'));
log = require('./lib/log');
database = require('./lib/database');
app = express();
cats = database.load('database.json');
exphbs = require('express-handlebars');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Routing
require('./routing/home');
require('./routing/vote');

app.listen(8080);