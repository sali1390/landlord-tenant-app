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
  }
});

var Property = mongoose.model("Property", PropertySchema);

module.exports = Property;
