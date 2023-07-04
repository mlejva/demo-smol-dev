const mongoose = require('mongoose');
const shortid = require('shortid');

const urlSchema = new mongoose.Schema({
  originalUrl: String,
  urlCode: {
    type: String,
    default: shortid.generate
  }
});

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;