const mysql = require("mysql");

// connection with mySql Database

const connectionDB = function connectDB() {
  var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "hardikmysql",
  });
  conn.connect((err, data) => {
    if (err) throw err;
    console.log(`Connected with database:${conn.threadId}`);
  });
};

module.exports = connectionDB;
