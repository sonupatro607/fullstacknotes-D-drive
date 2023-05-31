const express = require("express");
const path = require("path");
const routers = express.Router();

routers.use("/user", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "user.html"));
});

module.exports = routers;
