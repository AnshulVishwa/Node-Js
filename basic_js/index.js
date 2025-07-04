const express = require("express")
const app = express()
const mongoose = require("mongoose")
const userRouter = require("./Routes/user")
const path = require("path")

app.use( express.urlencoded({extended : false}) )
app.set( "view engine" , "ejs" )
app.set( "views" , path.resolve("./View") )

mongoose.connect( "mongodb://127.0.0.1:27017/basic_js" )
.then( () => console.log("mongoDB connected") )
.catch( (err) => console.log(err) )

app.use( "/user" , userRouter )

app.listen( 5000 )
