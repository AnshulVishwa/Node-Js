const express = require("express")
const HomeRouter = express.Router()
const Student = require("../Models/model")

HomeRouter.route("/")
.get( async ( req , res ) => {
    const result = await Student.find( {} )
    if( result.length == 0 )
    res.status(400).json( { "Students" : "Not Found" } )
    else
    res.status(200).json({ "Students" : result })
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

HomeRouter.route("/:roll")
.get( async ( req , res ) => {
    const roll = Number(req.params.roll)

    if( isNaN(roll) ) res.status(400).json({"msg":"Invalid User"})
    else{
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
    }

} )
.put( async ( req , res ) => {
    const { name , roll , program , discipline } = req.body;
    if( !roll || !name || !program || !discipline ) res.status(400).json({"msg" : "All fields are required"})
    else{
        const result = await Student.updateOne( { roll } , { $set : { name , program , discipline } } )
        if( result.matchedCount == 0 )
            res.status(400).json( { "msg" : "No student found" } )
        else
            res.status(200).json({"status" : "updated"})
    }
} )
.patch( async ( req , res ) => {
    const { name , roll , program , discipline } = req.body;
    if( !roll ) res.status(400).json({"msg" : "Roll number is required of Student to update"})
    else{
        const result = await Student.updateOne( { roll } , { $set : { name , program , discipline } } )
        if( result.matchedCount == 0 )
            res.status(400).json( { "msg" : "No student found" } )
        else
            res.status(200).json({"status" : "updated"})
    }
} )
.delete( async( req , res ) => {
    const roll = req.body.roll
    if( !roll ) res.status(400).json({"msg" : "Roll number is required of Student to update"})
    else {
        const result = await Student.deleteOne({roll})
        if (result.matchedCount == 0)
            res.status(400).json({ "msg" : "No student found" })
        else 
            res.status(200).json({ "msg" : "Student Deleted" })
    }
} )

module.exports = HomeRouter