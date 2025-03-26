const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));

const db = new sqlite3.Database("scores.db", (err) => {
    if (err) console.error("Database connection error:", err);
    console.log("Connected to database");
});

db.run("CREATE TABLE IF NOT EXISTS scores (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, score INTEGER, timestamp TEXT)", (err) => {
    if (err) console.error("Table creation error:", err);
    else console.log("Scores table ready");
});

app.post("/save-score", (req, res) => {
    const { username, score } = req.body;
    const timestamp = new Date().toISOString();
    console.log("Received POST /save-score:", { username, score, timestamp });
    db.run("INSERT INTO scores (username, score, timestamp) VALUES (?, ?, ?)", [username || "Anonymous", score, timestamp], function(err) {
        if (err) {
            console.error("Insert error:", err);
            return res.status(500).send("Error saving score");
        }
        console.log("Score saved, ID:", this.lastID);
        res.send("Score saved");
    });
});

app.get("/leaderboard", (req, res) => {
    console.log("Received GET /leaderboard");
    db.all("SELECT username, score, timestamp FROM scores ORDER BY score DESC LIMIT 10", (err, rows) => {
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

// Graceful shutdown
process.on("SIGINT", () => {
    console.log("Shutting down server...");
    db.close((err) => {
        if (err) console.error("Error closing database:", err);
        server.close(() => {
            console.log("Server stopped.");
            process.exit(0);
        });
    });
});