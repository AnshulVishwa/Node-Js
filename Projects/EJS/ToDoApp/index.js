const express = require("express");
const { connectToMongoDB } = require("./connect");
const path = require("path")
const HomeRoute = require("./Routes/home");
const TaskRoute = require("./Routes/task");
const StaticRoute = require("./Routes/staticRouter");

const app = express();
const PORT = 9000;

app.set("view engine" , "EJS")
app.set( "views" , path.resolve("./views") )

app.use(express.json());
app.use(express.urlencoded({extended : false}))

app.use("/task", TaskRoute);
app.use("/home", HomeRoute);
app.use( "/" , StaticRoute )

connectToMongoDB("mongodb://127.0.0.1:27017/ToDoApp")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error(`Error Occurred: ${err}`));

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
