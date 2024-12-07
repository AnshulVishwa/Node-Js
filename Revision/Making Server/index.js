// Requiring http module, fs Module, url module
const http = require("http")
const fs = require("fs")
const url = require("url")

// Port Number
const port = 8000

// Creating Server
const myServer = http.createServer( ( req , res ) => {
    // Switch case to handle routes
    switch ( req.url ){
        // Home Page
        case "/":
            // Get Request
            if( req.method == "GET" ){
                const data = `Request received on ${req.url}`
                fs.appendFile("./Logs.txt" , data , (err)=>console.log(err) )
                res.end("Home Page Get request")
            } 
            break;
        // About Page
        case "/about":
            // Get request
            if( req.method == "GET" ){
                const data = `Request received on ${req.url}`
                fs.appendFile("./Logs.txt" , data , (err)=>console.log(err) )
                res.end("About Page Get request")
            }
            break;
    }
} )

// Establishing Server
myServer.listen( port , ()=>console.log(`Server Started at Port ${port}`) )