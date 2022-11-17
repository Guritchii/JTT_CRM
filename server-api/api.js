const mysql = require('mysql');
const express = require('express');
const cors=require("cors");
const bodyparser = require('body-parser');

const db = mysql.createConnection({
    host: 'lfbn-cle-1-568-58.w92-157.abo.wanadoo.fr',
    user: 'crmuser',
    password: 'Jeremy1234',
    database: 'crm-database'
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
    origin:'*', 
    credentials:true,
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions))

 app.listen(8080, () => {
    console.log('Server started on port 8080');
});

app.get('/Customer/All', (req, res) => {

    let sql = 'SELECT * FROM customers ORDER BY idcustomer';

    db.query(sql, (err, result) => {
        if (err) throw err;

        console.log(result);
        res.send(result);
    });
});

app.get('/Customer/Id/:id', (req, res) => {

    const id = req.params.id;
    let sql = 'SELECT * FROM customers WHERE idcustomer = ?';

    db.query(sql, [id], (err, result) => {
        if (err) throw err;

        console.log(result);
        res.send(result);
    });
}); 

app.get('/User/Id/:id', (req, res) => {

    const id = req.params.id;
    let sql = 'SELECT lastname,firstname,phone,mail,login,idrole FROM users WHERE iduser = ?';

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

app.get('/User/Role/:login', (req, res) => {
    
        const login = req.params.login;
        let sql = 'SELECT idRole FROM users WHERE login = ?';
    
        db.query(sql, [login], (err, result) => {
            if (err) throw err;
    
            console.log(result);
            res.send(result);
        });
});

app.get('/Role/All/', (req, res) => {
    
    let sql = 'SELECT idRole,name FROM roles ORDER BY idRole';

    db.query(sql, (err, result) => {
        if (err) throw err;

        console.log(result);
        res.send(result);
    });
});

app.get('/User/All', (req, res) => {

    let sql = 'SELECT iduser,lastname,firstname,login,phone,mail,roles.name FROM users,roles where users.idrole = roles.idrole Order by roles.idrole,lastname,firstname;';

    db.query(sql, (err, result) => {
        if (err) throw err;

        console.log(result);
        res.send(result);
    });
});

app.get('/User/Exist/:login', (req, res) => {
    
    const login = req.params.login;
    let sql = 'SELECT idUser FROM users WHERE login = ?';

    db.query(sql, [login], (err, result) => {
        if (err) throw err;

        console.log(result);
        res.send(result);
    });
});

app.post('/User/Add', (req, res) => {
    
    let form = req.body;

    console.log(form);

    const sql = `INSERT INTO users(lastname, firstname, idrole, login, password, phone, mail) VALUES ('${form.lastname}', '${form.firstname}', '${form.idrole}', '${form.login}', '${form.password}', '${form.phone}', '${form.mail}')`;
    db.query(sql , (err, result) => { 
        if (err) throw err;
        console.log(result);
        res.send('Post added...' + result.insertId);
    });
});

app.post('/User/Update/:id', (req, res) => {

    const id = req.params.id;
    
    let form = req.body;

    console.log(form);

    const sql = `UPDATE users SET lastname = '${form.lastname}', firstname = '${form.lastname}', idrole = '${form.lastname}', login = '${form.lastname}', password = '${form.lastname}', phone = '${form.lastname}', mail = '${form.lastname}' WHERE (iduser = ?)`;
    db.query(sql ,[id], (err, result) => { 
        if (err) throw err;
        console.log(result);
        res.send('Post added...' + result.insertId);
    });
});

//Api pour les contacts de la page repertoire

app.get('/Contact/All', (req, res) => {
    let sql = 'SELECT * FROM contacts ORDER BY idcontact';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});