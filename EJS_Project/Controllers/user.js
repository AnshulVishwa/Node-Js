const USER = require("../MongoDB/user")

async function handleGetReqRes( req , res ) {
    const users = await USER.find()
    req.session.users = users
    res.render("home" , {users})
}

async function handleCreateNewUser( req , res ) {
    if( !req.body ) res.render( "home" , {users : req.session.users, err : "Username is required"}  )
    const { username , dob , rollNumber } = req.body
    const result = await USER.create( {
        username,
        dob,
        rollNumber
    } )
    if( !result ) res.render( "home" , {users : req.session.users , err : "Some Internal Err Occured" } )
    res.render( "home" , { users : [...req.session.users , { username , dob , rollNumber }] } )
}

module.exports = {
    handleGetReqRes,
    handleCreateNewUser
}
