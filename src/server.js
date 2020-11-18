const http = require("http");
const router = require("./router");
require("dotenv").config();
let Port = process.env.PORT || 3000;

const server = http.createServer(router);

server.listen(3000, () => console.log(`Listening at http://localhost:${Port}`));
