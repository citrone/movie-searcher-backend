const express = require("express");
const router = express.Router();

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const server = app.listen(process.env.port || 8080, () => {
    console.log("Express is running on port 8080");
});

module.exports = server;
