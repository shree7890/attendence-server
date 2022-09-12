const config = require("./config/config");
const http = require("http");
const app = require("./app/app");
const server = http.createServer(app);
const port = config.app.port;
// listen server
server.listen(port, () => {
  console.log("server listen successfullly", port);
});
