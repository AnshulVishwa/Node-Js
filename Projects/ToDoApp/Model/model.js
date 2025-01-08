const mongoose = require("mongoose")
const Schema = require("./schema")

const TODO = mongoose.model("to_do_app" , Schema)

module.exports = {TODO}