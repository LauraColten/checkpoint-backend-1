const express = require("express");
const router = express.Router();
const data = require("../data.json");

router.get("/newOrders", (req, res) => {
   return res.json(data[0].new_orders);
});

module.exports =  router;