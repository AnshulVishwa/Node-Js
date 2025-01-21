const express = require("express")
const StaticRouter = express.Router()


StaticRouter.get( "/" , ( req , res ) => res.render("home") )