const { Schema , model } = require("mongoose")

const schema = new Schema( {
    username : { type : String },
    password : { type : String }
} )

const USER = model( "user_details" , schema )

module.exports = {USER}
