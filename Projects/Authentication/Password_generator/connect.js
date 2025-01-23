const mongoose = require("mongoose")

async function ConnectToMongoDB() {
    return await mongoose.connect("mongodb://127.0.0.1:27017/pwd-generator")
    .then( console.log("MongoDB connected") )
    .catch( ( error ) => console.log(`Error : ${error}`) )
}

module.exports = {
    ConnectToMongoDB
}