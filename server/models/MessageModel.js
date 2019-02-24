const mongoose = require("mongoose");

var messageSchema = new mongoose.Schema({
    name: String,
    date: Date,
    message: String
    });
var Message = mongoose.model('Message', messageSchema);
module.exports = Message;