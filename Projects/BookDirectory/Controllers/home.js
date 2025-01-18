const { BOOK } = require("../Models/model");

async function HandleGetAllBooks( req , res ){
    const result = await BOOK.find({})
    if( !result || result.length == 0 ) res.status(400).send("No Books Found")
    else res.status(200).send(result)
}

async function HandlePostNewBook( req , res ){
    if( !req.body ) res.status(400).json({"error" : "No field is given"})
    const { title , category , author , pages } = req.body
    if( !title || !category || !author || !pages ) res.status(400).json({"error" : "All Fields are not provided"})
    const result = await BOOK.create({
        "title" : title,
        "category" : category,
        "author" : author,
        "pages" : pages
    })
    if( !result ) res.status(400).send("Some error occured")
    else res.status(200).json({result})
}

module.exports = {
    HandleGetAllBooks,
    HandlePostNewBook
}