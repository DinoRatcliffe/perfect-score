'use strict';

angular.module('perfectScoreApp')
  .directive('psQuestionAnswer', function () {
    return {
      templateUrl: 'app/psQuestionAnswer/psQuestionAnswer.html',
      restrict: 'EA',
      scope: {
          question: "=",
      },
      controller: function($scope) {
          $scope.answerSelected = function(answer) {
              $scope.question.isCorrect = answer.correct === true ? true : false;
          };
      },
      link: function (scope, element, attrs) {
      }
    };
  });
