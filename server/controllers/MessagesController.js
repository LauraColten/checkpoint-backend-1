//get request
const Message = require(".././models/MessageModel");

exports.list = function list(req, res) {
    Message.find(function(err, messages) {
        if (err) return res.status(500).send(err);
        return res.json(messages);
    })
}
//get with a specific id path
exports.show = function show(req, res) {
    Message.findById(req.params.id, function(err,message) {
        if (err) return res.status(500).send(err);
        return res.json(message);
    })
}
//post request
exports.create = function create(req, res) {
    Message.create(req.body, function(err, message) {
        if (err) return res.status(500).send(err);
        return res.json(message);
    })
}

exports.update = function update(req, res) {
    Message.findByIdAndUpdate(req.params.id, req.body, function(err, message) {
        if (err) return res.status(500).send(err);
        return res.json(message);
    })
}
//delete request
exports.remove = function remove(req, res) {
    Message.findByIdAndDelete(req.params.id, function(err, message) {
        if (err) return res.status(500).send(err);
        return res.json("deleted");
    });
}