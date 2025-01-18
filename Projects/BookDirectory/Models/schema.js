const mongoose = require("mongoose")

const Schema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    category : {
        type : String,
    },
    author : {
        type : String,
        required : true
    },
    pages : {
        type : Number
    }
})

module.exports = Schema