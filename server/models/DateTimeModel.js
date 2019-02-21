const mongoose = require("mongoose");

var dateTimeSchema = new mongoose.Schema({
    body: String
    });
var DateTime = mongoose.model('DateTime', dateTimeSchema);
module.exports = DateTime;