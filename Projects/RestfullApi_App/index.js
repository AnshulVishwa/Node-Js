// Requiring express, productDetails
const express = require("express")
let product = require("./DataBase/ProductDetails.json")
// Making app and assigining port value
const app = express()
const port = 6000

// Middleware
app.use( express.urlencoded( { extended : false } ) )

// Home Route
app.route("/")
.get( ( req , res ) => {
    return res.json(product)
} )
.post( ( req , res ) => {
    const body = req.body
    const new_product = product.push( {
        "id" : product.length+1,
        ...body
    } )

    return res.json(new_product)
} )

// Route for Specific Document
app.route("/products/:id")
.get( ( req , res ) => {
    let prod = product.filter( ( pr ) => pr.id == req.params.id )
    if( prod.length == 0 ) return res.json( { "Status" : "Not Found" } )
    return res.json( prod )
} )
.put( ( req , res ) => {
    const id = req.params.id-1
    product[id] = {
        "id" : id+1,
        ...req.body
    }  
    return res.json(product[id])
} )
.patch( ( req , res ) => {
    const id = req.params.id
    const prod = product[id-1]
    product[id-1] = {
        id : prod.id,
        name : req.body.name || prod.name,
        price : req.body.price || prod.price,
        expiryDate : req.body.expiryDate || prod.expiryDate
    }

    if( prod == product[id-1] ) return res.json( { "Status" : "No changes" } )

    return res.json(product[id-1])
} )

// Establishing Server
app.listen( port , () => console.log("Server Started at Port " + port) )