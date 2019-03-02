exports.index = function (req, res) {
    const returnResponseOfFileJson = function (content) {
        res.render('home', {cats: content[0].id});
    };

    cats.done(returnResponseOfFileJson);
}