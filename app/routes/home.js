module.exports = function(server){

  server.get('/', function(req, res){
    //.config.database is the arquives names /config/database.js
    var database = server.config.database();

    res.render('home/home')
  });
}