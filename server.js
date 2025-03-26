const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

const db = mysql.createConnection({
    host: process.env.DB_HOST || "sql301.epizy.com", // Replace with your actual host
    user: process.env.DB_USER || "ifo_38606937_quiz_user",
    password: process.env.DB_PASSWORD || "ZEdU4fUIfjsh",
    database: process.env.DB_NAME || "ifo_38606937_quiz"
});

db.connect((err) => {
    if (err) console.error("Database connection error:", err);
    console.log("Connected to MySQL database");
});

db.query("CREATE TABLE IF NOT EXISTS scores (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), score INT, timestamp VARCHAR(255))", (err) => {
    if (err) console.error("Table creation error:", err);
    else console.log("Scores table ready");
});

app.post("/save-score", (req, res) => {
    const { username, score } = req.body;
    const timestamp = new Date().toISOString();
    console.log("Received POST /save-score:", { username, score, timestamp });
    db.query("INSERT INTO scores (username, score, timestamp) VALUES (?, ?, ?)", [username || "Anonymous", score, timestamp], (err, result) => {
        if (err) {
            console.error("Insert error:", err);
            return res.status(500).send("Error saving score");
        }
        console.log("Score saved, ID:", result.insertId);
        res.send("Score saved");
    });
});

app.get("/leaderboard", (req, res) => {
    console.log("Received GET /leaderboard");
    db.query("SELECT username, score, timestamp FROM scores ORDER BY score DESC LIMIT 10", (err, rows) => {
        if (err) {
            console.error("Leaderboard fetch error:", err);
            return res.status(500).send("Error fetching leaderboard");
        }
        console.log("Leaderboard data:", rows);
        res.json(rows);
    });
});

const server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

process.on("SIGINT", () => {
    console.log("Shutting down server...");
    db.end((err) => {
        if (err) console.error("Error closing database:", err);
        server.close(() => {
            console.log("Server stopped.");
            process.exit(0);
        });
    });
});