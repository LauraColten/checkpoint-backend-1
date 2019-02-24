//get request
const Order = require(".././models/OrderModel");

exports.list = function list(req, res) {
    Order.find(function(err, orders) {
        if (err) return res.status(500).send(err);
        return res.json(orders);
    })
}
//get with a specific id path
exports.show = function show(req, res) {
    Order.findById(req.params.id, function(err,order) {
        if (err) return res.status(500).send(err);
        return res.json(order);
    })
}
//post request
exports.create = function create(req, res) {
    Order.create(req.body, function(err, order) {
        if (err) return res.status(500).send(err);
        return res.json(order);
    })
}

exports.update = function update(req, res) {
    Order.findByIdAndUpdate(req.params.id, req.body, function(err, order) {
        if (err) return res.status(500).send(err);
        return res.json(order);
    })
}
//delete request
exports.remove = function remove(req, res) {
    Order.findByIdAndDelete(req.params.id, function(err, order) {
        if (err) return res.status(500).send(err);
        return res.json("deleted");
    });
}