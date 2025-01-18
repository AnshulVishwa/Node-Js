const express = require("express")
const { HandleGetAllBooks, HandlePostNewBook, HandleGetBookByCategory } = require("../Controllers/home")
const HomeRoute = express.Router()

HomeRoute.get("/" , HandleGetAllBooks)
HomeRoute.get("/:category" , HandleGetBookByCategory)
HomeRoute.post("/" , HandlePostNewBook)

module.exports = HomeRoute