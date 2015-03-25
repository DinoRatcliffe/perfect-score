'use strict';

describe('Controller: TaketestCtrl', function () {

  // load the controller's module
  beforeEach(module('perfectScoreApp'));

  var TaketestCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TaketestCtrl = $controller('TaketestCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
