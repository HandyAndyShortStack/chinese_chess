var Position = require('../src/position.js');
var Piece = require('../src/piece.js');
var Soldier = require('../src/soldier.js');

describe('Position', function() {
  var position;

  beforeEach(function() {
    position = new Position();
  });

  it('can have pieces placed on it', function() {
    var piece = new Piece('red');
    var coordinates = '0,0';
    var square = position.BOARD[coordinates]
    position.place(piece, coordinates);

    expect(position[coordinates]).toBe(piece);
    expect(piece.square).toBe(square);
  });

  it('can import position data', function() {
    position.import({ '0,0': new Piece('red') });

    expect(position['0,0'].constructor.name).toEqual('Piece');
  });

  it('collects the move lists of its pieces', function() {
    position.import({ '0,3': new Soldier('red')});

    expect(position.rawMoves['0,3']).toBeDefined();
  });
});
