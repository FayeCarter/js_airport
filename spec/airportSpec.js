'use strict';

describe('Airport', function() {

  let airport;
  let plane;


  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it('An airport has no planes when created', function() {
    expect(airport.planes()).toEqual([]);
  });

  it('allows a plane to land', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('can clear planes for takeoff', function(){
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  });
});