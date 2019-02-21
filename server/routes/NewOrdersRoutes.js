const express = require("express");
const router = express.Router();
const {list,show,create,update,remove} =require("../controllers/NewOrdersController");


router.get("/newOrders", list);
router.get("/newOrders/:id", show);
router.post("/newOrders", create);
router.put("/newOrders/:id", update);
router.delete("/newOrders/:id", remove);

module.exports =  router;