'use strict';

describe('Directive: psQuestionEditor', function () {

  // load the directive's module and view
  beforeEach(module('perfectScoreApp'));
  beforeEach(module('app/psQuestionEditor/psQuestionEditor.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ps-question-editor></ps-question-editor>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the psQuestionEditor directive');
  }));
});