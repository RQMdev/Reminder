var mongoose = require('mongoose');
var StickySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  text: {
    type: String,
    required: true,
    trim: true
  },
  priority: {
    type: Number,
    Default: 0
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

var Sticky = mongoose.model('Sticky', StickySchema);
module.exports = Sticky;
