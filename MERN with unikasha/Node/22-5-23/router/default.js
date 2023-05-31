const express = require("express");

const router = express.Router();

const loginHandler = require("../controller/login");

router.use("/", loginHandler);

module.export = router;
