const express = require("express");
const StaticRoute = express.Router();

StaticRoute.get("/" , ( req , res ) => res.render("home"))

module.exports = StaticRoute