const express = require("express")
const fs = require("fs")

function url_middleware(){
    return express.urlencoded( { extended : true } )
}

function ReqResLog(){
    return ( req , res , next ) => {
        if( req.path == "/favicon.ico" ) return next();
        const data = `${req.method} Request Received on ${req.path} at ${Date.now()}\n`
        fs.appendFile( "./Logs/logs.txt" , data , ( err ) => {
            if (err) {
                console.error("Error writing to log file:", err);
                return res.status(500).send("Internal Server Error");
            }
            next();
        } )
    }
}

module.exports = {
    url_middleware,
    ReqResLog
}