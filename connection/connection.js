const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Bushraamin123?",
  database:"employee_management_db"
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;