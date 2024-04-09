const mysql = require("mysql2");

const pool = mysql.createPool({
    host:'localhost',
    user:'Herry',
    password:'As0987887336',
    database:'database'
});

module.exports = pool.promise();