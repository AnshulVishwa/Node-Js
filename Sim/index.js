const express = require("express")
const mongoose = require("mongoose")
const app = express()

mongoose.connect( "mongodb://127.0.0.1:27017/NewDb_Sim" )

const Model = new mongoose.model( "doremon" , new mongoose.Schema({
    name : {
        type : String
    },
    roll : {
        type : Number
    }
}) )

app.get( "/" , async (req,res) => {
    await Model.create( {
        name : "Anshul",
        roll : 13
    } )
    await Model.create( {
        name : "Vidhi",
        roll : 13
    } )

    await Model.deleteOne( {roll : 13} )

    const data = await Model.find()

    await Model.updateOne( {roll : 13} , { $set : { roll : 14 } } )

    res.send(data)
} )


app.listen(5000)
