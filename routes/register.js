const mysql = require('mysql');
const conn = require('../dbConfig');

const register = (req, res) => {
  console.log('Req: register')
  const username = req.body.username;
  const password = req.body.password;
  const role = req.body.role;
  console.log(username, password, role);

  conn.query('INSERT INTO users(username, password, role) VALUES(?, ?, ?)', [username, password, role], function (error, results, fields) {
    if (error) {
      res.status(400).send({
        notify: {
          type: 'error',
          title: 'Request failed',
          msg: 'Internal server error'
        }
      })
    } else {
        console.log("Register Successful");
        res.redirect('/login');
    }
  });
}

module.exports = register;