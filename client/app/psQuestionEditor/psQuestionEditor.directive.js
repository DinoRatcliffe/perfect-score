'use strict';

angular.module('perfectScoreApp')
  .directive('psQuestionEditor', function () {
    return {
      templateUrl: 'app/psQuestionEditor/psQuestionEditor.html',
      restrict: 'EA',
      scope: {
          question: "=",
      },
      controller: function($scope) {
          $scope.currentanswer = {};
          $scope.editing = false;

          $scope.toggleEditing = function() {
              $scope.editing = !$scope.editing;
          };

          $scope.addQuestion = function() {
              $scope.question.answers.push($scope.currentanswer);
              $scope.currentanswer = {};
          };

          $scope.removeAnswer = function(index) {
              $scope.question.answers.splice(index, 1);
          };
      },
      link: function (scope, element, attrs) {
      }
    };
  });
