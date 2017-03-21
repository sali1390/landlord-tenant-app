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
  landlordcode: {
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
  }
});

var Tenant = mongoose.model("Tenant", TenantSchema);

module.exports = Tenant;
