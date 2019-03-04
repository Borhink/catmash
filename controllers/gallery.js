exports.index = function (req, res) {
    const getCats = function (data) {
        return data.sort(function(a, b) {
            if (a.votes < b.votes)
                return 1;
            if (a.votes > b.votes)
                return -1;
            return 0;
        });
    };

    const returnResponseOfFileJson = function (content) {
        res.render('gallery', {cats: content});
    };

    cats.then(getCats)
        .then(returnResponseOfFileJson)
    ;
}