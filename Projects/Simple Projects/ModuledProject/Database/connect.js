const mongoose = require("mongoose")

async function connectMongoDB(url){
    try {
        await mongoose.connect(url)
        return console.log("MongoDB Connected")
    } catch (err) {
        return console.log(err)
    } 
}

module.exports = {connectMongoDB}