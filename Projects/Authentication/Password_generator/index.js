const express = require( "express" );
const path = require( "path" );
const cookieParser = require( "cookie-parser" );
const { ConnectToMongoDB } = require("./connect");
const StaticRouter = require("./Routes/StaticRouter");
const UserRouter = require("./Routes/user");
const { RestrictToLoginUserOnly } = require("./Middlewares/auth");
const PwdRouter = require("./Routes/pwd");

const app = express()
const PORT = 5000

ConnectToMongoDB()

app.set( "view engine" , "ejs" )
app.set( "views" , path.resolve("./Views") )

app.use(cookieParser())
app.use(express.urlencoded( { extended : false } ))

app.use( "/user" , UserRouter )
// app.use( "/pwd" , RestrictToLoginUserOnly , PwdRouter )
app.use( "/"  , StaticRouter )

app.listen( PORT , () => console.log(`Server started at PORT: ${PORT}`) )