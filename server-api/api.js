const mysql = require('mysql');
const express = require('express');
const cors=require("cors");
const bodyparser = require('body-parser');


const nodemailer = require('nodemailer');
const CryptoJS = require('crypto-js');


// Créer un transporteur de mail
let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
//   secure: true, // utiliser SSL
  auth: {
    user: 'stageodinnonoffi@gmail.com',
    pass: 'pjjlofjkpnfpwkiz'
  }
});

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
    let sql = 'SELECT iduser,login, password = ? as result FROM users WHERE login = ?';

    db.query(sql, [pwd, login], (err, result) => {
        if (err) throw err;

        console.log(result);
        res.send(result);
    });
});

app.get('/User/Auth/Password/:id/:pwd', (req, res) => {

    const id = req.params.id;
    const pwd = req.params.pwd;
    let sql = 'SELECT login FROM users WHERE iduser = ? AND password = ?';

    db.query(sql, [id, pwd], (err, result) => {
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

app.get('/Sale/Pie/:iduser/:month/:year', (req, res) => {
    
    const iduser = req.params.iduser;
    const month = req.params.month;
    const year = req.params.year;
    let sql = 'SELECT DISTINCT SUM(s.amount) as total,cu.name FROM sales s,customers cu,contacts co WHERE co.iduser = ? AND co.idcustomer = cu.idcustomer AND cu.idcustomer = s.idcustomer AND ((s.month >= ? AND s.year = ?) OR s.year > ?) GROUP BY cu.name ORDER BY total DESC LIMIT 10';

    db.query(sql, [iduser,month,year,year], (err, result) => {
        if (err) throw err;

        console.log(result);
        res.send(result);
    });
});

app.get('/Sale/KeyNumber/:iduser/:month/:year', (req, res) => {
    
    const iduser = req.params.iduser;
    const month = req.params.month;
    const year = req.params.year;
    let sql = 'SELECT SUM(s.amount) as total,COUNT(co.firstname) as totalcontact FROM sales s,customers cu,contacts co WHERE co.iduser = ? AND co.idcustomer = cu.idcustomer AND cu.idcustomer = s.idcustomer AND ((s.month >= ? AND s.year = ?))';

    db.query(sql, [iduser,month,year], (err, result) => {
        if (err) throw err;

        console.log(result);
        res.send(result);
    });
});

app.get('/Sale/BestCustomer/:iduser', (req, res) => {
    
    const iduser = req.params.iduser;
    const month = req.params.month;
    const year = req.params.year;
    let sql = 'SELECT SUM(s.amount) as total, cu.name FROM sales s,customers cu,contacts co WHERE co.iduser = ? AND co.idcustomer = cu.idcustomer AND cu.idcustomer = s.idcustomer GROUP BY cu.name ORDER BY cu.name LIMIT 1';

    db.query(sql, [iduser], (err, result) => {
        if (err) throw err;

        console.log(result);
        res.send(result);
    });
});

app.get('/Sale/Line/:iduser/:month/:year', (req, res) => {
    
    const iduser = req.params.iduser;
    const month = req.params.month;
    const year = req.params.year;
    let sql = 'SELECT DISTINCT SUM(s.amount) as total,s.year,s.month FROM sales s,customers cu,contacts co WHERE co.iduser = 41 AND co.idcustomer = cu.idcustomer AND cu.idcustomer = s.idcustomer AND ((s.month >= 12 AND s.year = 2021) OR s.year > 2021) GROUP BY s.year,s.month ORDER BY s.year,s.month';

    db.query(sql, [iduser,month,year,year], (err, result) => {
        if (err) throw err;

        console.log(result);
        res.send(result);
    });
});

app.get('/Sale/Verif/:month/:year/:idcustomer', (req, res) => {
    
    const month = req.params.month;
    const year = req.params.year;
    const idcustomer = req.params.idcustomer;
    let sql = 'SELECT s.idsale FROM sales s WHERE s.month = ? AND s.year = ? AND s.idcustomer = ?';

    db.query(sql, [month,year,idcustomer], (err, result) => {
        if (err) throw err;

        console.log(result);
        res.send(result);
    });
});

app.post('/Sale/Add', (req, res) => {
    
    let form = req.body;
    
    console.log(form);
    
    const sql = `INSERT INTO sales(amount, year, month, idcustomer) VALUES ('${form[0]}', '${form[1]}', '${form[2]}', '${form[3]}')`;
     db.query(sql , (err, result) => { 
        if (err) throw err;
        console.log(result);
        res.send('Post added...');
    });
});

app.put('/Sale/Update/:id', (req, res) => {

    const id = req.params.id;
    let form = req.body;

    const sql = `UPDATE sales SET amount = ?, year = ?, month = ?, idcustomer = ? WHERE (idsale = ?)`;
    db.query(sql, [form[0],form[1],form[2],form[3], id], (err, result) => { 
        if (err) throw err;
        console.log(result);
        res.send('Post update...');
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
    
    let rand_pass = "";
    const carac="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789&*#-+@!$%?/()[]{}0123456789&*#-+@!$%?/()[]{}";
    for(var i=0;i<10;i++)
    {
        rand_pass += carac[Math.floor(Math.random()*carac.length)];
    }

    const sql = `INSERT INTO users(lastname, firstname, idrole, login, password, phone, mail) VALUES ('${form.lastname}', '${form.firstname}', '${form.idrole}', '${form.login}', '${CryptoJS.SHA256(rand_pass).toString(CryptoJS.enc.Hex)}', '${form.phone}', '${form.mail}')`;
    db.query(sql , (err, result) => { 
        if (err) throw err;
        console.log(result);
        res.send('Post added...' + result.insertId);
    });

    let mailOptions = {
        from: '"JTT CRM" <JTT@CRM.fr>',
        to: form.mail,
        subject: "Connexion a JTTCRM",
        text: "Voici ton mot de passe : " + rand_pass,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent with mdp: ' + info.response);
        }
      });


});

app.put('/User/Update/:id', (req, res) => {

    const id = req.params.id;
    let form = req.body;

    const sql = `UPDATE users SET lastname = ?, firstname = ?, idrole = ?, login = ?, phone = ?, mail = ? WHERE (iduser = ?)`;
    db.query(sql, [form.lastname, form.firstname, form.idrole, form.login, form.phone, form.mail, id], (err, result) => { 
        if (err) throw err;
        console.log(result);
        res.send('Post update...');
    });
});

app.put('/User/Update/Password/:id', (req, res) => {

    const id = req.params.id;
    let form = req.body;

    console.log(form.newPassword);

    const sql = `UPDATE users SET password = ? WHERE (iduser = ?)`;
    db.query(sql, [form.newPassword, id], (err, result) => { 
        if (err) throw err;
        console.log(result);
        res.send('Post password update...');
    });
});

app.delete('/User/Delete/:id', (req, res) => {

    const id = req.params.id;

    const sql = `DELETE FROM users WHERE (iduser = ?)`;
    db.query(sql, [id], (err, result) => { 
        if (err) throw err;
        console.log(result);
        res.send('Post delete...');
    });
});

//Api pour les contacts de la page repertoire

app.get('/Contact/LastAdd3/:iduser', (req, res) => {

    const iduser = req.params.iduser;

    let sql = 'SELECT c.firstname,c.lastname FROM contacts c WHERE c.iduser = ? ORDER BY c.idcontact DESC LIMIT 3';
    db.query(sql,[iduser], (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get('/Contact/AllWithCustomerName', (req, res) => {
    let sql = 'SELECT c.*, cu.name FROM contacts c, customers cu WHERE cu.idCustomer = c.idCustomer ORDER BY idcontact';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get('/Entreprise/All', (req, res) => {
    let sql = 'SELECT idcustomer,name FROM customers ORDER BY name';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get('/Contact/Exist/:phone', (req, res) => {
    const phone = req.params.phone
    let sql = 'SELECT idcontact FROM contacts WHERE phone = ?';

    db.query(sql, [phone], (err, result) => {
        if (err) throw err;

        console.log(result);
        res.send(result);
    });
});

app.post('/Contact/Add', (req, res) => {
    
    let form = req.body;

    console.log("on est dans le form",form);

    const sql = `INSERT INTO contacts(firstname,lastname, mail, phone, iduser, idcustomer) VALUES ('${form.firstname}', '${form.lastname}', '${form.mail}',  '${form.phone}', '${form.iduser}', '${form.idcustomer}' )`;
    db.query(sql , (err, result) => { 
        if (err) throw err;
        console.log(result);
        res.send('Post added...' + result.insertId);
    });
});

app.get('/Contact/:iduser', (req, res) => {

    const iduser = req.params.iduser;

    let sql = 'SELECT c.idcontact,c.firstname,c.lastname,cu.name FROM contacts c,customers cu WHERE cu.idcustomer = c.idcustomer AND c.iduser = ?';
    db.query(sql,[iduser], (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.post('/Event/Add', (req, res) => {
    
    let form = req.body;
    
    console.log("on est dans le form d'un event ",form);
    
    const sql = `INSERT INTO events(date,starttime,endtime,comment,idusersend,iduserreceive,idcontact) VALUES ('${form.date}', '${form.starttime}', '${form.endtime}', '${form.comment}', '${form.idusersend}', '${form.iduserreceive}', '${form.idcontact}')`;
     db.query(sql , (err, result) => { 
        if (err) throw err;
        console.log(result);
        res.send('Post added...');
    });
});

app.get('/Event/:iduser', (req, res) => {

    const iduser = req.params.iduser;

    let sql = 'SELECT e.date,e.starttime,e.endtime,e.comment FROM events e where e.iduserreceive = ?';

    db.query(sql,[iduser], (err, result) => {
        if (err) throw err;

        console.log(result);
        res.send(result);
    });
});

app.post('/Mail/Avertir', (req, res) => {
    // Définir les options du mail
    let form = req.body;
    console.log(form)
    let mailOptions = {
        from: '"JTT CRM" <JTT@CRM.fr>',
        to: 'Jeremy.DUCOURTHIALE@etu.uca.fr',
        subject: form.objet,
        text: form.raison
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send(false)
        } else {
            console.log('Email sent: ' + info.response);
            res.send(true)
        }
      });

});