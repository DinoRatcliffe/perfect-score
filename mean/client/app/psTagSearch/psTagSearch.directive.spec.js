'use strict';

describe('Directive: psTagSearch', function () {

  // load the directive's module and view
  beforeEach(module('perfectScoreApp'));
  beforeEach(module('app/psTagSearch/psTagSearch.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ps-tag-search></ps-tag-search>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the psTagSearch directive');
  }));
});