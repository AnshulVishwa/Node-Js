const express = require("express");
const { connectToMongoDB } = require("./connect");
const HomeRoute = require("./Routes/home");
const TaskRoute = require("./Routes/task");

const app = express();
const PORT = 9000;

app.use(express.json());

app.use("/task", TaskRoute);
app.use("/", HomeRoute);

connectToMongoDB("mongodb://127.0.0.1:27017/ToDoApp")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error(`Error Occurred: ${err}`));

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
