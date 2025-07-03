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
    const updatedUsers = (req.session.users || []).concat(result);
    req.session.users = updatedUsers;

    res.render("home", {
        users: updatedUsers,
        success: "User added successfully",
    });
}

module.exports = {
    handleGetReqRes,
    handleCreateNewUser
}
