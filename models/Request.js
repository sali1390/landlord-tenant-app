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
  images: {
    type: String
  },
  tenant: {
    type: String
  }
});

var Request = mongoose.model("Request", RequestSchema);

module.exports = Request;
