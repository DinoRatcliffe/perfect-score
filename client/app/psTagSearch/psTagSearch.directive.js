'use strict';

angular.module('perfectScoreApp')
  .directive('psTagSearch', function () {
    return {
      templateUrl: 'app/psTagSearch/psTagSearch.html',
      restrict: 'EA',
      scope: {
          onChange: '=onChange',
          tags: '=psTags'
      },
      link: function (scope, element, attrs) {
      },
      controller: function($scope) {
          function addTag(tag) {
              $scope.tags.push(tag.valueOf().toLowerCase().trim());
              $scope.tagInput = "";
              onChange($scope.tags);
          }

          function removeTag(index) {
              $scope.tags.splice(index, 1);
              onChange($scope.tags);
          };

          function onChange(tags) {
              $scope.onChange(tags);
          }

          $scope.removeTag = removeTag;
          $scope.addTag = addTag;
      }
    };
  });
