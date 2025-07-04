const express = require("express")
const { handleGetReqRes, handlePostReqRes } = require("../Controllers/user")
const userRouter = express.Router()

userRouter.get( "/" , handleGetReqRes )
userRouter.post( "/post" , handlePostReqRes  )

module.exports = userRouter
