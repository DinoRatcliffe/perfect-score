'use strict';

var express = require('express');
var controller = require('./test.controller.js');

var router = express.Router();

router.get('/', controller.index);
router.put('/:id', controller.create);
router.put('/:id/question/:questionId', controller.addQuestion);
router.get('/:id/questions', controller.getQuestions);
router.delete('/:id/question/:questionId', controller.removeQuestion);

module.exports = router;
