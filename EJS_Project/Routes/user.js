const express = require("express")
const { handleGetReqRes, handleCreateNewUser } = require("../Controllers/user")
const userRouter = express.Router()

userRouter.get( "/" , handleGetReqRes )
userRouter.post( "/user" , handleCreateNewUser )

module.exports = userRouter
