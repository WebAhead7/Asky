const model = require("./model");
const db = require("../data/connection");

function addQuestiontoDataBase(request, response) {
  let body = "";
  request.on("data", (chuck) => (body += chuck));

  request.on("end", () => {
    const searchParams = new URLSearchParams(body);
    const data = Object.fromEntries(searchParams);
    model.addQuestions([data["name"], data["email"], data["Question"]]);

    db.query("SELECT * FROM questions").then((result) =>
      console.log(result.rows)
    );
  });
}

module.exports = addQuestiontoDataBase;
