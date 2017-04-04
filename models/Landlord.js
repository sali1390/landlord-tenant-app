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
  tenants: [{
    type: Schema.Types.ObjectId,
    ref: 'Tenant'
  }],
  landlord: {
    type: Boolean,
    default: true
  },
  profilePic: {

  }
});

var Landlord = mongoose.model("Landlord", LandlordSchema);

module.exports = Landlord;
