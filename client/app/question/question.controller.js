'use strict';

angular.module('perfectScoreApp')
  .controller('QuestionCtrl', function ($scope) {
      $scope.onNewQuestions = function(questions) {
          $scope.questions = questions;
      };
  });
