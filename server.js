var express = require('express');
var app = express();
var port = 3001;
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

var Landlord = require("./models/landlordModel.js");

//var sampleLandlord = new Landlord({
//  email: 'email@email.com',
//  firstName: 'Edgar',
//  lastName: 'Allan Poe',
//  password: 'pass1234'
//})
//
//sampleLandlord.save(function(err, doc) {
//  if (err) {
//    console.log(err);
//  } else {
//    console.log(doc);
//  }
//});

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static(__dirname + "/www"));

app.listen(port, function() {
  console.log("Listening on port: " + port);
});

mongoose.connect("mongodb://localhost/landlord-tenant");

var db = mongoose.connection;

db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

app.get("/api/landlords", function(req, res) {
  Landlord.find({}, function(err, doc) {
    if (err) {
    console.log(err);
    } else {
      res.send(doc);
    }
  })
});
