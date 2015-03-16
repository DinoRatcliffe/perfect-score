'use strict';

angular.module('perfectScoreApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('root.test', {
        url: '/test',
        templateUrl: 'app/test/test.html',
        controller: 'TestCtrl'
      });
  });
