const mysql = require('mysql2');

const pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    database : 'becomebest',
    password : 'musalehome@2020'
})

module.exports = pool.promise();