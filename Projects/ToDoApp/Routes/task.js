const express = require("express");
const { handleGetAllTasks } = require("../Controller/taskFunction");
const TaskRoute = express.Router();

TaskRoute.get("/alltasks", handleGetAllTasks);

module.exports = TaskRoute

// TaskRoute.get("/completedTasks")
// TaskRoute.get("/deletedTask")

// TaskRoute.post("/newTask")
// TaskRoute.post("/taskCompleted")