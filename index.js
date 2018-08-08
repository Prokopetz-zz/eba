var server = require('./config/server');

var routeAbout = require('./app/routes/about')(server);
var routeHome = require('./app/routes/home')(server);

 

server.listen(3000, function () {
   console.log("Server is running");
});