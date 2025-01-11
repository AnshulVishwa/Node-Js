const express = require("express");
const TaskRoute = express.Router();
const { 
    handleGetAllTasks, 
    handlePostTask, 
    handleReqResCompletedTasks, 
    PostCompletedTasks, 
    handleReqResDeleteTask,
    GetRecentlyDeletedTask 
} = require("../Controller/taskFunction");

TaskRoute.get("/:user", handleGetAllTasks);
TaskRoute.get("/:user/completedTasks" , handleReqResCompletedTasks)
TaskRoute.get("/:user/delete", GetRecentlyDeletedTask);

TaskRoute.post("/:user", handlePostTask);
TaskRoute.post("/:user/:task(\\d+)", PostCompletedTasks);

TaskRoute.delete("/:user/:task(\\d+)/delete", handleReqResDeleteTask);

module.exports = TaskRoute
