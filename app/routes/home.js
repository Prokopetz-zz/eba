module.exports = function(server){
  var mysql = require('mysql');

  var connection = mysql.connection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'clicks_users'
  });



  server.get('/', function(req, res){
    res.render('home/home')
  });
}