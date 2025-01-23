const mongoose = require("mongoose")

const PWD = mongoose.model( "password_generator" , mongoose.Schema(
    {
        "password" : {
            type : String,
            required : true,
            unique : true
        },
        "length" : {
            type : Number,
            required : true,
        },
        "alphabets" : {
            type : Boolean,
            required : true,
        },
        "numbers" : {
            type : Boolean,
            required : true,
        },
        "special-characters" : {
            type : Boolean,
            required : true,
        },
        "created by" : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "user-info"
        }
    }
) )

module.exports = {PWD}