const path = require("path");

const loginHandler = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "view", "login.html"));
};

module.exports = loginHandler;
