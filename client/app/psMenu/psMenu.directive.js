'use strict';

angular.module('perfectScoreApp')
  .directive('psMenu', function () {
    return {
      templateUrl: 'app/psMenu/psMenu.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      },
      controller: function($scope, $state, $mdSidenav, $mdMedia, Test, $mdDialog, $mdToast) {

          function toggleMenu() {
              $mdSidenav('psMenu').toggle();
          }

          function showCreateTestDialog(ev) {
              $mdDialog.show({
                  controller: DialogController,
                  templateUrl: 'app/psMenu/createTest.dialog.html',
                  targetEvent: ev,
              }).then(function(test) {
                  Test.create(test, function(){
                      $mdToast.show(
                          $mdToast.simple()
                          .content("Created Test - " + test._id)
                          .position("bottom right")
                          .hideDelay(3000)
                      );
                      $scope.tests.push(test);
                  });
              });
          }

          function openTest(test) {
              $state.go('root.test', test);
          }

          function loadTests() {
              $scope.tests = Test.get();
          }
          loadTests();

          $scope.showCreateTestDialog = showCreateTestDialog;
          $scope.openTest = openTest;
          $scope.toggleMenu = toggleMenu;
          $scope.media = $mdMedia;
      }
    };
  });

  function DialogController($scope, $mdDialog, $rootScope) {
      $scope.test = {};

      $scope.hide = function() {
          $mdDialog.hide();
      }

      $scope.cancel = function() {
          $mdDialog.cancel();
      };

      $scope.createTest = function() {
          $mdDialog.hide($scope.test);
      };
  }
