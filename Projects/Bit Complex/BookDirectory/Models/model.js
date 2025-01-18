const mongoose = require("mongoose")
const Schema = require("./schema")

const BOOK = mongoose.model("books" , Schema)

module.exports = {BOOK}