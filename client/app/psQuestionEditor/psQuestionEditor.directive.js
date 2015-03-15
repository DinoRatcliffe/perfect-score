'use strict';

angular.module('perfectScoreApp')
  .directive('psQuestionEditor', function () {
    return {
      templateUrl: 'app/psQuestionEditor/psQuestionEditor.html',
      restrict: 'EA',
      scope: {
          question: "=",
      },
      controller: function($scope, Question) {
          $scope.currentanswer = {};
          $scope.editing = false;

          $scope.toggleEditing = function() {
              $scope.editing = !$scope.editing;
              if ($scope.editing === false) {
                  saveQuestion();
              }
          };

          $scope.addQuestion = function() {
              $scope.question.answers.push($scope.currentanswer);
              $scope.currentanswer = {};
          };
          
          $scope.tagsChanged = function(tags) {
          };

          $scope.removeAnswer = function(index) {
              $scope.question.answers.splice(index, 1);
          };

          function saveQuestion() {
             Question.update($scope.question, function(question) {
                 $scope.question = question;
             });
          };
      },
      link: function (scope, element, attrs) {
      }
    };
  });
