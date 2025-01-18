const shortid = require("shortid");
const { TODO } = require("../Model/model");

async function handleGetReqRes( req , res ) {
    const result = await TODO.find({})
    if( !result ) return res.status(400).json({"msg" : "No users available"})
    else return res.status(200).json(result)
}

async function handlePostReqRes( req , res ) {
    const body = req.body
    const validate = await TODO.findOne({username : body.username})
    if( validate ) return res.status(400).json({"msg" : "username not available"}) 
    await TODO.create({
        username : body.username,
        id : shortid.generate(),
        Tasks : null,
        Completed_tasks : null,
        RecentlyDeletedTask : null
    })
    res.status(200).json({"msg" : "user created"})
}

async function handleGetReqFromID( req , res ){
    const ID = req.params.shortid
    const result = await TODO.findOne({id : ID})
    if( !result ) return res.status(400).json({"error" : "Invalid user id"})
    else return res.status(200).json(result)
}

async function handlePatchReqRes( req , res ) {
    const prev = req.body.username
    const newname = req.body.newname
    if( !prev ) return res.status(200).json({"error" : "No username given"})
    if( !newname ) return res.status(200).json({"error" : "No new username given"})
    const result = await TODO.findOneAndUpdate({username : prev} , {$set:{username : newname}})
    if( result.matchedCount == 0 || !result ) return res.status(400).json({"msg":"no user found"})
    return res.status(200).json({"msg" : "Profile Updated"})
}

module.exports = {
    handlePostReqRes,
    handleGetReqRes,
    handleGetReqFromID,
    handlePatchReqRes
}