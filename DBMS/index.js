const mysql = require('mysql2');
const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set up EJS view engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Create MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'VidhiAnshul',
    database: 'DBMS'
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        process.exit(1); // Exit if connection fails
    }
    console.log('Connected to MySQL Database');
});

// Insert User Function (with safer parameterized queries)
const insertUser = (username) => {
    const query = `INSERT INTO user_details (
        id, name, enrollment_number, branch, year, sem, specialization
    ) VALUES (?, ?, ?, ?, ?, ?, ?)`;

    const values = [2, username, "23100BTCSFBI14630", "IT", 2, 3, "FSDB"];

    connection.query(query, values, (err, result) => {
        if (err) {
            console.error('Error inserting user:', err);
            return;
        }
        console.log('User added:', result.insertId);
    });
};

// Handle POST request to add user
app.post("/", (req, res) => {
    const username = req.body.username;
    if (!username) {
        return res.status(400).send("Username is required");
    }
    insertUser(username);
    res.send("User added successfully!");
});

// Handle GET request to show home page with users
app.get("/", (req, res) => {
    const query = "SELECT * FROM user_details";
    connection.query(query, (err, users) => {
        if (err) {
            console.error('Error fetching users:', err);
            return res.status(500).send("Error fetching users");
        }
        const names = []
        users.forEach( (each) => {
            names.push(each.name)
        } )
        res.render("home", { "names"  : names });
    });
});

// Start the server
app.listen(9000, () => console.log("Server Started at Port 9000"));
