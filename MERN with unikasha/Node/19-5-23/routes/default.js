const express = require("express");
const path = require("path");
const routers = express.Router();

routers.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "default.html"));
});

module.exports = routers;
