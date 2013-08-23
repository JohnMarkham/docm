var express = require('express');

var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 app.use(express.static(__dirname));
  var buf = new Buffer(fs.readFileSync('index.html'), 'utf-8');
  response.send(buf.toString('utf-8'));
});

var port = process.env.PORT;
app.listen(port, function() {
  console.log("Listening on " + port);
});


