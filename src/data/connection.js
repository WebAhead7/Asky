const pg = require("pg");
require("dotenv").config();

let connectionString = process.env.DataURL;

const db = new pg.Pool({
  connectionString,
  //   ssl: { rejectUnauthorized: false },
});

module.exports = db;
