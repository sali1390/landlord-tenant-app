var express = require('express');
var app = express();
var port = 3001;

app.use(express.static(__dirname + "/www"));

app.listen(port, function() {
  console.log("Listening on port: " + port);
});
