const express = require("express")
const fs = require("fs")

function url_middleware(){
    return express.urlencoded( { extended : true } )
}

function ReqResLog( filename ){
    return ( req , res ) => {
        const data = `${req.method} Request Received on ${req.path} at ${Date.now()}\n`
        fs.appendFile( filename , data , ( err ) => {
            console.error(err)
            res.status(400).send("Error Occured")
        } )
    }
}

module.exports = {
    url_middleware,
    ReqResLog
}