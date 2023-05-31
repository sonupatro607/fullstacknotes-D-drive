const path = require("path");

const errorHandler = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "view", "error.html"));
};

module.exports = errorHandler;
