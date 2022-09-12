const mongoose = require("mongoose");
const config = require("./config");
const dbUrl = config.db.url;
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongodb connection successfully");
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
