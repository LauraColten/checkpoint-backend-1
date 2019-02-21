const express = require("express");
const router = express.Router();
const {list,show,create,update,remove} =require("../controllers/NewTasksController");


router.get("/newTasks", list);
router.get("/newTasks/:id", show);
router.post("/newTasks", create);
router.put("/newTasks/:id", update);
router.delete("/newTasks/:id", remove);

module.exports =  router;