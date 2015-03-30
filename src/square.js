module.exports = Square;

function Square(x, y) {
  var left;
  var right;
  var up;
  var down;

  this.x = x;
  this.y = y;
  this.coordinates = x + ',' + y;

  Object.defineProperties(this, {
    left: {
      get: function() { return left; },
      set: function(square) { left = square; }
    },
    right: {
      get: function() { return right; },
      set: function(square) { right = square; }
    },
    up: {
      get: function() { return up; },
      set: function(square) { up = square; }
    },
    down: {
      get: function() { return down; },
      set: function(square) { down = square; }
    }
  });
}
