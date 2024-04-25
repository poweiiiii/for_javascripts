var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "Herry",
  password: "As0987887336"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});