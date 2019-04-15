const mysql = require('mysql');
const conn = require('../dbConfig');

const login = (req, res) => {
    console.log('Req: Login')
    const username = req.body.username;
    const password = req.body.password;
    conn.query('SELECT * FROM users WHERE username = ?', [username], function (error, results, fields) {
        if (error) {
            res.status(400).send({
                notify: {
                    type: 'error',
                    title: 'Request failed',
                    msg: 'Internal server error'
                }
            })
        } else {
            if (results.length > 0) {
                if (results[0].password == password) {
                    console.log("Login Successful");
                    let role = results[0].role;
                    console.log(role); 
                    // redirect according to role
                    res.redirect('/');
                }
                else {
                    res.render('login', { err_message: "Invalid Credentials" });
                }
            }
            else {
                res.render('login', { err_message: "Invalid Credentials" });
            }
        }
    });
}

module.exports = login;