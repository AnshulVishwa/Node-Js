const MapSessionID = new Map()

function SetUser( id , user ){
    return MapSessionID.set(id , user)
}

function GetUser( id ){
    return MapSessionID.get( id )
}

function IsLoggedIn( id ){
    return MapSessionID.has(id)
}

module.exports = {
    SetUser,
    GetUser,
    IsLoggedIn
}