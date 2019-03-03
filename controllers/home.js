exports.index = function (req, res) {
    const returnResponseOfFileJson = function (content) {
        res.render('home', {cat1: content[0], cat2: content[1]});
    };

    cats.done(returnResponseOfFileJson);
}