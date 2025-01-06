const express = require("express")
const app = express()
const port = 9000
const HomeRouter = require("./Routes/home")
const StudentRouter = require("./Routes/students")
const { ReqResLog , url_middleware } = require("./Middlewares/script")
const { connectMongoDB } = require("./Database/connect")

//Middlewares
app.use(ReqResLog("./Logs/logs.txt"))
app.use(url_middleware())

// Connection
connectMongoDB("mongodb://127.0.0.1:27017/StudentDB")

// Routers
app.use("/" , HomeRouter)
app.use("/list" , StudentRouter)

// Server Route
app.listen( port , () => console.log(`Server Started at port ${port}`)  )