const express = require("express");
const { handleGetAllTasks, handlePostTask , handleReqResCompletedTasks , PostCompletedTasks } = require("../Controller/taskFunction");
const TaskRoute = express.Router();

TaskRoute.get("/:user", handleGetAllTasks);
TaskRoute.get("/:user/completedTasks" , handleReqResCompletedTasks)
TaskRoute.post("/:user", handlePostTask);
TaskRoute.post("/:user/:task(\\d+)", PostCompletedTasks);


module.exports = TaskRoute

// TaskRoute.get("/deletedTask")
// TaskRoute.post("/newTask")
// TaskRoute.post("/taskCompleted")