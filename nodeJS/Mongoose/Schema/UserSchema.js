const mongoose = require('mongoose');

const user = mongoose.Schema({
  Name: {
    type: String,
    require: true
  },
  Email: {
    type: String,
    unique: true
  },
  Phone: {
    type: Number
  }
})

module.exports = mongoose.model('User_Collection',user)