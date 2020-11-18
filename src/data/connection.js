const pg = require("pg");
require("dotenv").config();

let connectionString = process.env.DataURL;

const db = new pg.Pool({ connectionString });

module.exports = db;
