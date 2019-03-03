const schedule = require('node-schedule');

exports.load = function (name) {
    return fs.readFileAsync('./private/'+name)
    .then(JSON.parse)
    .then(console.log('database loaded'))
    .catch(log.throw)
    ;
};

function save (name, data) {
    fs.writeFileAsync('./private/'+name, JSON.stringify(data))
    .catch(log.throw)
    .done(console.log("database saved"))
    ;
};

schedule.scheduleJob('*/30 * * * * *', function(){
    cats.done(data => save('database.json', data))
});