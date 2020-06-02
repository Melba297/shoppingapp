const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'melba',
    database : 'myShoppingApp'
});

connection.connect();


module.exports = connection;
