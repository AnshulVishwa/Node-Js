const { USER } = require("../Model/user")

function handleGetReqRes( req , res ) {
    res.render("home")
}

async function handlePostReqRes( req , res ) {
    if( !req.body ) res.json( {err : "Body is required"} )

    const { username , password } = req.body
    
    if( !username || !password ) res.json( {err : "Something is missing"} )

    const result = await USER.create( {
        username,
        password
    } ) 
    // .then( () => res.send( "User Created" ) )
    // .catch( (err) => res.json( {err} ) )
    res.send( !result ? "internal server issue" : "user created" )
}

module.exports = {
    handleGetReqRes,
    handlePostReqRes
}
