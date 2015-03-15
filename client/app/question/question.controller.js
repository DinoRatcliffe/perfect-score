'use strict';

angular.module('perfectScoreApp')
  .controller('QuestionCtrl', function ($scope, $mdDialog, Question) {
      $scope.createQuestion = function() {
          $mdDialog.show({
              controller: CreateQuestionDialog,
              templateUrl: 'app/question/question.create.dialog.html',
          }).then(function(question) {
              console.log(question);
          });
      };
      $scope.onNewQuestions = function(questions) {
          $scope.questions = questions;
      };
  });

  function CreateQuestionDialog($scope, $mdDialog) {
      $scope.question = {answers: []};
      $scope.currentAnswer = {};

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
