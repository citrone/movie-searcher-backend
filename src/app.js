const express = require("express");
const router = express.Router();

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const server = app.listen(3000, () => {
    console.log("Express is running on port 3000");
});

module.exports = server;
