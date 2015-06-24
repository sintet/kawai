var express = require('express')
var path = require('path')
var app = express()
app.use(express.static(path.join(__dirname, '/'))); //  "public" off of current is root

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
})

// var http = require('http');
// var static = require('node-static');
// var file = new static.Server('.');
//
// http.createServer(function(req, res) {
//   file.serve(req, res);
// }).listen(8000);
//
// console.log('Server running on port 8000');
