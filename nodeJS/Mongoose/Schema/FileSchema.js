const mongoose = require('mongoose');

const file = mongoose.Schema({
  Title:String,
  SubTitle:String,
  Fname:String,
  Fpath:String
});

module.exports = mongoose.model('File_Collection',file)