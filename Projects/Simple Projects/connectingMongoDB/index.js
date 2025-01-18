const express  = require("express")
const { default: mongoose } = require("mongoose")
const app = express()
const port = 9000

// MiddleWare
app.use(express.urlencoded( {extended : true} ))

//Connecting Mongo DB
mongoose.connect("mongodb://127.0.0.1:27017/StudentData")
.then( () => {console.log("MongoDB connected")} )
.catch( ( err ) => { console.log(`One Errror Occured ${err}`) } )

// Creating a Schema 
const studentSchema = {
    "firstname" : {
        type : String,
        required : true
    },
    "lastname" : {
        type : String,
        required : false
    },
    "roll" : {
        type : Number,
        required : true,
        unique : true
    },
    "Program" : {
        type : String,
        required : true
    }
}

// Creating a Model
const Student = mongoose.model("studentCollection" , studentSchema)

// Student.create
// Student.find

app.listen( port , () => console.log(`Server Started at port ${port}`  ))