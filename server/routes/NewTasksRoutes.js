const express = require("express");
const router = express.Router();
const data = require("../data.json");


router.get("/newTasks", (req, res)=> {
    return res.json(data[0].new_tasks);
});

module.exports =  router;