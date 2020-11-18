const db = require("../data/connection");
const missingHandler = require("./missingHandler");
function getAnswersHandler(request, response) {
  db.query("SELECT * FROM answers")
    .then((result) => {
      response.writeHead(200, { "content-type": "application/json" });
      response.end(JSON.stringify(result.rows));
    })
    .catch(() => {
      missingHandler(request, response);
    });
}

module.exports = getAnswersHandler;
