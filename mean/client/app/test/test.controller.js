'use strict';

angular.module('perfectScoreApp')
  .controller('TestCtrl', function ($scope, $stateParams, Test) {
      var test = $stateParams;
      function questionSelected(question) {
          if(!_.contains($scope.questions, question._id)) {
              Test.addQuestion({_id: test._id, questionId: question._id}, function(){
                  $scope.questions.push(question);
              });
          }
      };

      function removeQuestion(question) {
          if (_.contains($scope.questions, question)) {
              if (_.some($scope.questions, '_id', question)) {
                  Test.removeQuestion({_id: test._id, questionId: question._id}, function(){
                      $scope.questions.splice($scope.questions.indexOf(question), 1);
                  });
              }
          }
      }

      $scope.removeQuestion = { tag: "Remove Question",
                                callback: removeQuestion};
      $scope.questions = Test.questions($stateParams);
      $scope.questionSelected = { tag: 'Add Question',
                                   callback: questionSelected };
  });
