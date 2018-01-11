const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imageSchema = new Schema({
  userID: { type: String, max: 50, required: true },
  username: { type: String, max: 50, required: true },
  url: { type: String, max: 500, required: true },
  website: { type: String, max: 50, required: true },
  description: { type: String, required: true, max: 50 },
}, { timestamps: true });

module.exports = mongoose.model('Image', imageSchema);