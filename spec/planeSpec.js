'use strict';

describe('Plane', function() {
  let plane;

  beforeEach(function() {
    plane = new Plane()
  });

  it('The plane can and at an airport', function() {
    expect(plane.land).toBeDefined();
  })
})