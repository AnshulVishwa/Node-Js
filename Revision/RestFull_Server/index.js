const express = require("express")
const app = express()
const port = 8000
const fs = require("fs")
let users = require("./users.json")

// Middle Ware for url encoded
app.use( express.urlencoded({extended:false}) )

app.route("/api/users")
.get(( req , res ) => res.json(users) )
.post(( req , res ) => {
    const body = req.body;
    const id = users.length+1
    users.push({ "id" : id , ...body})
    fs.appendFile( "./logs.txt" , `New User Created id : ${id}\n` , (err) => console.log(err) )
    res.send("User Created Successfully")
})

app.route("/api/users/:id")
.get(( req , res ) => {
    const id = Number(req.params.id);
    fs.appendFile( "./logs.txt" , `Spectated user ${id}` , (err) => console.log(err) )
    const User = users.find( ( user ) => user.id == id )
    res.json(User)
})
.put(( req , res ) => {
    const id = Number(req.params.id)
    fs.appendFile( "./logs.txt" ,`Changed user data of id : ${id}\n` , (err)=>console.log(err))
    users[id-1] = {
        id : `${id}`,
        username : `${req.body.username}`,
        email : `${req.body.email}`,
        gender : `${req.body.gender}`,
        ip_address : `${req.body.ip_address}`
    }
    res.json(users[id-1])
})
.patch( ( req , res ) => {
    const id = Number(req.params.id)
    const existingUser = users[id-1]
    const updatedUser = {
        id: `${id}`,
        username: req.body.username || existingUser.username,
        email: req.body.email || existingUser.email,
        gender: req.body.gender || existingUser.gender,
        ip_address: req.body.ip_address || existingUser.ip_address,
    };
    users[id-1] = updatedUser
    res.json(updatedUser)
} )
.delete( ( req , res ) => {
    users = users.filter( (user) => user.id != req.params.id )
    res.json({ "status" : "Completed" })
} )

app.get("/users", (req, res) => {
    res.send(`
        <div>
            ${
                users.map( ( each ) => {
                    return `<ul>
                        <li>${each.username}</li>
                        <li>${each.email}</li>
                        <li>${each.gender}</li>
                        <li>${each.id}</li>
                        <li>${each.ip_address}</li>
                    </ul>`
                }).join("")
             }    
        </div>
    `);
});

app.post("/users" , ( req , res ) => {
    users.push(req.body)
    res.send("Post Request Accepted")
})

app.listen( port , () => console.log(`Server Started at port ${port}`) )