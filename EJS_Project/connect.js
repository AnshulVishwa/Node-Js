const mongoose = require("mongoose");

async function connect_MongoDB() {
    await mongoose.connect( "mongodb://127.0.0.1:27017/ejs_project" )
    .then( () => console.log("MongoDB connected") )
    .catch( (err) => console.log(err) )
}

module.exports = connect_MongoDB
