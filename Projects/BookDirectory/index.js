const express = require("express")
const { MongoDB_Connection } = require("./connection");
const HomeRoute = require("./Routes/home");
const app = express()

app.use(express.json())

const PORT = 3000
MongoDB_Connection();

app.use("/" , HomeRoute)

app.listen(PORT , () => console.log("Server Started at Port : " + PORT))