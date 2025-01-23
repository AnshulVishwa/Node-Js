const express = require("express")
const { HandleGeneratePassword } = require("../Controllers/pwd")
const { RestrictToLoginUserOnly } = require("../Middlewares/auth")

const PwdRouter = express.Router()

PwdRouter.post( "/post" , RestrictToLoginUserOnly , HandleGeneratePassword )

module.exports = PwdRouter