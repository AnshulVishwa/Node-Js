const http = require("http")
const fs = require("fs")
fs.writeFile("./Logs.txt/" , "Server Logs\n\n" , (err) => {err} )

const myServer = http.createServer( ( req , res ) => {
   
    const data = `Request received on port ${req.url}\t at ${Date.now()}\n`
    fs.appendFile("./Logs.txt/" , data , ( data , err ) => {
        res.end("Request Received")
    })
    switch( req.url ){
        case "/": res.end("Home page Guyzz")
            break
        case "/about" : res.end("About page guyzz")
            break
        default : res.end("No idea Guyzz😅")
    }
} )

myServer.listen(8000 , () => ("Server Started"))