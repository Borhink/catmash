const home = require('../controllers/home');

app.get('/home', home.index);