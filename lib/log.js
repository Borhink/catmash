exports.debug = function (content) {
    console.log(content);

    return content;
};

exports.throw = function (err) {
    console.log(err);

    throw new Error('ERROR' + err);
};