'use strict';

describe('Controller: PrincipleCtrl', function () {

  // load the controller's module
  beforeEach(module('trendsDeckApp'));

  var PrincipleCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PrincipleCtrl = $controller('PrincipleCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
