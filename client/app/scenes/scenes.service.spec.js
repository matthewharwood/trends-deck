'use strict';

describe('Service: scenes', function () {

  // load the service's module
  beforeEach(module('trendsDeckApp'));

  // instantiate service
  var scenes;
  beforeEach(inject(function (_scenes_) {
    scenes = _scenes_;
  }));

  it('should do something', function () {
    expect(!!scenes).toBe(true);
  });

});
