'use strict';

angular.module('perfectScoreApp')
  .factory('Question', function ($resource) {
    return $resource('/api/questions/:id', {
      id: '@_id'
    },
    {
        search: {
            method: 'POST',
            url: '/api/questions/search',
            headers: {
                'Content-Type': 'application/json'
            },
            isArray: true
        },
        update: {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        }});
  })
  .factory('QuestionQueryTags', function(Question, $q) {
      return function(tags) {
          var delay = $q.defer();
          query = {tags: {$in: tags}};
          Question.search(tags, function(questions) {
              delay.resolve(questions);
          }, function() {
              delay.reject();
          });
          return delay.promise;
      }
  });
