const express = require("express");
require("../config/db");
const { notFounHandler, errorHandler } = require("./error");
const middlware = require("./globalmiddleware");
const router = require("../routes/index");
const app = express();
// middleware
app.use(middlware);
// routes
app.use(router);
// error handler
app.use(notFounHandler);
app.use(errorHandler);

module.exports = app;
