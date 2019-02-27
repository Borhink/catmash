exports.index = function (req, res) {
    const returnResponseOfFileJson = function (content) {
        res.json(content);
    };

    cats.done(returnResponseOfFileJson);
}