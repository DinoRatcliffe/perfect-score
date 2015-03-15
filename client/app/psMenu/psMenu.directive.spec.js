'use strict';

describe('Directive: psMenu', function () {

  // load the directive's module and view
  beforeEach(module('perfectScoreApp'));
  beforeEach(module('app/psMenu/psMenu.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ps-menu></ps-menu>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the psMenu directive');
  }));
});