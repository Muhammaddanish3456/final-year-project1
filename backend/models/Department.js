const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: String,
  head: String,
});

module.exports = mongoose.model('Department', departmentSchema);
