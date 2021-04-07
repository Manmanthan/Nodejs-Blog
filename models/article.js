let mongoose = require('mongoose');

// Article Schema
let articleSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  likes: [mongoose.Schema.Types.ObjectId]
});

let Article = module.exports = mongoose.model('Article', articleSchema);