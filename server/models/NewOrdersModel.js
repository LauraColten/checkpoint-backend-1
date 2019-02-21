const mongoose = require("mongoose");

var newOrdersSchema = new mongoose.Schema({
    body: String
    });
var NewOrders = mongoose.model('Comment', newOrdersSchema);
module.exports = NewOrders;