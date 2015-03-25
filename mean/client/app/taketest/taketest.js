'use strict';

angular.module('perfectScoreApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('root.taketest', {
        url: '/taketest/:_id',
        templateUrl: 'app/taketest/taketest.html',
        controller: 'TaketestCtrl'
      });
  });
