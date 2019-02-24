const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");


router.get("/foxes", (req, res)=> {
    fetch("https://randomfox.ca/floof/")
    .then(response => response.json())
    .then(json => res.json(json.image));
});

module.exports =  router;