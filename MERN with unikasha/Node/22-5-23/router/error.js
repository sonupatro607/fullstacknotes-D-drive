const express = require("express");

const router = express.Router();

const errorHandler = require("../controller/error");

router.use("/error", errorHandler);

module.export = router;
