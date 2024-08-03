const express = require("express")
const fs = require("fs")
const app = express()
const users = require("./data_set.json")
const port = 8000

app.use( express.urlencoded( { extended : false } ) )
app.route( "/users")
.get(( req , res ) => {
    const html = `All Cars :- \n<ul>
        ${users.map( ( v , i ) => `<li>${v.car_name}</li>` ).join("")}
    </ul>`
    return res.send(html)
} )
.post(( req , res ) => {
    const body = req.body
    const id = users.length + 1
    users.push( { id , ...body} )
    fs.writeFile( "./data_set.json" , JSON.stringify(users) , ( err , data ) => {
        if( err ) {
            return res.send( "Error While Writing File" )
        }
        else{
            return res.send("Got the data")
        }
    } )
} )
app.get( "/api/users" , ( req , res ) => {
    return res.json(users)
} )

app.get( "/users/:id" , ( req , res ) => {
    const id = req.params.id
    const thisUser = users.find( ( i ) => i.id == id )
    const html = `<ul>
        <li>car name = ${ thisUser.car_name }</li>
        <li>email = ${ thisUser.email }</li>
        <li>city = ${ thisUser.city }</li>
    </ul>`
    return res.send(html)
} )

app.listen( port , ()=>console.log(`Server Strated at port : ${port}`) )