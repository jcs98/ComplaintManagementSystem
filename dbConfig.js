// establish connection with mysql

const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'test',
  database: 'complaintmanagement'
});

// establish connection with mysql
conn.connect(err => {
  if (err) throw err;
  console.log("DB connected");
});

module.exports =  conn;