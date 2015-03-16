'use strict';

angular.module('perfectScoreApp')
  .directive('psQuestionSearch', function () {
    return {
      templateUrl: 'app/psQuestionSearch/psQuestionSearch.html',
      restrict: 'EA',
      scope: {
          questionSelection: "=psQuestionSelected",
      },
      controller: function($scope, Question, $mdDialog) {
          $scope.onTagChange = function(tags) {
              Question.search({tags: {$in: tags}}, function(questions) {
                  $scope.questions = questions;
              });
          };

      $scope.createQuestion = function() {
          $mdDialog.show({
              controller: CreateQuestionDialog,
              templateUrl: 'app/psQuestionSearch/question.create.dialog.html',
          }).then(function(question) {
              Question.save(question);
          });
      };

      },
      link: function (scope, element, attrs) {
      }
    };
  });

  function CreateQuestionDialog($scope, $mdDialog) {
      $scope.question = {answers: [], tags: []};
      $scope.currentAnswer = {};
      $scope.create = true;

      $scope.hide = function() {
          $mdDialog.hide();
          $scope.$digest();
      };

      $scope.candel = function(){
          $mdDialog.cancel();
      };

      $scope.addAnswer = function(answer) {
          answers.push(answer);
          $scope.currentAnswer = {};
      }

      $scope.createQuestion = function() {
          $mdDialog.hide($scope.question);
      };
  }
