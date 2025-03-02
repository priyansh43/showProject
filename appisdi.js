const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3015;
app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, function () {
    console.log("Web server listening on port ", port);
});
