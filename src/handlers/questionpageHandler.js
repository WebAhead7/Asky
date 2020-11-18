const fs = require("fs");
const path = require("path");

function questionpageHandler(request, response) {
  const filePath = path.join(__dirname, "..", "..", "public", "questions.html");
  console.log(filePath);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(404, { "content-type": "text/html" });
      response.end("<h1>Not found 00000000</h1>");
    } else {
      response.writeHead(200, { "content-type": "text/html" });
      response.end(file);
    }
  });
}
module.exports = questionpageHandler;
