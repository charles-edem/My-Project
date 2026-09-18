require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/user", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            error: "Name and email are required"
        });
    }

    res.send(`Hello, ${name}!`);
});

app.get("/user/:id", (req, res) => {
    const { id } = req.params;

    res.send(`User ${id} profile`);
});

app.use((req, res) => {
    res.status(404).json({
        error: "Route not found"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
