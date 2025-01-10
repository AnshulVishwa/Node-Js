const express = require("express");
const { handleGetAllTasks, 
    handlePostTask, 
    handleReqResCompletedTasks, 
    PostCompletedTasks, 
    handleReqResDeleteTask } = require("../Controller/taskFunction");
const TaskRoute = express.Router();

TaskRoute.get("/:user", handleGetAllTasks);
TaskRoute.get("/:user/completedTasks" , handleReqResCompletedTasks)
TaskRoute.post("/:user", handlePostTask);
TaskRoute.post("/:user/:task(\\d+)", PostCompletedTasks);
TaskRoute.delete("/:user/:task(\\d+)/delete", handleReqResDeleteTask);


module.exports = TaskRoute

// TaskRoute.get("/deletedTask")
// TaskRoute.post("/newTask")