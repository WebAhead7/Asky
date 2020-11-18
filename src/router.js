const homeHandler = require("./handlers/homeHandler");
const publicHandler = require("./handlers/publicHandler");
const missingHandler = require("./handlers/missingHandler");
const getAnswersHandler = require("./handlers/getAnswersHandler");
const getDataHandler = require("./handlers/getDataHandler");
const addAnswer = require("./handlers/addAnswersHandler");
function router(request, response) {
  const url = request.url;
  if (url === "/") {
    homeHandler(request, response);
  } else if (url.includes("public")) {
    publicHandler(request, response);
  } else if (url === "/getdata") {
    getDataHandler(request, response);
  } else if (url.startsWith("/getanswers")) {
    getAnswersHandler(request, response);
  } else if (url.startsWith("/addanswer")) {
    addAnswer(request, response);
  } else {
    missingHandler(request, response);
  }
}

module.exports = router;
