'use strict';

angular.module('perfectScoreApp')
  .directive('psQuestionAnswer', function () {
    return {
      templateUrl: 'app/psQuestionAnswer/psQuestionAnswer.html',
      restrict: 'EA',
      scope: {
          question: "=",
      },
      link: function (scope, element, attrs) {
      }
    };
  });
