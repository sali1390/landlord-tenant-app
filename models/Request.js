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
  tenant_id: [{
    type: Schema.Types.ObjectId,
    ref: 'Tenant'
  }],
  property_id: [{
    type: Schema.Types.ObjectId,
    ref: 'Property'
  }]
});

var Request = mongoose.model("Request", RequestSchema);

module.exports = Request;
