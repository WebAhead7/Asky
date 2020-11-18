const fs = require("fs");
const path = require("path");
const missingHandler = require("./missingHandler");

//this function reads the home.html file and show it to the user
function homeHandler(request, response) {
  fs.readFile(
    path.join(__dirname, "..", "..", "public", "home.html"),
    "utf-8",
    (error, data) => {
      if (error) {
        missingHandler();
      }
      response.writeHead(200, { "content-type": "text/html" });
      response.end(data);
    }
  );
}

module.exports = homeHandler;
