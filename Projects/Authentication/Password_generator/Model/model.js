const mongoose = require("mongoose")

const PWD = mongoose.model( "password-generator" , mongoose.Schema(
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
        }
    }
) )

module.exports = PWD