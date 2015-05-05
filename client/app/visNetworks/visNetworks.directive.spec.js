'use strict';

describe('Directive: visNetworks', function () {

  // load the directive's module
  beforeEach(module('trendsDeckApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<vis-networks></vis-networks>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the visNetworks directive');
  }));
});