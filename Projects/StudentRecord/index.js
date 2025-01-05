const express = require("express")
const mongoose = require("mongoose")
const app = express()
const port = 9000

// MiddleWare
app.use( express.urlencoded( { extended : true } ) )

// Connection
mongoose.connect("mongodb://127.0.0.1:27017/StudentDB")
.then( () => console.log("MongoDB Connected") )
.catch( (err) => console.log(err) )

// Schema for database
const Scheme = mongoose.Schema( {
    "name" : {
        type : String,
        required : true
    },
    "roll" : {
        type : Number,
        required : true,
        unique : true
    },
    "program" : {
        type : String,
        required : true
    },
    "discipline" : {
        type : String,
        required : true
    }
} )

// Model
const Student = mongoose.model( "StudentDetail" , Scheme )

// ===============Routes===============
app.route("/")
.get( async ( req , res ) => {
    const result = await Student.find( {} )
    await ( result.length == 0 )
    ? res.status(400).json( { "Students" : "Not Found" } )
    : res.status(200).json({ "Students" : result })
} )
.post( async ( req , res ) => {
    const body = req.body
    if( !body ||
        !body.name ||
        !body.roll ||
        !body.program ||
        !body.discipline
    ) 
    res.status(400).json( { "status" : "All Fields are not provided" } ) 
    else {
        await Student.create({
            name : body.name,
            roll : body.roll,
            program : body.program,
            discipline : body.discipline
        })
        res.status(201).send( await Student.find({}) )
    }
} )
.delete( async ( req , res ) => {
    res.status(200).send( await Student.deleteMany({}) )
} )

app.route("/:roll")
.get( async ( req , res ) => {
    const roll = req.params.roll
    const result = await Student.find({ roll })
    console.log(result , "\t" , typeof(result))
    if( result.length == 0 ){
        res.status(400).json( {"Status" : "User not Found"} )
    }
    else{
        res.status(200).json( [
            {
                "Status" : "User Found"
            },
            {
                "Student" : result
            }
        ] )
    }
} )
// ====================================

// Server Route
app.listen( port , () => console.log(`Server Started at port ${port}`)  )