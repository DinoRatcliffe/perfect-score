'use strict';

angular.module('perfectScoreApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('root', {
        abstract: true,
        templateUrl: 'app/root/root.html',
        controller: 'RootCtrl'
      });
  });
