const express = require("express");
const router = express.Router();


router.get("/dateTime", (req, res)=> {
  return res.send(new Date().toString())
});

module.exports =  router;


