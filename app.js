const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// include routes
const register = require('./routes/register');
const login = require('./routes/login');


let complaints = [
    { name: "Complaint 1", message: "Hello World" },
    { name: "Complaint 2", message: "Hello World" },
]

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Complaints Found',
        complaints: complaints
    });
});


app.get('/register', (req, res) => {
    res.render('register');
});
app.post('/register', register);

app.get('/login', (req, res) => {
    res.render('login', {err_message: ""});
});
app.post('/login', login);


const server = app.listen(3000, () => {
    const host = server.address().address
    const port = server.address().port

    console.log("Listening at http://%s:%s", host, port);
});