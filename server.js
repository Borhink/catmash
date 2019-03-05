const express = require('express');
const bodyParser = require('body-parser');
Promise = require('bluebird');
fs = Promise.promisifyAll(require('fs'));
log = require('./lib/log');
database = require('./lib/database');
cats = database.load('database.json');
exphbs = require('express-handlebars');

app = express();

const hbs = exphbs.create({
    helpers: {
        vote: function (winner, looser) {
            console.log('winner: ' + winner + ', looser: ' + looser);
        }
    },
    defaultLayout: 'main'
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public/css'));


// Routing
require('./routing/home');
require('./routing/vote');
require('./routing/gallery');

app.get('/', function(req, res) {
    res.redirect('/home');
});

app.listen(process.env.PORT || 5000, function () {
    console.log('Ready');
});