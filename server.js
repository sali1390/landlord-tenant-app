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
var Request = require("./models/Request.js");

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

//var sampleRequest = new Request({
//  title: 'Busted Window',
//  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
//});
//
//sampleRequest.save(function(err, doc) {
//  if (err) {
//    console.log(err);
//  } else {
//    console.log(doc);
//  }
//});

app.use(bodyParser.urlencoded({
  extended: false
}));

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

app.get("/api/properties", function(req, res) {
  //var userEmail = sessionStorage.getItem('userEmail');
  //var userPassword = sessionStorage.getItem('userPassword');

  Property.find({
  }, function(err, doc) {
    if (err) {
      console.log(err);
    } else {
      res.send(doc);
    }
  }).populate({
    path: 'tenants'
  });
});

app.get("/api/tenants", function(req, res) {
  //var userEmail = sessionStorage.getItem('userEmail');
  //var userPassword = sessionStorage.getItem('userPassword');

  Tenant.find({
  }, function(err, doc) {
    if (err) {
      console.log(err);
    } else {
      res.send(doc);
    }
  }).populate('property_id')
});

app.post("/api/landlords", function(req, res) {
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

app.post("/api/properties", function(req, res) {
  Property.create({
    streetAddress: req.body.streetAddress,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    landlord_id: req.body.landlordid
  }, function(err) {
    if (err) return (err);
  });
  res.end();
});
