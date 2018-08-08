module.exports = function(server) {
  server.get('/about', function(req, res){
    res.render('about/about');
  })
}