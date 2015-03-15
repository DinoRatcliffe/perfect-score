'use strict';

angular.module('perfectScoreApp')
  .directive('psMenu', function () {
    return {
      templateUrl: 'app/psMenu/psMenu.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      },
      controller: function($scope, $mdSidenav, $mdMedia) {
          function toggleMenu() {
              $mdSidenav('psMenu').toggle();
          }

          $scope.toggleMenu = toggleMenu;
          $scope.media = $mdMedia;
      }
    };
  });
