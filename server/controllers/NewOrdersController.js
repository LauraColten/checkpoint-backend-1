//get request
const Comment = require(".././models/NewOrdersModel");

// let comments = require("../comments");
exports.list = function list(request, response) {
    Comment.find(function(err, comments) {
        if (err) return response.status(500).send(err);
        return response.json(comments);
    })
}
//get with a specific id path
exports.show = function show(request, response) {
    let comment = comments.filter(p => p._id === Number(request.params.id));
    response.json(comment);
}
//post request
exports.create = function create(request, response) {
    let comment = { id: comments.length + 1, comment1: request.body.comment1, comment2: request.body.comment2 }
    comments.push(comment);
    response.json(comment);
}

exports.update = function update(request, response) {
    return response.json({ theId: request.params.id });
}
//delete request
exports.remove = function remove(request, response) {
    return response.json({});
}