const express = require("express");
const router = express.Router();
const {list,show,create,update,remove} =require("../controllers/NewCommentsController");


router.get("/newComments", list);
router.get("/newComments/:id", show);
router.post("/newComments", create);
router.put("/newComments/:id", update);
router.delete("/newComments/:id", remove);

module.exports =  router;