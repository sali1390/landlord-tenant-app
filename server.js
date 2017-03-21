var express = require('express');
var app = express();
var port = 3001;
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

var Tenant = require("./models/Tenant.js");
var Landlord = require("./models/Landlord.js");
var Property = require("./models/Property.js");

//var sampleLandlord = new Landlord({
//  email: 'email3@email.com',
//  firstName: 'Jane',
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

//var sampleProperty = new Property({
//  streetAddress: '524 Main St',
//  city: 'Miami',
//  state: 'FL',
//  zip: '45667'
//})
//
//sampleProperty.save(function(err, doc) {
//  if (err) {
//    console.log(err);
//  } else {
//    console.log(doc);
//  }
//});

//var sampleTenant = new Tenant({
//  email: 'email3@email.com',
//  firstName: 'Jane',
//  lastName: 'Allan Poe',
//  password: 'pass1234',
//  landlordCode: '4321'
//});
//
//sampleTenant.save(function(err, doc) {
//  if (err) {
//    console.log(err);
//  } else {
//    console.log(doc);
//  }
//});

app.use(bodyParser.json({
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
  //var userEmail = sessionStorage.getItem('userEmail');
  //var userPassword = sessionStorage.getItem('userPassword');

  Landlord.find({}, function(err, doc) {
    if (err) {
    console.log(err);
    } else {
      res.send(doc);
    }
  })
});

app.get("/api/tenants", function(req, res) {
  //var userEmail = sessionStorage.getItem('userEmail');
  //var userPassword = sessionStorage.getItem('userPassword');

  Tenant.find({}, function(err, doc) {
    if (err) {
      console.log(err);
    } else {
      res.send(doc);
    }
  })
});

app.get("/api/properties", function(req, res) {
  //var userEmail = sessionStorage.getItem('userEmail');
  //var userPassword = sessionStorage.getItem('userPassword');

  Landlord.find({
  }, function(err, doc) {
    if (err) {
      console.log(err);
    } else {
      res.send(doc);
    }
  }).populate('properties')
});

app.post("/api/landlords", function(req, res) {
  console.log(req.body);
  Landlord.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  }, function(err) {
    if (err) return (err);
  });
  res.end();
});

app.post("/api/tenants", function(req, res) {
  Tenant.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  }, function(err) {
    if (err) return (err);
  });
  res.end();
});
