var Position = require('../src/position.js');
var Piece = require('../src/piece.js');

describe('Position', function() {
  var position;

  beforeEach(function() {
    position = new Position();
  });

  it('knows whose turn it is', function() {
    expect(position.toMove).toEqual('red');
  });

  it('can have pieces placed on it', function() {
    var piece = new Piece('red');
    var square = { x: 0, y: 0 };
    position.place(piece, square);

    expect(position[square]).toBe(piece);
    expect(piece.square).toBe(square);
  });
});
