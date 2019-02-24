//get request
const Task = require(".././models/TaskModel");

exports.list = function list(req, res) {
    Task.find(function(err, tasks) {
        if (err) return res.status(500).send(err);
        return res.json(tasks);
    })
}
//get with a specific id path
exports.show = function show(req, res) {
    Task.findById(req.params.id, function(err,task) {
        if (err) return res.status(500).send(err);
        return res.json(task);
    })
}
//post request
exports.create = function create(req, res) {
    Task.create(req.body, function(err, task) {
        if (err) return res.status(500).send(err);
        return res.json(task);
    })
}

exports.update = function update(req, res) {
    Task.findByIdAndUpdate(req.params.id, req.body, function(err, task) {
        if (err) return res.status(500).send(err);
        return res.json(task);
    })
}
//delete request
exports.remove = function remove(req, res) {
    Task.findByIdAndDelete(req.params.id, function(err, task) {
        if (err) return res.status(500).send(err);
        return res.json("deleted");
    });
}