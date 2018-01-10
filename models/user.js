const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, max: 50 },
  name: { type:String,max: 50 },
  id: { type: String, required: true, max: 50 },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);