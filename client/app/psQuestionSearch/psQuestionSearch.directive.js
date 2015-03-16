'use strict';

angular.module('perfectScoreApp')
  .directive('psQuestionSearch', function () {
    return {
      templateUrl: 'app/psQuestionSearch/psQuestionSearch.html',
      restrict: 'EA',
      scope: {
          questionSelection: "=psQuestionSelected",
      },
      controller: function($scope, Question) {
          $scope.onTagChange = function(tags) {
              Question.search({tags: {$in: tags}}, function(questions) {
                  $scope.questions = questions;
              });
          };
      },
      link: function (scope, element, attrs) {
      }
    };
  });
