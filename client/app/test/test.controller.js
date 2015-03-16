'use strict';

angular.module('perfectScoreApp')
  .controller('TestCtrl', function ($scope) {
      function questionSelected(question) {
          if(!_.contains($scope.questions, question)) {
              $scope.questions.push(question);
          }
      };

      $scope.questions = [];
      $scope.questionSelected = { tag: 'Add Question',
                                   callback: questionSelected };
  });
