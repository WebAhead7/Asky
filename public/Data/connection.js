const pg = require("pg");
require("dotenv").config();

let connectionString = process.env.DataURL;

const db = new pg.Pool({ connectionString });

db.query("SELECT * FROM questions").then((result) => console.log(result.rows));

db.query("SELECT * FROM answers").then((result) => console.log(result.rows));

module.exports = db;
