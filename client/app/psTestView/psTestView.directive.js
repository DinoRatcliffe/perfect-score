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
      controller: function($scope, $mdDialog) {
          $scope.displayScore = function() {
              var score = 0;
              $scope.questions.forEach(function(question) {
                  if (question.isCorrect === true) {
                      score++;
                  }
                  question.showAnswer = true;
              });

              $scope.marked = true;

              $mdDialog.show(
                  $mdDialog.alert()
                  .title("Results")
                  .content('You got ' + (score / $scope.questions.length * 100) + "% correct")
                  .ariaLabel('Test Result')
                  .ok("ok")
              );
          };

          $scope.marked = false;
          $scope.resetMarked = function() {
              $scope.marked = false;
              $scope.questions.forEach(function(question) {
                  question.showAnswer = false;
              });
          };
          $scope.editing = false;
          $scope.toggleEditing = function () {$scope.editing = !$scope.editing;};
      },
      link: function (scope, element, attrs) {
      }
    };
  });
