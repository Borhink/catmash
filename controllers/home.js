exports.index = function (req, res) {
    const getCats = function (data) {
        return data.filter(function(cat){return cat.voted===false})
            .sort(function(a, b){return b.votes < a.votes})
        ;
    };

    const returnResponseOfFileJson = function (content) {
        res.render('home', {cat1: content[0], cat2: content[1]});
    };
    
    cats.then(getCats)
        .then(returnResponseOfFileJson)
    ;
}