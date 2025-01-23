const { USER } = require("../Model/user")
const { v4 : uuidv4 } = require("uuid")
const { SetUser } = require("../Service/auth")

async function HandleSignupUser(req, res) {
    const { username, email, password } = req.body;
  
    try {
      const user = await USER.create({ username, email, password });

      const token = SetUser(user); 
  
      res.cookie("uid", token); 
      res.redirect("/"); 
  
    } catch (err) {
      console.log(err);
      res.render("signup", { error: "User already exists" });
    }
  }

async function HandleLoginUser( req , res ) {
    const { email , password } = req.body
    if( !email || !password ) {
        return res.render("login" , {
            error : "All Fields are required"
        })
    }
    const user = await USER.findOne( { 
        "email" : email,
        "password" : password
    } )
    if( !user || user == null ) return res.render( "login" , {
        error  : "Invalid email or password"
    } )
    const token = SetUser(user); 
    res.cookie("uid", token);  
    res.redirect("/")
}

module.exports = {
    HandleSignupUser,
    HandleLoginUser
}