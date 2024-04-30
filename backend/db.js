const mysql = require('mysql')
const dotenv = require('dotenv').config()


const connection = mysql.createConnection({
    host:process.env.HOST,
    user: process.env.USER,
    database:'mydb'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });