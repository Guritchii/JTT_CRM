const mysql = require('mysql');
const express = require('express');
const cors=require("cors");
const bodyparser = require('body-parser');

const db = mysql.createConnection({
    host: 'sql11.freemysqlhosting.net',
    user: 'sql11526710',
    password: 'l5XbZ9Q6Ca',
    database: 'sql11526710'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql CRM-DATABASE Connected ...');
});

const app = express();

app.use(bodyparser.json());

const corsOptions = {
    origin:'', 
    credentials:true,
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions))

 app.listen(8080, () => {
    console.log('Server started on port 8080');
});

app.get('/Client/All', (req, res) => {

    let sql = 'SELECT * FROM clients ORDER BY idclient';

    db.query(sql, (err, result) => {
        if (err) throw err;

        console.log(result);
        res.send(result);
    });
});

app.get('/Client/Id/:id', (req, res) => {

    const id = req.params.id;
    let sql = 'SELECT * FROM clients WHERE idclient = ?';

    db.query(sql, [id], (err, result) => {
        if (err) throw err;

        console.log(result);
        res.send(result);
    });
}); 

app.get('/User/Auth/:login/:pwd', (req, res) => {

    const login = req.params.login;
    const pwd = req.params.pwd;
    let sql = 'SELECT login, password = ? as result FROM users WHERE login = ?';

    db.query(sql, [pwd, login], (err, result) => {
        if (err) throw err;

        console.log(result);
        res.send(result);
    });
});