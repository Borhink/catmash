exports.index = function (req, res) {
    const winner = req.body.winner ? req.body.winner : null;
    const looser = req.body.looser ? req.body.looser : null;

    const applyVote = async function (data) {
        
        for await (cat of data) {
            if (cat.voted === false && (cat.id === winner || cat.id === looser)) {
                if (cat.id === winner)
                    cat.votes++;
                cat.voted = true;
            }
        }

        catsLeft = data.filter(function(cat){return cat.voted===false});
        if (catsLeft.length < 2)
            data.forEach(function(cat) {cat.voted = false;});

        return catsLeft;
    };
    
    const returnResponseOfFileJson = function (content) {
        res.json(content);
    };

    cats.then(applyVote)
        .done(res.redirect('back'))
    ;
}