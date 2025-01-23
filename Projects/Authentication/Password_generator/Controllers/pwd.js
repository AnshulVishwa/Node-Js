const { PWD } = require("../Model/model");
const {GeneratePassword} = require("../Service/pwd")

async function HandleGeneratePassword( req , res ) {
    let { length , alphabet , numbers , special_char  } = req.body
    if( !length ) {return res.render("home" , {"error" : "Length is needed"}) }
    const generatePassword = GeneratePassword(length);
    const password = generatePassword(alphabet)(numbers)(special_char)();
    if( !alphabet ) alphabet = false
    if( !numbers ) numbers = false
    if( !special_char ) special_char = false
    console.log(password)
    await PWD.create({
        password,
        length,
        alphabet,
        numbers,
        special_char
    })
    res.render( "home" , {
        pass : password
    } )
}

module.exports = {
    HandleGeneratePassword
}