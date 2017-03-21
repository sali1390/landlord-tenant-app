var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var RequestSchema = new Schema({
  dateRequested: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  pictures: {
    type: Number,
    required: true
  }
});

var Property = mongoose.model("Property", PropertySchema);

module.exports = Property;
