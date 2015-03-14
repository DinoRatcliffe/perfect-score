'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  question: String,
  correnctCount: Number,
  answers: [{ answer: String, correct: Boolean }],
  tags: { type: [String], index: true }
});

module.exports = mongoose.model('Question', QuestionSchema);
