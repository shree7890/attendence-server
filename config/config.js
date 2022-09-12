require("dotenv").config();
const dev = {
  app: {
    port: process.env.PORT || 5000,
  },
  db: {
    url: process.env.MONGODB_CONNECT_URI,
  },
};

module.exports = dev;
