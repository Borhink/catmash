exports.index = function (req, res) {
    const getCats = function (data) {
        return data.filter(function(cat){return cat.voted===false})
            .sort(function(a, b) {
                if (a.votes < b.votes)
                    return -1;
                if (a.votes > b.votes)
                    return 1;
                return 0;
            })
        ;
    };

    const returnResponseOfFileJson = function (content) {
        res.render('home', {cat1: content[0], cat2: content[1]});
    };
    
    cats.then(getCats)
        .then(returnResponseOfFileJson)
    ;
}