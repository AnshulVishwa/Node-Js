const express = require("express");
const { handleGetAllTasks, handlePostTask } = require("../Controller/taskFunction");
const TaskRoute = express.Router();

TaskRoute.get("/:user", handleGetAllTasks);
TaskRoute.post("/:user", handlePostTask);

module.exports = TaskRoute

// TaskRoute.get("/completedTasks")
// TaskRoute.get("/deletedTask")

// TaskRoute.post("/newTask")
// TaskRoute.post("/taskCompleted")