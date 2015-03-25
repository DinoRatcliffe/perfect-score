'use strict';

angular.module('perfectScoreApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('root.main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });
