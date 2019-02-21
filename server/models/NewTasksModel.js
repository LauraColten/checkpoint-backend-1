const mongoose = require("mongoose");

var newTasksSchema = new mongoose.Schema({
    body: String
    });
var NewTasks = mongoose.model('Comment', newTasksSchema);
module.exports = NewTasks;