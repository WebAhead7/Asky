const homeHandler = require("./handlers/homeHandler");
const publicHandler = require("./handlers/publicHandler");
const missingHandler = require("./handlers/missingHandler");
const addQuestionHandler = require("./handlers/addQuestionHandler");
const questionpageHandler = require("./handlers/questionpageHandler");

function router(request, response) {
  const url = request.url;
  if (url === "/") {
    homeHandler(request, response);
  } else if (url.includes("questionpage")) {
    questionpageHandler(request, response);
  } else if (url.includes("public")) {
    publicHandler(request, response);
  } else if (url === "/question") {
    addQuestionHandler(request, response);
  } else {
    missingHandler(request, response);
  }
}

module.exports = router;
