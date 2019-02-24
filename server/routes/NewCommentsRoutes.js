const express = require("express");
const router = express.Router();
const data = require("../data.json");

router.get("/newComments", (req, res)=> {
    return res.json(data[0].new_comments);
});

module.exports =  router;