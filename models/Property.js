var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PropertySchema = new Schema({
  streetAddress: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: {
    type: Number,
    required: true
  },
  tenants: [{
    type: Schema.Types.ObjectId,
    // The ObjectIds will refer to the ids in the Tenant model
    ref: "Tenant"
  }],
  requests: [{
    type: Schema.Types.ObjectId,
    // The ObjectIds will refer to the ids in the Tenant model
    ref: "Request"
  }]
});

var Property = mongoose.model("Property", PropertySchema);

module.exports = Property;
