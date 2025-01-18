const mongoose = require("mongoose")

async function MongoDB_Connection(){
    return await mongoose.connect("mongodb://127.0.0.1:27017/directory")
}

module.exports = {MongoDB_Connection}