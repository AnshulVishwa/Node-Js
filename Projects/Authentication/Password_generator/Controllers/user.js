const { USER } = require("../Model/user")
const { v4 : uuidv4 } = require("uuid")
const { SetUser } = require("../Service/auth")
const { GeneratePassword } = require("../Service/pwd")

async function HandleSignupUser( req , res ) {
    const { username , email , password } = req.body
    const user = await USER.create({
        username,
        email,
        password
    })
    .then( ()=>{
        const sessionID = uuidv4()
        SetUser( sessionID , user )
        GeneratePassword( 5 , true , true , true )
        res.cookie("uid" , sessionID)
        res.redirect("/")
    })
    .catch((err) => {
        res.render("signup" , {
            error : "User already exist"
        })
    })
}

async function HandleLoginUser( req , res ) {
    const { email , password } = req.body
    if( !email || !password ) {
        return res.render("login" , {
            error : "All Fields are required"
        })
    }
    const user = await USER.findOne( { 
        "email" : email,
        "password" : password
    } )
    if( !user || user == null ) res.render( "login" , {
        error  : "Invalid email or password"
    } )
    const sessionID = uuidv4()
    SetUser( sessionID , user )
    res.cookie("uid" , sessionID)
    res.redirect("/")
}

module.exports = {
    HandleSignupUser,
    HandleLoginUser
}