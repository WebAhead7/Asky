const db = require("../data/connection");
const missingHandler = require("./missingHandler");
function getDataHandler(request, response) {
  return db
    .query(
      "SELECT questions.usernameq,questions.question, answers.usernamea, answers.answer_content, answers.question_id FROM questions LEFT JOIN answers ON questions.id=answers.question_id ORDER BY answers.question_id;"
    )
    .then((result) => {
      response.writeHead(200, { "content-type": "application/json" });
      response.end(JSON.stringify(result.rows));
    })
    .catch(() => {
      missingHandler(request, response);
    });
}

module.exports = getDataHandler;
