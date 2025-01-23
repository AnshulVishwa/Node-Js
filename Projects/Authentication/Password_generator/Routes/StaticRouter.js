const express = require("express")
const StaticRouter = express.Router()

StaticRouter.get( "/" , ( req , res ) => res.render("home") )
StaticRouter.get("/signup" , ( req , res ) => res.render("signup") )
StaticRouter.get("/login" , ( req , res ) => res.render("login") )

module.exports = StaticRouter