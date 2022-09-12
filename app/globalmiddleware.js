const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const middlware = [
  cors(),
  logger("dev"),
  express.json(),
  express.urlencoded({ extended: true }),
];

module.exports = middlware;
