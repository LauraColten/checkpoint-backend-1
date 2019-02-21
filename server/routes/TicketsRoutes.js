const express = require("express");
const router = express.Router();
const {list,show,create,update,remove} =require("../controllers/TicketsController");


router.get("/tickets", list);
router.get("/tickets/:id", show);
router.post("/tickets", create);
router.put("/tickets/:id", update);
router.delete("/tickets/:id", remove);

module.exports =  router;