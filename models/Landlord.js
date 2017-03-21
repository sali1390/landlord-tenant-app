var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var LandlordSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
    min: [
      6,
      "Your password needs to be longer."
    ]
  },
  properties: [{
    // Store ObjectIds in the array
    type: Schema.Types.ObjectId,
    // The ObjectIds will refer to the ids in the Property model
    ref: "Property"
  }],
  tenants: [{
    type: Schema.Types.ObjectId,
    // The ObjectIds will refer to the ids in the Tenant model
    ref: "Tenant"
  }]
});

var Landlord = mongoose.model("Landlord", LandlordSchema);

module.exports = Landlord;
