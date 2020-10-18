const mysql = require('mysql')
require('dotenv').config();

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        // hide password
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
      });
}



  connection.connect(function(err) {
      if(err) {
          console.log("error connecting: " + err.stack);
          return;
      }
      console.log("connected as id" + connection.threadId);
  });

  module.exports = connection;