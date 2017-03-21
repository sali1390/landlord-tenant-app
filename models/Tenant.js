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
  requests: {
    // Store ObjectIds in the array
    type: Schema.Types.ObjectId,
    // The ObjectIds will refer to the ids in the Property model
    ref: "Request"
  },
  landlord: {
    type: Boolean,
    default: false
  }
});

var Tenant = mongoose.model("Tenant", TenantSchema);

module.exports = Tenant;
