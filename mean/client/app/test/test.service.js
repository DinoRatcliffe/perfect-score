'use strict';

angular.module('perfectScoreApp')
  .factory('Test', function ($resource) {
    return $resource('/api/tests/:_id/question/:questionId/', {
        _id: '@_id',
      questionId: '@questionId',
    },{
        get: {
            url: '/api/tests/:_id',
            isArray: true
       },
       create: {
           url: '/api/tests/:_id',
           method: 'PUT',
       },
       questions: {
           method: 'GET',
           url: '/api/tests/:_id/questions',
           params: {
               _id: '@_id',
           },
           isArray: true
       },
       addQuestion: {
           method: 'PUT',
           params: {}
       },
       removeQuestion: {
           method: 'DELETE',
           params: {}
       }
    });
  });
