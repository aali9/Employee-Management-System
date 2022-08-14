
const mysql = require ('mysql2');

//connect to the database

const db =mysql.createConnection(
 {
    host: 'localhost',
    user: 'root',

    password: '',
    databse: 'employeedata_db'
 },
  console.log('Connected to the employeedata_db.')
);

db.connect((err) => {
    if (err) throw err;
})

module.exports = db