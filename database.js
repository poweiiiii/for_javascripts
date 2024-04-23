const mysql = require("mysql2");

const pool = mysql.createPool({
    host:'localhost',
    user:'Herry',
    password:'As0987887336',
    database:'database'
});

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL database');
  });

module.exports = pool.promise();