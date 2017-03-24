var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MessageSchema = new Schema({
  message: {
    type: String,
    require: true
  },
  sender_id: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  recipient_id: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

var Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
