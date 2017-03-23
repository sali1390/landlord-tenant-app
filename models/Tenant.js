var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TenantSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true
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
  landlord: {
    type: Boolean,
    default: false
  },
  property_id: [{
    type: Schema.Types.ObjectId,
    ref: 'Property'
  }],
  landlord_id: [{
    type: Schema.Types.ObjectId,
    ref: 'Landlord'
  }]
});

var Tenant = mongoose.model("Tenant", TenantSchema);

module.exports = Tenant;
