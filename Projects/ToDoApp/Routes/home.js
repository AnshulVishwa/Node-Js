const express = require("express")
const { handlePostReqRes, handleGetReqRes , handlePatchReqRes, handleGetReqFromID } = require("../Controller/homeFunction")

const HomeRoute = express.Router()

HomeRoute.get( "/" , handleGetReqRes )
HomeRoute.get( "/:shortid" , handleGetReqFromID )
HomeRoute.post( "/" , handlePostReqRes  )
HomeRoute.patch( "/" , handlePatchReqRes )

module.exports = HomeRoute