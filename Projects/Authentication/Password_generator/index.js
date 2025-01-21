const express = require( "express" );
const path = require( "path" );
const cookieParser = require( "cookie-parser" );

const app = express()
const PORT = 5000

app.set( "view engine" , "ejs" )
app.set( "views" , path.resolve("./Views") )

app.use(cookieParser())
app.use(express.urlencoded( { extended : false } ))

app.get("/" , ( req , res ) => {
    res.render("home")
})

app.listen( PORT , () => console.log(`Server started at PORT: ${PORT}`) )