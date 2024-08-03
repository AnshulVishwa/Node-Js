const app = require("express")()

// const app = express()

app.get( "/" , ( req , res )=>{
    return res.send( "Hello Home" )
} )

app.get( '/about' , ( req , res ) => {
    return res.send(`Hello ${req.query.name || "user"}`)
} )

app.listen( 8000 , () => console.log("Server Started") )