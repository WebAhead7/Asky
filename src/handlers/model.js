// Get Data from the DataBase

const db = require("../data/connection");

function addQuestions(questionArr) {
  return db.query(
    "INSERT INTO questions(usernameQ, email, question) VALUES ($1,$2,$3)",
    questionArr
  );
}

function addAnswers() {}

function getQuestions() {}

function getAnswers() {}

module.exports = { addQuestions, addAnswers, getQuestions, getAnswers };
