'use strict';

describe('Plane', function() {
  let plane;
  let airport;

  beforeEach(function() {
    plane = new Plane()
    airport = jasmine.createSpyObj('airport',['acceptPlane']);
  });

  it('The plane can land at an airport', function() {
    plane.land(airport);
    expect(airport.acceptPlane).toHaveBeenCalledWith(plane)
  })
})