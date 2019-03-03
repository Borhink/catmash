exports.index = function (req, res) {
    const returnResponseOfFileJson = function (content) {
        res.render('home', {cats: content});
    };

    cats.done(returnResponseOfFileJson);
}