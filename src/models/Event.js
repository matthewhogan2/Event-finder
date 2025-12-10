const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String },
  date: { type: String },
  location: { type: String },
  description: { type: String },
  image: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Event', EventSchema);
