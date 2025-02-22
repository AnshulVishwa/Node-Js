const { PWD } = require("../Model/model");
const {GeneratePassword} = require("../Service/pwd")

async function GenerateAllPassword_of_ThisUser( Model , id ){
    return await Model.find( {
        "CreatedBy" : id
    } )
}

const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "anshulkb123456@gmail.com",
        pass: "AnshulMain220505"
    }
});

let mailOptions = {
    from: "anshulkb123456@gmail.com",
    to: "vidhiagrawal612@gmail.com",
    subject: "Hello from Node.js!",
    text: "This email was sent using Nodemailer."
};


async function HandleGeneratePassword( req , res ) {
    let { length , alphabet , numbers , special_char  } = req.body
    if( !length ) {return res.render("home" , {"error" : "Length is needed"}) }

    const generatePassword = GeneratePassword(length);
    const password = generatePassword(alphabet)(numbers)(special_char)(); 

    alphabet = ( !alphabet ) ? false : true 
    numbers = ( !numbers ) ? false : true
    special_char = ( !special_char ) ? false : true

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });

    await PWD.create({
        "password" : password,
        "length" : parseInt(length),
        "alphabets" : alphabet,
        "numbers" : numbers,
        "SpecialCharacters" : special_char,
        "CreatedBy" : req.user._id
    })

    const allPasswords = await GenerateAllPassword_of_ThisUser( PWD , req.user._id )

    console.log(allPasswords)

    res.render( "home" , {
        pass : password,
        All : allPasswords
    } )
}

module.exports = {
    HandleGeneratePassword
}