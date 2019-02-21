const express = require("express");
const router = express.Router();
const {list,show,create,update,remove} =require("../controllers/DateTimeController");


router.get("/dateTime", list);
router.get("/dateTime/:id", show);
router.post("/dateTime", create);
router.put("/dateTime/:id", update);
router.delete("/dateTime/:id", remove);

module.exports =  router;


const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', results.push)
  .on('end', () => {
    console.log(results);
    // [
    //   { NAME: 'Daffy Duck', AGE: 24 },
    //   { NAME: 'Bugs Bunny', AGE: 22 }
    // ]
  });