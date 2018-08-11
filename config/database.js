var mysql = require('mysql');

var connection = function(){
  console.log("Database connection established");
  return mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'clicks_users'
  });
}

module.exports = function(){
  console.log("Module loaded");
  return connection;
}