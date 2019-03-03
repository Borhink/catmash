exports.index = function (req, res) {
    const winner = req.body.winner ? req.body.winner : null;
    const looser = req.body.looser ? req.body.looser : null;

    const applyVote = async function (data) {
        
        for await (cat of data) {
            if (cat.id === winner) {
                cat.voted = true;
                cat.votes++;
            } else if (cat.id === looser) {
                cat.voted = true;
            }
        }
        catsLeft = data.filter(function(cat){return cat.voted===false});
        if (catsLeft.length < 2)
            data.forEach(function(cat) {cat.voted = false;});
        return data;
    };
    
    const returnResponseOfFileJson = function (content) {
        res.json(content);
    };

    const returnError = function () {
        res.status(200).send('ERROR');
    };

    cats.then(applyVote)
        .catch(log.throw)
        .done(returnResponseOfFileJson, returnError)
    ;
}