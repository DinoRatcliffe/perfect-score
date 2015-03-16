'use strict';

angular.module('perfectScoreApp')
  .directive('psTestView', function () {
    return {
      templateUrl: 'app/psTestView/psTestView.html',
      restrict: 'EA',
      scope: {
          questions: "=psQuestions",
          questionSelected: "=psQuestionSelected"
      },
      link: function (scope, element, attrs) {
      }
    };
  });
