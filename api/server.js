const path = require("path");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const restricted = require("../middleware/restricted");
const loginRouter = require("../routes/login");
const storyRouter = require("../routes/stories");
const adminRouter = require("../routes/admin");

const server = express();

//Middleware
const middleware = [express.json(), helmet(), cors()];
server.use(middleware);

//Routes Middleware
server.use("/api/auth/login", loginRouter);
server.use("/api/stories", storyRouter);
server.use("/api/admin", restricted("admin"), adminRouter);

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

module.exports = server;
