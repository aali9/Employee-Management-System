const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'Bushraamin123?',
      database: 'employee_management_db'
    },
    console.log(`Connected to the employee_management_db database.`)
  );

  module.exports = db;