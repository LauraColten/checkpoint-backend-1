const mongoose = require("mongoose");

var ticketsSchema = new mongoose.Schema({
    body: String
    });
var Tickets = mongoose.model('Comment', ticketsSchema);
module.exports = Tickets;