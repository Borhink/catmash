const vote = require('../controllers/vote');

app.post('/vote', vote.index);