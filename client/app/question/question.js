'use strict';

angular.module('perfectScoreApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('root.question', {
        url: '/question',
        templateUrl: 'app/question/question.html',
        controller: 'QuestionCtrl',
        authenticate: true
      });
  });
