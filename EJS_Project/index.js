const express = require("express")
const connect_MongoDB = require("./connect")
const userRouter = require("./Routes/user")
const session = require("express-session")
const app = express()
const path = require("path")
const PORT = 5000

// Middlewares
app.use( express.urlencoded({extended : false}) )
app.use( session( {
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
} ) )

// Setting EJS
app.set( "view engine" , "ejs" )
app.set( "views" , path.resolve("./Views") )

// Connecting MongoDB
connect_MongoDB()

// Connecting Routes
app.use( "/" , userRouter )

app.listen(PORT , () => console.log(`Server Started at PORT : ${PORT}`))
