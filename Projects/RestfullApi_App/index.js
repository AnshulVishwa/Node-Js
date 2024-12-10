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
    console.log(req.body)
    return res.json(new_product)
} )

// Route for Specific Document
app.route("/products/:id")
.get( ( req , res ) => {
    return res.json( product.filter( ( pr ) => pr.id == req.params.id ) )
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
    
} )

// Establishing Server
app.listen( port , () => console.log("Server Started at Port " + port) )