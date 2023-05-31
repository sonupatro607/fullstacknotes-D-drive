const express = require("express");

const app = express();

const defaultRouter = require("./router/default");
const errorRouter = require("./router/error");

app.post(errorRouter);
app.post(defaultRouter);

app.listen(8000);
