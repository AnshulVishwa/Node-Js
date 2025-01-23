const { GetUser } = require("../Service/auth");

async function RestrictToLoginUserOnly( req , res , next ) {
    const cookie = req.cookies?.uid
    const user = GetUser(cookie)
    if( !cookie || !user ){
        return res.render( "login" , {
            error : "You have to login to use this feature"
        } )
    }
    req.user = user
    return next()
}

module.exports = {
    RestrictToLoginUserOnly
}