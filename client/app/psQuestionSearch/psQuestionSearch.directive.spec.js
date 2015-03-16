'use strict';

describe('Directive: psQuestionSearch', function () {

  // load the directive's module and view
  beforeEach(module('perfectScoreApp'));
  beforeEach(module('app/psQuestionSearch/psQuestionSearch.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ps-question-search></ps-question-search>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the psQuestionSearch directive');
  }));
});