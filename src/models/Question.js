const mongoose = require('mongoose');

const { Schema } = mongoose;

const questionSchema = new Schema(
  {
    questionText: String,
    questionAnswer: String,
    dateCreated: String,
    dateModified: String,
  },
  {
    collection: 'questions',
  }
);

module.exports = mongoose.model('Question', questionSchema);
