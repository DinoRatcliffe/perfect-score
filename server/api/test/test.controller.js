'use strict';

var Client = require('node-rest-client').Client;
var apiURL = 'http://localhost:9090/rs/test';
var Question = require('../question/question.model');


var client = new Client();
client.registerMethod('getTests', apiURL + '/', 'GET');
client.registerMethod('putTest', apiURL + '/${id}', 'PUT');
client.registerMethod('putQuestion', apiURL + '/${id}/question/${questionId}', 'PUT');
client.registerMethod('removeQuestion', apiURL + '/${id}/question/${questionId}', 'DELETE');
client.registerMethod('getQuestions', apiURL + '/${id}/questions', 'GET');

exports.index = function(req, res) {
    client.methods.getTests({}, function(data, response) {
        return res.json(data);
    });
};

exports.create = function(req, res) {
    client.methods.putTest({path: {"id" : req.params.id}}, function(data, response) {
        if (!/^[0-9a-fA-f]{5}-\d{4}-\d{2}-\d{2}$/.test(req.params.id)) {
            return res.send(400)
        }
        return res.json(response.statusCode, data);
    }); 
};

exports.removeQuestion = function(req, res) {
    client.methods.removeQuestion({path: {"id": req.params.id, "questionId": req.params.questionId}}, function(data, response) {
        return res.json(response.statusCode, data);
    });
};

exports.addQuestion = function(req, res) {
    client.methods.putQuestion({path: {"id": req.params.id, "questionId": req.params.questionId}}, function(data, response) {
        return res.json(response.statusCode, data);
    });
};

exports.getQuestions = function(req, res) {
    client.methods.getQuestions({path: {"id": req.params.id}}, function(data, response) {
        var questions = [];
        var count = 0;
        if (data.length == 0) {
            return res.json(response.statusCode, data);
        };
        data.forEach(function(qId) {
            Question.findById(qId, function(err, question) {
                if (!err && question) {
                    questions.push(question);
                }
                count++;
                if (count == data.length) {
                    return res.json(response.statusCode, questions);
                };
            });
        });
    });
};

function handleError(res, err) {
  return res.send(500, err);
}
