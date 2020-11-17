const homeHandler = require("./handlers/homeHandler");
const publicHandler = require("./handlers/publicHandler");
const missingHandler = require("./handlers/missingHandler");

function router(request, response) {
  const url = request.url;
  if (url === "/") {
    homeHandler(request, response);
  } else if (url.includes("public")) {
    publicHandler(request, response);
  } else {
    missingHandler(request, response);
  }
}

module.exports = router;
