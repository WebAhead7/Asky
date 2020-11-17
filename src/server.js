const http = require("http");
const router = require("./router");
let Port = process.env.Port || 3000;

const server = http.createServer(router);

server.listen(3000, () => console.log(`Listening at http://localhost:${Port}`));
