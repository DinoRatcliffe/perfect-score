'use strict';

angular.module('perfectScoreApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('root.test', {
        url: '/test/:_id',
        templateUrl: 'app/test/test.html',
        controller: 'TestCtrl'
      });
  });
