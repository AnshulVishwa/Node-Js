const mongoose = require("mongoose");

const SCHEMA = new mongoose.Schema( {
    username : { type : String, required : true },
    dob : { type : String },
    rollNumber : { type : Number }
} )

const USER = new mongoose.model( "user_details" , SCHEMA )

module.exports = USER
