const mysql = require('mysql')

const database =mysql.createConnection(
  {
    host : 'localhost',
    user : 'root',
    password : 'As0987887336'
  }
)

database.connect();
 
