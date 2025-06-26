// const http = require("http")
// const server = http.createServer( (req , res) => {
//     if( req.method == "GET" ){
//         if(req.url == "/Anshul"){
//             res.end("Anshul got")
//         }
//         if(req.url == "/Vidhi"){
//             res.end("Vidhi got")
//         }
//     }
// } )
// server.listen( 5000 )

const express = require("express")
const app = express()

app.get( "/Anshul" , (req , res) => {
    res.send("")
} )
app.get( "/Vidhi" , (req , res) => {
    res.send("Vidhi got")
} )

app.listen(5000)
