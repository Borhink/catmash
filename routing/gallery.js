const gallery = require('../controllers/gallery');

app.get('/gallery', gallery.index);