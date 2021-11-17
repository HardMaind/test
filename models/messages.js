const mongoose = require("mongoose");
var date = Date.now();
var currentDate = new Date(date);
currentDate.getTimezoneOffset();

const messageSchema = new mongoose.Schema({
  message: { type: String },
  name: { type: String },
  timestamp: {
    type: Date,
    default: currentDate,
  },
  receiver: { type: Boolean },
});

const Messages = mongoose.model("whatsapp", messageSchema);
module.exports = Messages;
