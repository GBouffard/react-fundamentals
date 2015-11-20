var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.use(express.static(__dirname + '/'));

app.get('/', function(request, response){
  console.log(request);
  console.log(response);
  response.sendFile(path.join(__dirname, './', './index.html'));
});

server.listen(3000, function(){
  console.log('React Fundamentals is running on 3000');
});

module.exports = server;