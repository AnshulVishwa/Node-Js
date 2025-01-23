function IncludeAlphabet( str ) {
    return str.concat("abcdefghijklmnopqrstuvwxyz")
}

function IncludeNumbers( str ){
    return str.concat("/\d/")
}

async function GeneratePassword( len , alphabet , numbers , special_char ){
    let string = ""
    if( alphabet ) string = IncludeAlphabet( string )
    if( numbers ) string = IncludeNumbers(string)
    console.log(string)
}

module.exports = {
    GeneratePassword
}