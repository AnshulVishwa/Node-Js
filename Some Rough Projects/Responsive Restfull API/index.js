const mongoose = require("mongoose")
const express = require("express");
const port = 8000;

// connection
mongoose.connect("mongodb://127.0.0.1:27017/user-data-database")
.then(() => console.log("Mongo DB connected"))
.catch((error) => console.log("Mongo DB connected" , error))

// Schema
const userSchema = new mongoose.Schema( {
    first_name : {
        type : String,
        required : true
    },
    last_name : {
        type : String
    },
    email : {
        type : String,
        unique : true
    },
    gender : {
        type : String
    }
} )

// Model
const User = mongoose.model( "user" , userSchema )

// MiddleWare
const app = express()
app.use( express.urlencoded( { extended : false } ) )

// In HTML FORMAT
app.route("/users")
.get( async ( req , res ) => {
    const allUsers = await User.find({})
    const html = `All Users: \n<ul>${
        allUsers.map( ( v , i ) => `<li>${v.first_name + " " + v.last_name }</li>` ).join("")
    }</ul>`
    res.send(html)
} )
.post( async ( req , res ) => {
    const body = req.body
    const users = await User.create(
        {
            first_name : body.first_name,
            last_name : body.last_name,
            email : body.email,
            gender : body.gender
        }
    )
    res.status(201).json({ msg : "User Created" })
} )

// In JSON FORMAT
app.get("/api/users" , async( req , res ) => {
    const allUsers = await User.find({})
    res.json(allUsers)
})

// Find The User
app.get( "/users/:id" , async ( req , res ) => {
    const user = await User.findById( req.params.id )
    res.json( user )
} )

// Establishing the Server
app.listen( port , () => console.log("Server Started") )