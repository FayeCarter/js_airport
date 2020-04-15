'use strict';

describe('Plane', function() {
  let plane;
  let airport;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding', 'clearForTakeOff']);
  });

  it('The plane can land at an airport', function() {
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  it('can takeoff from an airport', function(){
    plane.land(airport);
    plane.takeOff();
    expect(airport.clearForTakeOff).toHaveBeenCalled();
  });
  
});