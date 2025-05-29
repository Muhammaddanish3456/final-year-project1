const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  name: String,
  type: String,
  department: String,
  quantity: Number,
  location: String,
  condition: String,
});

module.exports = mongoose.model('Property', propertySchema);
