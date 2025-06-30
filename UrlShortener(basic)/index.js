const express = require("express")
const app = express()
const { nanoid } = require("nanoid")
const PORT = 5000

app.use( express.urlencoded({extended : false}) )

let map = new Map()

app.get( "/" , ( req , res ) => {
    res.send(`
        <html>
            <head></head>
            <body>
                <form method="POST" action="/url">
                    <input name="url">
                    <button type="submit">Submit</button>
                </form>
            </body>
        </html>
        `)
} )

app.get( "/:id" , ( req , res ) => {
    const id = req.params.id
    if( map.has(id) ){
        res.redirect(map.get(id))
    }
    res.send("Invalid hai bhaiya ID")
} )

app.post( "/url" , ( req , res ) => {
    const id = nanoid(5)
    map.set( id , req.body.url )
    console.log(map)
    res.send(`Your Shorten URL is : \n<a href="http://localhost:${PORT}/${id}">http://localhost:${PORT}/${id}</a>`)
} )

app.listen( PORT , () => console.log(`Server Started at PORT : ${PORT}`) )
