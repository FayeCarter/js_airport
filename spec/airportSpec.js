'use strict';

describe('Airport', function() {

  let airport;
  let plane;


  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it('An airport has no planes when created', function() {
    expect(airport.planes).toBeEmpty;
  });

});