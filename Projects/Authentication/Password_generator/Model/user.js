const mongoose = require("mongoose")

const USER = mongoose.model( "user_info" , mongoose.Schema(
    {
        "username" : {
            type : String,
            required : true,
        },
        "email" : {
            type : String,
            required : true,
            unique : true
        },
        "password" : {
            type : String,
            required : true,
        }
    }
) )

module.exports = {USER}