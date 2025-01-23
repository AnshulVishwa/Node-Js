const express = require("express")
const { HandleSignupUser, HandleLoginUser } = require("../Controllers/user")
const UserRouter = express.Router()

UserRouter.post( "/signup" , HandleSignupUser )
UserRouter.post( "/login" , HandleLoginUser )

module.exports = UserRouter