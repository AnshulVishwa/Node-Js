const jwt = require("jsonwebtoken")
const secretKey = "Anshul$^001!"

function SetUser( user ){
    return jwt.sign( {
        _id : user._id,
        username : user.username,
        email  :user.email
    } , secretKey )
}

function GetUser( token ){
    if( !token ) return null
    return jwt.verify( token , secretKey )
}

module.exports = {
    SetUser,
    GetUser
}