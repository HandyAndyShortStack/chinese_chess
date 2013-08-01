var Square = require('../src/square.js');

describe('Square', function() {
  var square;

  beforeEach(function() {
    square = new Square(0, 0);
  });

  it('has x and y coordinates', function() {
    expect(square.x).toEqual(0);
    expect(square.y).toEqual(0);
  });

  it('returns coordinates', function() {
    expect(square.coordinates).toEqual('0,0');
  });
});
