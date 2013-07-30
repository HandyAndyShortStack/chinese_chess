var Piece = require('../src/piece.js');

describe('Piece', function() {
  var piece;

  beforeEach(function() {
    piece = new Piece('red');
  });

  it('has a color', function() {
    expect(piece.color).toBe('red');
  });
});
