const mongoose = require("mongoose")
const Schema = require("../Schema/schema")

const Student = mongoose.model( "StudentDetail" , Schema )

module.exports = Student