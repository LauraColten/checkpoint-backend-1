const express = require("express");
const router = express.Router();
const {list,show,create,update,remove} =require("../controllers/TasksController");

router.get("/tasks", list);
router.get("/tasks/:id", show);
router.post("/tasks", create);
router.put("/tasks/:id", update);
router.delete("/tasks/:id", remove);

module.exports = router;