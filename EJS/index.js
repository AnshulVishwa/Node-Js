const express = require("express")
const path = require("path")
const app = express()

app.use( express.urlencoded( {extended : false} ) )

app.set( "view engine" , "ejs" )
app.set( "views" , path.resolve("./") )

let users = [
    {name : "Anshul" , roll : 13},
    {name : "Vidhi" , roll : 14},
    {name : "Arpit" , roll : 15},
    {name : "Mukku" , roll : 16},
]

app.get( "/" , ( req , res ) => {
    res.render("home" , { users })
} )

app.post( "/user" , ( req , res ) => {
    const { name , roll } = req.body
    users.push( { name , roll } )
    res.redirect("/")
} )

app.listen(5000)
