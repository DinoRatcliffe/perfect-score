'use strict';

describe('Directive: psTestView', function () {

  // load the directive's module and view
  beforeEach(module('perfectScoreApp'));
  beforeEach(module('app/psTestView/psTestView.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ps-test-view></ps-test-view>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the psTestView directive');
  }));
});