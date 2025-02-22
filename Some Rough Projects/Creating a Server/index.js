const http = require("http")
const url = require("url")
const fs = require("fs")

const server = http.createServer( ( req , res ) => {
    if( req.url === '/favicon.ico' ) return res.end()
    const myurl = url.parse(req.url , true)
    console.log(req)
    fs.appendFile( "./Response" , `Respnse came from ${myurl.pathname}\n` , ()=>{
        switch( myurl.pathname ){
            case '/' : res.end( "This is Home Page" );break;
            case '/about' : res.end( `Helloo ${myurl.query.name} ${myurl.query.surname}` );break;
            default : res.end("404 ERROR")        
        }
    } )
} )

server.listen( "9000" , () => "Server Started")