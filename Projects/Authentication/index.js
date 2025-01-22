const express = require("express")
const app = express()
const PORT = 9000
const { connectToMongoDB } = require("./connect.js")
const router  = require("./Routes/url")
const path = require("path")
const StaticRouter = require("./Routes/staticRouter.js")
const UserRouter = require("./Routes/user.js")
const { restrictToLoggedInUserOnly } = require("./Middleware/auth.js")
const cookieParser = require("cookie-parser")

connectToMongoDB("mongodb://127.0.0.1:27017/short-id")

app.use( express.json() )
app.use( express.urlencoded({ extended : false }) )
app.use(cookieParser())

app.set("view engine" , "ejs")
app.set( "views" , path.resolve("./views") )

app.use( "/url" , restrictToLoggedInUserOnly , router )
app.use( "/" , StaticRouter )
app.use("/user" , UserRouter)

app.listen( PORT , () => console.log(`Server Started at PORT : ${PORT}`) )