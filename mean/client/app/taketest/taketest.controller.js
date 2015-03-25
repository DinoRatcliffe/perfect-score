'use strict';

angular.module('perfectScoreApp')
  .controller('TaketestCtrl', function ($scope, Test, $stateParams) {
      var test = $stateParams;
      $scope.questions = Test.questions($stateParams);
  });
