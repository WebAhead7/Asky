const db = require("../data/connection");

function addAnswer(data) {
  let values = [data.username, data.answer, data.question_id];
  return db.query(
    "INSERT INTO answers(usernamea, answer_content,question_id) VALUES($1, $2, $3)",
    values
  );
}

module.exports = { addAnswer };
