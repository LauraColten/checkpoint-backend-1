const mongoose = require("mongoose");

var orderSchema = new mongoose.Schema({
    orderDate: String,
    orderTime: String,
    amount: String
    });
var Order = mongoose.model('Order', orderSchema);
module.exports = Order;