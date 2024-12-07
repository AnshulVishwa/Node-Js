// Requiring fs module, express js
const fs = require("fs")
const express = require("express")
// making an app
const app = express()
// Creating a Log file, with heading
fs.writeFile( "./logs.txt" , "Log File \n\n" , (err) => { console.log(err) } )
// Home page Get request
app.get( "/" , ( req , res ) => {
    const data = `${Date.now()}\tRequest Recieved on ${req.url}\n`
    fs.appendFile("./logs.txt" , data , (err) => { console.log(err) } )
    res.send("Home page")
} )
// About page Get request
app.get( "/about" , ( req , res ) => {
    const data = `${Date.now()}\tRequest Recieved on ${req.url}\n`
    fs.appendFile("./logs.txt" , data , (err) => { console.log(err) } )
    res.send("About page")
} )
// Establishing Server
app.listen( 8000 , () => console.log(`Server Started at Port 8000`) )