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
    type: String,
    required: true
  },
  img: {
    type: String,
    required: false
  },
  landlord_id: [{
    type: String,
    ref: 'Landlord',
    required: false
  }],
  tenants: [{
    type: Schema.Types.ObjectId,
    ref: 'Tenant',
    required: false
  }]
});

var Property = mongoose.model("Property", PropertySchema);

module.exports = Property;
