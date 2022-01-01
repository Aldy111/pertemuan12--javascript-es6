//import mysql
const mysql = require("mysql");

//import dotenv
require("dotenv").config();

//destruccing dotenv
const {
    DB_HOST,
    DB_USERNAME,
    DB_PASSWORD,
    DB_DATABASE
} = process.env;

//buat koneksi
const db= mysql.createConnection({
    host : DB_HOST,
    user : DB_USERNAME,
    password : DB_PASSWORD,
    database : DB_DATABASE
});

//koneksi ke database
db.connect((err) => {
    if (err) {
        console.log(`koneksi error : ${err}`);
        return;
    } else {
        console.log(`koneksi berhasi`);
        return;
    }
});

//export db
module.exports = db;