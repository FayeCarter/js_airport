'use strict';

function Airport() {
  this.planes = [];
}

Airport.prototype.acceptPlane = function(plane) {
  this.planes.push(plane);
}
