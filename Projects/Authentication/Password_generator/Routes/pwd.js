const express = require("express")
const { HandleGeneratePassword } = require("../Controllers/pwd")

const PwdRouter = express.Router()

PwdRouter.post( "/post" , HandleGeneratePassword )

module.exports = PwdRouter