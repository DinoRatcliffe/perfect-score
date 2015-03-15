'use strict';

angular.module('perfectScoreApp')
  .directive('psTagSearch', function () {
    return {
      templateUrl: 'app/psTagSearch/psTagSearch.html',
      restrict: 'EA',
      scope: {
          onNewQuestions: '=onNewQuestions'
      },
      link: function (scope, element, attrs) {
      },
      controller: function($scope, Question) {
          var tags = [];

          function addTag(tag) {
              tags.push(tag.valueOf().toLowerCase().trim());
              $scope.tagInput = "";
              loadQuestions(tags);
          }

          function removeTag(index) {
              tags.splice(index, 1);
              loadQuestions(tags);
          };

          function loadQuestions(searchTags) {
              Question.search({tags: {$in: searchTags}}, 
                              function(questions) {
                                  if (searchTags == tags) {
                                      $scope.onNewQuestions(questions);
                                  }
                              });
          }

          $scope.removeTag = removeTag;
          $scope.addTag = addTag;
          $scope.tags = tags;
      }
    };
  });
