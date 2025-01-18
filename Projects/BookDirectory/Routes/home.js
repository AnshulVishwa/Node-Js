const express = require("express")
const { HandleGetAllBooks, HandlePostNewBook } = require("../Controllers/home")
const HomeRoute = express.Router()

HomeRoute.get("/" , HandleGetAllBooks)
HomeRoute.post("/" , HandlePostNewBook)

module.exports = HomeRoute