exports.index = function (req, res) {
    const winner = req.body.winner ? req.body.winner : null;
    const looser = req.body.looser ? req.body.looser : null;

    const returnResponseOfFileJson = function (content) {
        res.json(content);
    };
    const applyVote = function (data) {

        for (cat of data) {
            if (cat.id === winner) {
                cat.voted = true;
                cat.votes++;
            } else if (cat.id === looser) {
                cat.voted = true;
            }
        }
    };

    const returnError = function () {
        res.status(200).send('ERROR');
    };

    cats.then(applyVote)
        .catch(log.throw)
        .done(returnResponseOfFileJson, returnError)
    ;
}