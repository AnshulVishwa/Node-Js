const express = require("express")
const { RestrictToLoginUserOnly } = require("../Middlewares/auth")
const StaticRouter = express.Router()

StaticRouter.get( "/" , RestrictToLoginUserOnly , ( req , res ) => res.render("home") )
StaticRouter.get("/signup" , ( req , res ) => res.render("signup") )
StaticRouter.get("/login" , ( req , res ) => res.render("login") )

module.exports = StaticRouter