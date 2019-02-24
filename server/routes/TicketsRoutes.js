const express = require("express");
const router = express.Router();
const data = require("../data.json");

router.get("/tickets", (req, res)=> {
    return res.json(data[0].tickets);
});

module.exports =  router;