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
        "SpecialCharacters" : {
            type : Boolean,
            required : true,
        },
        "CreatedBy" : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "user_infos"
        }
    }
) )

module.exports = {PWD}