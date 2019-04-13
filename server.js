const path = require("path");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const restricted = require("./middleware/restricted");

const server = express();

//Middleware
const middleware = [express.json(), helmet(), cors()];
server.use(middleware);

//Routes Middleware

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

module.exports = server;
